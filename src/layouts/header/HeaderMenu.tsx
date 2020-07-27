import { IMenuConf } from '@components/menu/MenuComponent';

export const MenuList: IMenuConf[] = [
    {
        key: '/menuExample',
        title: '菜单栏test',
        iconType: 'layout'
    },
    {
        key: '/anchorExample',
        title: '锚点选择test',
        iconType: 'appstore'
    },
    {
        key: '/listExample',
        title: '列表',
        iconType: 'ordered-list'
    },
    {
        key: '/chartExample',
        title: '数据可视化',
        iconType: 'pie-chart'
    },
    {
        key: '/emptyExample',
        title: '空白页',
        iconType: 'file'
    }
];
