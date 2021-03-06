import { 
    Login,
    Dashboard,
    NotFound,
    TicketCreate, 
    Ticket,
    TicketDetail,
    Notify,
    NotifyEdit,
    Deploy,
    DeployCommonConf,
    DeployWeight,
    DeployReleaseLog,
    DeployServiceStatus,
    DeployRelease,
    DeployModfiyInstance,
    DeployConfig
} from "../views";

import {
    HomeOutlined,
    SettingFilled,
    EditOutlined,
    RightSquareOutlined,
  } from '@ant-design/icons';


const commonRoutes = [
    {
        pathname: '/login',
        component: Login,
    },
    {
        pathname: '/404',
        component: NotFound,
    },
]

const privateRoutes = [
    {
        pathname: '/admin/dashboard',
        component: Dashboard,
        title: '仪表盘',
        icon: HomeOutlined,
        isTop: true,
        family: "system"
    },
    {
        pathname: '/admin/deploy',
        component: Deploy,
        title: '控制台',
        icon: RightSquareOutlined,
        isTop: true,
        exact: true,
        family: "deploy"
    },
    {
        pathname: '/admin/deploy/common-conf',
        component: DeployCommonConf,
        title: '公共配置',
        icon: RightSquareOutlined,
        isTop: false,
        exact: true,
        family: "deploy"
    },
    {
        pathname: '/admin/deploy/service-weight',
        component: DeployWeight,
        title: '权重',
        icon: RightSquareOutlined,
        isTop: false,
        exact: true,
        family: "deploy"
    },
    {
        pathname: '/admin/deploy/release-log',
        component: DeployReleaseLog,
        title: '发布记录',
        icon: RightSquareOutlined,
        isTop: false,
        exact: true,
        family: "deploy"
    },
    {
        pathname: '/admin/deploy/service-status',
        component: DeployServiceStatus,
        title: '服务状态',
        icon: RightSquareOutlined,
        isTop: false,
        exact: true,
        family: "deploy"
    },
    {
        pathname: '/admin/deploy/release',
        component: DeployRelease,
        title: '发布服务',
        icon: RightSquareOutlined,
        isTop: false,
        exact: true,
        family: "deploy"
    },
    {
        pathname: '/admin/deploy/modfiy-instance',
        component: DeployModfiyInstance,
        title: '实例数',
        icon: RightSquareOutlined,
        isTop: false,
        exact: true,
        family: "deploy"
    },
    {
        pathname: '/admin/deploy/deploy-config',
        component: DeployConfig,
        title: '服务配置',
        icon: RightSquareOutlined,
        isTop: false,
        exact: true,
        family: "deploy"
    },
    {
        pathname: '/admin/ticket',
        component: Ticket,
        title: '工单管理',
        icon: SettingFilled,
        exact: true,
        isTop: true,
        family: "ticket"
    },
    {
        pathname: '/admin/ticket/detail/:id',
        component: TicketDetail,
        title: '工单编辑',
        icon: SettingFilled,
        isTop: false,
        family: "ticket"
    },
    {
        pathname: '/admin/ticket/create',
        component: TicketCreate,
        title: '创建工单',
        icon: EditOutlined,
        isTop: true,
        family: "ticket"
    },
    {
        pathname: '/admin/notify',
        component: Notify,
        title: '通知中心',
        icon: SettingFilled,
        isTop: true,
        family: "system"
    },
    {
        pathname: '/admin/notify/edit/:id',
        component: NotifyEdit,
        title: '通知中心',
        icon: SettingFilled,
        isTop: false,
        family: "system"
    },
]

export {
    commonRoutes,
    privateRoutes
}