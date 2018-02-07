jQuery(function () {
    // 页面配置项
    var KYEE_NEXT_MAIN_CONFIG;

    /**
     * 初始化调用，根据各项目需求，组织页面配置项
     */
    function setMainConfig() {
        var userInfo = {
            name: "管理员"
        };
        setTimeout(function () {
            KYEE_NEXT_MAIN_CONFIG = {
                "PRO_FAVICON": "./assets/favicon.ico", //收藏夹图标
                "PRO_TITLE": "京颐集团", //浏览器标题
                "PRO_LOGO": "./assets/img/logo.png", //左上角项目logo
                "PRO_NAME": "演示系统", //项目名称
                "SHOW_RECENT_FUNC": true, //是否显示最近常用功能区
                "CAN_TOGGLE_SYS": true, //是否可以切换系统
                "SYS_LIST": [{
                        "SYS_ID": "1",
                        "SYS_ICON": "icon_framework",
                        "SYS_LABEL": "电子报销平台"
                    },
                    {
                        "SYS_ID": "2",
                        "SYS_ICON": "icon_server",
                        "SYS_LABEL": "人力资源管理系统"
                    }
                ],
                "SCROLL_STEP": 200, // 已访问列表左、右箭头点击滑动距离
                "TOOL_BARS": [ //工具栏区域配置项
                    {
                        "TOOL_ID": 103,
                        "TOOL_ICON": "",
                        "TOOL_LABEL": "",
                        "ROUTER_LINK": "",
                        "USE_TEMPLATE": true,
                        "TEMPLATE": `
                    <li class="user-info KyeeNext-row-flex-box">
                        <img src="./assets/img/user.jpg"/>
                        <span>欢迎您，${userInfo.name}</span>
                    </li>
                    `
                    },
                    {
                        "TOOL_ID": 101,
                        "TOOL_ICON": "icon_setting",
                        "TOOL_LABEL": "设置",
                        "ROUTER_LINK": "",
                        "USE_TEMPLATE": false,
                        "TEMPLATE": "",
                        "BIND_FUNC": true,
                        "EVENT_FUNCS": [{
                            "EVENT_NAME": "click",
                            "EVENT_FUNC": function () {
                                console.log("click");
                            }
                        }, {
                            "EVENT_NAME": "mouseout",
                            "EVENT_FUNC": function () {
                                console.log("mouseout");
                            }
                        }]
                    },
                    {
                        "TOOL_ID": 102,
                        "TOOL_ICON": "icon_switch",
                        "TOOL_LABEL": "退出",
                        "ROUTER_LINK": "",
                        "USE_TEMPLATE": false,
                        "TEMPLATE": ""
                    },
                    {
                        "TOOL_ID": 103,
                        "TOOL_ICON": "icon_message",
                        "TOOL_LABEL": "消息",
                        "ROUTER_LINK": "",
                        "USE_TEMPLATE": false,
                        "TEMPLATE": "",
                        "BIND_FUNC": true,
                        "EVENT_FUNCS": [{
                            "EVENT_NAME": "click",
                            "EVENT_FUNC": function () {
                                $(".KyeeNext-ui-sidebar-mask").fadeIn(200);
                                $(".KyeeNext-sidebar-right").removeClass("KyeeNext-sidebar-hidden").addClass("KyeeNext-sidebar-show");
                            }
                        }]
                    }

                ],
                "SHOW_CUSTOMER_SERVICES": true, //是否显示右下角客服区
                "CUSTOMER_SERVICES": [ //客服区域配置项
                    {
                        "ITEM_ID": "1",
                        "ITEM_LABEL": "在线客服",
                        "ITEM_ICON": "icon_service"
                    },
                    {
                        "ITEM_ID": "2",
                        "ITEM_LABEL": "QQ客服",
                        "ITEM_ICON": "icon_qq"
                    },
                    {
                        "ITEM_ID": "3",
                        "ITEM_LABEL": "微信客服",
                        "ITEM_ICON": "icon_wechat"
                    },
                ],
                "ASIDE_MENU_ITEMS": [{
                        "MENU_ID": 1, //菜单唯一标识
                        "MENU_LABEL": "公共模块", //页面展示的文字
                        "MENU_TYPE": "0", //0、1、2分别代表跟节点、二级节点、三级节点
                        "MENU_ICON": "icon_files", //左侧字体图标
                        "ROUTER_LINK": "", //点击跳转路径
                        "AUTO_EXPANDED": false, //是否默认展开
                        "AUTO_CHECKED": false, //是否默认选中
                        "BIND_FUNC": false, // 是否绑定事件
                        "EVENT_FUNCS": [{
                            "EVENT_NAME": "click",
                            "EVENT_FUNC": function () {
                                console.log("click");
                            }
                        }, {
                            "EVENT_NAME": "mouseout",
                            "EVENT_FUNC": function () {
                                console.log("mouseout");
                            }
                        }],
                        "CHILDREN_ITEMS": [ //子节点数据
                            {
                                "MENU_ID": 11, //菜单唯一标识
                                "MENU_LABEL": "复合按钮", //页面展示的文字
                                "MENU_TYPE": "1", //0、1、2分别代表跟节点、二级节点、三级节点
                                "MENU_ICON": "", //左侧字体图标
                                "ROUTER_LINK": "", //点击跳转路径
                                "AUTO_EXPANDED": false, //是否默认展开
                                "AUTO_CHECKED": false, //是否默认选中
                                "CHILDREN_ITEMS": [ //子节点数据
                                    {
                                        "MENU_ID": 111, //菜单唯一标识
                                        "MENU_LABEL": "弹出消息", //页面展示的文字
                                        "MENU_TYPE": "2", //0、1、2分别代表跟节点、二级节点、三级节点
                                        "MENU_ICON": "", //左侧字体图标
                                        "ROUTER_LINK": "/app/business/home", //点击跳转路径
                                        "AUTO_EXPANDED": false, //是否默认展开
                                        "AUTO_CHECKED": false, //是否默认选中
                                    },
                                    {
                                        "MENU_ID": 112, //菜单唯一标识
                                        "MENU_LABEL": "内联消息", //页面展示的文字
                                        "MENU_TYPE": "2", //0、1、2分别代表跟节点、二级节点、三级节点
                                        "MENU_ICON": "", //左侧字体图标
                                        "ROUTER_LINK": "/app/business/home", //点击跳转路径
                                        "AUTO_EXPANDED": false, //是否默认展开
                                        "AUTO_CHECKED": false, //是否默认选中
                                    }
                                ]
                            },
                            {
                                "MENU_ID": 12, //菜单唯一标识
                                "MENU_LABEL": "手风琴面板", //页面展示的文字
                                "MENU_TYPE": "2", //0、1、2分别代表跟节点、二级节点、三级节点
                                "MENU_ICON": "", //左侧字体图标
                                "ROUTER_LINK": "/app/business/home", //点击跳转路径
                                "AUTO_EXPANDED": false, //是否默认展开
                                "AUTO_CHECKED": false, //是否默认选中
                                "CHILDREN_ITEMS": [ //子节点数据

                                ]
                            }
                        ]
                    },
                    {
                        "MENU_ID": 5, //菜单唯一标识
                        "MENU_LABEL": "公共服务及方法", //页面展示的文字
                        "MENU_TYPE": "0", //0、1、2分别代表跟节点、二级节点、三级节点
                        "MENU_ICON": "icon_save", //左侧字体图标
                        "ROUTER_LINK": "/app/business/home", //点击跳转路径
                        "AUTO_EXPANDED": false, //是否默认展开
                        "AUTO_CHECKED": false, //是否默认选中
                    },
                    {
                        "MENU_ID": 2, //菜单唯一标识
                        "MENU_LABEL": "数据展示", //页面展示的文字
                        "MENU_TYPE": "0", //0、1、2分别代表跟节点、二级节点、三级节点
                        "MENU_ICON": "icon_pc", //左侧字体图标
                        "ROUTER_LINK": "", //点击跳转路径
                        "AUTO_EXPANDED": false, //是否默认展开
                        "AUTO_CHECKED": false, //是否默认选中
                        "CHILDREN_ITEMS": [ //子节点数据
                            {
                                "MENU_ID": 21, //菜单唯一标识
                                "MENU_LABEL": "表格组件", //页面展示的文字
                                "MENU_TYPE": "1", //0、1、2分别代表跟节点、二级节点、三级节点
                                "MENU_ICON": "", //左侧字体图标
                                "ROUTER_LINK": "", //点击跳转路径
                                "AUTO_EXPANDED": false, //是否默认展开
                                "AUTO_CHECKED": false, //是否默认选中
                                "CHILDREN_ITEMS": [ //子节点数据
                                    {
                                        "MENU_ID": 211, //菜单唯一标识
                                        "MENU_LABEL": "基本功能", //页面展示的文字
                                        "MENU_TYPE": "2", //0、1、2分别代表跟节点、二级节点、三级节点
                                        "MENU_ICON": "", //左侧字体图标
                                        "ROUTER_LINK": "/app/business/home", //点击跳转路径
                                        "AUTO_EXPANDED": false, //是否默认展开
                                        "AUTO_CHECKED": false, //是否默认选中
                                    },
                                    {
                                        "MENU_ID": 212, //菜单唯一标识
                                        "MENU_LABEL": "增删改查", //页面展示的文字
                                        "MENU_TYPE": "2", //0、1、2分别代表跟节点、二级节点、三级节点
                                        "MENU_ICON": "", //左侧字体图标
                                        "ROUTER_LINK": "/app/business/home", //点击跳转路径
                                        "AUTO_EXPANDED": false, //是否默认展开
                                        "AUTO_CHECKED": false, //是否默认选中
                                    }
                                ]
                            },
                            {
                                "MENU_ID": 22, //菜单唯一标识
                                "MENU_LABEL": "排序列表", //页面展示的文字
                                "MENU_TYPE": "2", //0、1、2分别代表跟节点、二级节点、三级节点
                                "MENU_ICON": "", //左侧字体图标
                                "ROUTER_LINK": "/app/business/home", //点击跳转路径
                                "AUTO_EXPANDED": false, //是否默认展开
                                "AUTO_CHECKED": false, //是否默认选中
                                "CHILDREN_ITEMS": [ //子节点数据

                                ]
                            },
                            {
                                "MENU_ID": 23, //菜单唯一标识
                                "MENU_LABEL": "时间表", //页面展示的文字
                                "MENU_TYPE": "2", //0、1、2分别代表跟节点、二级节点、三级节点
                                "MENU_ICON": "", //左侧字体图标
                                "ROUTER_LINK": "/app/business/home", //点击跳转路径
                                "AUTO_EXPANDED": false, //是否默认展开
                                "AUTO_CHECKED": false, //是否默认选中
                                "CHILDREN_ITEMS": [ //子节点数据

                                ]
                            },
                            {
                                "MENU_ID": 24, //菜单唯一标识
                                "MENU_LABEL": "树组件", //页面展示的文字
                                "MENU_TYPE": "2", //0、1、2分别代表跟节点、二级节点、三级节点
                                "MENU_ICON": "", //左侧字体图标
                                "ROUTER_LINK": "", //点击跳转路径
                                "AUTO_EXPANDED": false, //是否默认展开
                                "AUTO_CHECKED": false, //是否默认选中
                                "CHILDREN_ITEMS": [ //子节点数据
                                    {
                                        "MENU_ID": 241, //菜单唯一标识
                                        "MENU_LABEL": "基础树", //页面展示的文字
                                        "MENU_TYPE": "2", //0、1、2分别代表跟节点、二级节点、三级节点
                                        "MENU_ICON": "", //左侧字体图标
                                        "ROUTER_LINK": "/app/business/home", //点击跳转路径
                                        "AUTO_EXPANDED": false, //是否默认展开
                                        "AUTO_CHECKED": false, //是否默认选中
                                    },
                                    {
                                        "MENU_ID": 242, //菜单唯一标识
                                        "MENU_LABEL": "下拉树", //页面展示的文字
                                        "MENU_TYPE": "2", //0、1、2分别代表跟节点、二级节点、三级节点
                                        "MENU_ICON": "", //左侧字体图标
                                        "ROUTER_LINK": "/app/business/home", //点击跳转路径
                                        "AUTO_EXPANDED": false, //是否默认展开
                                        "AUTO_CHECKED": false, //是否默认选中
                                    },
                                    {
                                        "MENU_ID": 243, //菜单唯一标识
                                        "MENU_LABEL": "右键菜单", //页面展示的文字
                                        "MENU_TYPE": "2", //0、1、2分别代表跟节点、二级节点、三级节点
                                        "MENU_ICON": "", //左侧字体图标
                                        "ROUTER_LINK": "/app/business/home", //点击跳转路径
                                        "AUTO_EXPANDED": false, //是否默认展开
                                        "AUTO_CHECKED": false, //是否默认选中
                                    },
                                    {
                                        "MENU_ID": 244, //菜单唯一标识
                                        "MENU_LABEL": "调整树宽度", //页面展示的文字
                                        "MENU_TYPE": "2", //0、1、2分别代表跟节点、二级节点、三级节点
                                        "MENU_ICON": "", //左侧字体图标
                                        "ROUTER_LINK": "/app/business/home", //点击跳转路径
                                        "AUTO_EXPANDED": false, //是否默认展开
                                        "AUTO_CHECKED": false, //是否默认选中
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "MENU_ID": 6, //菜单唯一标识
                        "MENU_LABEL": "页面布局", //页面展示的文字
                        "MENU_TYPE": "0", //0、1、2分别代表跟节点、二级节点、三级节点
                        "MENU_ICON": "icon_save", //左侧字体图标
                        "ROUTER_LINK": "/app/business/home", //点击跳转路径
                        "AUTO_EXPANDED": false, //是否默认展开
                        "AUTO_CHECKED": false, //是否默认选中
                    }
                ]
            }
            KYEE.init(KYEE_NEXT_MAIN_CONFIG);
        }, 1000);
    }

    // 页面初始化
    jQuery(document).ready(function () {
        setMainConfig();
    })
})