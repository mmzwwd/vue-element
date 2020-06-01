let  routerUrl={
    operate: [
        {
            icon: 'el-icon-lx-home',
            index: 'dashboard',
            title: '首页'
        },
        {
            icon: 'el-icon-tickets',
            index: 'archives',
            title: '档案信息',
        },
        {
            icon: 'el-icon-setting',
            index: '2',
            title: '管理中心',
            subs: [
                {
                    index: 'manageCenter',
                    title: '用户管理'
                },
                {
                    index: 'system',
                    title: '系统管理'
                }
            ]
        },
        {
            icon: 'el-icon-folder-opened',
            index: '3',
            title: '档案夹',
            subs: [
                {
                    index: 'fileFolder',
                    title: '档案馆'
                },
                {
                    index: 'charts',
                    title: '统计中心'
                }
            ]
        },
        {
            icon: 'el-icon-lx-emoji',
            index: 'icon',
            title: '自定义图标'
        },

    ],
    manage: [
        {
            icon: 'el-icon-lx-home',
            index: 'dashboard',
            title: '首页'
        },
        {
            icon: 'el-icon-setting',
            index: '2',
            title: '管理中心',
            subs: [
                {
                    index: 'manageCenter',
                    title: '用户管理'
                },
                {
                    index: 'system',
                    title: '系统管理'
                }
            ]
        },
        {
            icon: 'el-icon-folder-opened',
            index: '3',
            title: '档案夹',
            subs: [
                {
                    index: 'fileFolder',
                    title: '档案馆'
                },
                {
                    index: 'charts',
                    title: '统计中心'
                }
            ]
        },
    ],
    superManage: [
        {
            icon: 'el-icon-lx-home',
            index: 'dashboard',
            title: '首页'
        },
    ],

}
export default routerUrl
