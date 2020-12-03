/**
 * desc: file upload
 * auther: 飞启
 */
import request from '@/utils/request'

let ossUrl = 'http://172.17.15.127:38082/thirdApiInfo/oss/1'

function getNowDate () {
  var date = new Date()
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
  if (month < 10) {
    month = '0' + month
  }
  if (day < 10) {
    day = '0' + day
  }
  return year + '-' + month + '-' + day
}

export const getSignature = () => {
  return new Promise(resolve => {
    let res = eval('(' + sessionStorage.getItem('ossInfo') + ')')
    var timestamp = Date.parse(new Date()) / 1000
    if (res && res.expire - 12 * 60 * 60 > timestamp) {
      resolve(res)
    } else {
      request.get(ossUrl).then(res => {
        sessionStorage.setItem('ossInfo', JSON.stringify(res.data))
        resolve(res.data)
      })
    }
  })
}
//计算一个随机的文件名称
function S4 () {
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
}
function guid () {
  return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4()
}
function random_guid_filename (len) {
  return 'app' + guid()
}

function get_suffix (filename) {
  let pos = filename.lastIndexOf('.')
  if (pos != -1) {
    return filename.substring(pos)
  }
  return ''
}

export function calculateObjectName (dir, filename) {
  return dir + 'digitalcnzz-appcenter/' + getNowDate() + '/' + random_guid_filename() + get_suffix(filename)
}

export const uploadFile = async (file, callBack) => {
  await getSignature()
  const ossInfo = sessionStorage.getItem('ossInfo')
  const OSSData = JSON.parse(ossInfo)

  const filename = calculateObjectName(OSSData.dir, file.name)
  const key = `${OSSData.dir}${filename}` // 上传的文件路径

  const formData = new FormData()
  formData.append('name', file.name)
  formData.append('key', filename)
  formData.append('success_action_status', 200)
  formData.append('OSSAccessKeyId', OSSData.accessid)
  formData.append('policy', OSSData.policy)
  formData.append('Signature', OSSData.signature)
  formData.append('file', file.originFileObj)

  await fetch(OSSData.host, {
    method: 'POST',
    body: formData
  })

  callBack(`${OSSData.host}/${filename}`)
}
