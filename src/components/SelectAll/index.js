import React from 'react'
import { Select } from 'antd'
const { Option } = Select;

const SelectAll = (props) => {

  const { onChange, value, children } = props

  // console.log('onChange, value, children', value, children)

  const onSelectChange = (key, item) => {
    if (key.includes('all')) {
      // if (value.length === children.length) {
      //   onChange([])
      // } else {
      //   let keyArr = children.map(x => {
      //     return x.key
      //   })
      //   onChange(keyArr)
      // }
      let keyArr = children.map(x => {
        return x.key
      })
      onChange(keyArr)
    } else {
      onChange(key)
    }
  }

  return (
    <Select
      maxTagCount={1}
      mode="multiple"
      optionFilterProp="children"
      showSearch
      allowClear
      removeIcon
      showArrow
      {...props}
      onChange={onSelectChange}
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      <Option key="all">
        全选
      </Option>
      {children}
    </Select>
  )

}
export default SelectAll