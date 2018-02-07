jQuery(function ($) {
    var userInfo = {
        name: "管理员"
    }
    var visitedItemsList = []; // 已访问链接列表
    var MAIN_CONFIG = {
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
                <li class="user-info kyee-next-row-flex-box">
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
                        $(".kyee-next-ui-sidebar-mask").fadeIn(200);
                        $(".kyee-next-sidebar-right").removeClass("kyee-next-sidebar-hidden").addClass("kyee-next-sidebar-show");
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

    // 页面初始化
    $(document).ready(function () {
        initPage();
    })

    // 初始化页面
    function initPage() {
        basicConfig(); // 页面基本配置项
        cloneAppendToolBars("kyee-next-func-item-temp", "kyee-next-func-items-box", "kyee-next-func-item-"); // 页面顶部工具栏
        cloneAppendMenuItems("kyee-next-menu-item-temp", "kyee-next-menu-items-box", "kyee-next-menu-item-"); // 页面左侧导航栏
        if (MAIN_CONFIG.SHOW_CUSTOMER_SERVICES && MAIN_CONFIG.CUSTOMER_SERVICES.length > 0) { // 页面右下角客服栏
            $("#kyee-next-customer-services-box").removeAttr("hidden");
            cloneAppendCustomerServices("kyee-next-customer-services-item-temp", "kyee-next-customer-services-box", "kyee-next-service-itemd-");
        }
        if (MAIN_CONFIG.CAN_TOGGLE_SYS && MAIN_CONFIG.SYS_LIST.length > 0) { // 可切换系统配置区
            $(".kyee-next-system-name-box>i").show();
            cloneAppendSysList("kyee-next-toggle-system-temp", "kyee-next-toggle-system-items-box", "kyee-next-system-item-");
        }
        if (!MAIN_CONFIG.SHOW_RECENT_FUNC) { // 控制已访问功能区tab页的显示与隐藏
            $(".kyee-next-visited-nav-box").hide();
            $(".kyee-next-main-body-box").addClass("kyee-next-hide-recent-func-tabbar");
        } else {
            $(".kyee-next-visited-nav-box").show();
            $(".kyee-next-main-body-box").removeClass("kyee-next-hide-recent-func-tabbar");
        }
    }

    // 页面基本配置
    function basicConfig() {
        $("title")[0].innerHTML = MAIN_CONFIG.PRO_TITLE; // 设置页面标题
        $("link[rel='icon']").attr("href", MAIN_CONFIG.PRO_FAVICON); // 设置页面收藏夹图标
        $("#kyee-next-pro-logo").attr("src", MAIN_CONFIG.PRO_LOGO); // 设置项目logo
        $("#kyee-next-system-name")[0].innerText = MAIN_CONFIG.PRO_NAME; // 设置项目名称
    }

    /**
     * 使用jQuery遍历工具栏配置项数据，克隆节点，添加到指定位置
     * @param {*} templateID 克隆节点模板
     * @param {*} parentID 需要添加到父节点的ID
     * @param {*} itemIdPrefix 克隆节点ID前缀
     */
    function cloneAppendToolBars(templateID, parentID, itemIdPrefix) {
        var templateHTML = $("#" + templateID);
        var itemsHTML = "";
        for (var i = 0, j = MAIN_CONFIG.TOOL_BARS.length; i < j; i++) {
            var item = MAIN_CONFIG.TOOL_BARS[i];
            if (!item.USE_TEMPLATE) {
                var itemHTML = templateHTML.clone().attr("id", itemIdPrefix + item.TOOL_ID).removeAttr("style");
                if (item.BIND_FUNC) { // 指定元素绑定事件
                    for (var x = 0, y = item.EVENT_FUNCS.length; x < y; x++) {
                        $("#kyee-next-func-items-box").on(item.EVENT_FUNCS[x].EVENT_NAME, "#" + (itemIdPrefix + item.TOOL_ID), item.EVENT_FUNCS[x].EVENT_FUNC);
                    }
                } else if (item.ROUTER_LINK) {

                }
                itemHTML.children("i").addClass(item.TOOL_ICON);
                itemHTML.children("span")[0].innerText = item.TOOL_LABEL;
                itemsHTML += itemHTML[0].outerHTML;
            } else {
                itemsHTML += item.TEMPLATE;
            }
        }
        $(itemsHTML).appendTo($("#" + parentID));
    }

    /**
     * 使用jQuery遍历左侧菜单栏配置项数据，克隆节点，添加到指定位置
     * @param {*} templateID 克隆节点模板
     * @param {*} parentID 需要添加到父节点的ID
     * @param {*} itemIdPrefix 克隆节点ID前缀
     */
    function cloneAppendMenuItems(templateID, parentID, itemIdPrefix) {
        var templateHTML = $("#" + templateID + " .kyee-next-item-level-0"); // 一级菜单模板
        var childTempHTML = $("#" + templateID + " .kyee-next-item-level-1"); // 二级菜单模板
        var grandchildTempHTML = $("#" + templateID + " .kyee-next-item-level-2"); // 三级菜单模板
        var htmlStr = ""; // 最终需要插入到DOM树中的DOM节点字符串
        for (var i = 0, j = MAIN_CONFIG.ASIDE_MENU_ITEMS.length; i < j; i++) { // 遍历一级菜单
            var itemHTMLStr = "";
            var item = MAIN_CONFIG.ASIDE_MENU_ITEMS[i];
            var itemHTML = templateHTML.clone().attr("id", itemIdPrefix + item.MENU_ID); // 获取一级菜单模板
            itemHTML.children(".kyee-next-item-icon-left").addClass(item.MENU_ICON); // 设置一级菜单左侧图标
            itemHTML.children("span")[0].innerText = item.MENU_LABEL; // 设置一级菜单名称
            item.ROUTER_LINK && itemHTML.addClass("kyee-router-link-flag"); // 设置点击是否跳转标识
            if (item.CHILDREN_ITEMS && item.CHILDREN_ITEMS.length > 0) { // 遍历二级菜单
                var childItemHTMLStr = "";
                for (var x = 0, y = item.CHILDREN_ITEMS.length; x < y; x++) {
                    var childItem = item.CHILDREN_ITEMS[x];
                    var childItemHTML = childTempHTML.clone().attr("id", itemIdPrefix + childItem.MENU_ID); // 获取二级菜单模板
                    childItemHTML.children("span")[0].innerText = childItem.MENU_LABEL; // 设置二级菜单的名称
                    childItem.ROUTER_LINK && childItemHTML.addClass("kyee-router-link-flag"); // 设置点击是否跳转标识
                    if (childItem.CHILDREN_ITEMS && childItem.CHILDREN_ITEMS.length > 0) { // 遍历三级菜单
                        var grandchildItemHTMLStr = "";
                        childItemHTML.children("i").addClass("icon_add"); // 设置二级菜单左侧图标
                        for (var k = 0, l = childItem.CHILDREN_ITEMS.length; k < l; k++) {
                            var grandchildItem = childItem.CHILDREN_ITEMS[k];
                            var grandchildItemHTML = grandchildTempHTML.clone().attr("id", itemIdPrefix + grandchildItem.MENU_ID); // 获取三级菜单模板
                            grandchildItem.ROUTER_LINK && grandchildItemHTML.addClass("kyee-router-link-flag"); // 设置点击是否跳转标识
                            grandchildItemHTML[0].innerHTML = grandchildItem.MENU_LABEL; // 设置三级菜单名称
                            grandchildItemHTMLStr += grandchildItemHTML[0].outerHTML; // 拼接三级菜单字符串 结果："<li>...</li><li>...</li>"
                        }
                        grandchildItemHTMLStr = '<ul class="kyee-next-submenu-hide">' + grandchildItemHTMLStr + "</ul>"; // 拼接三级菜单容器
                        childItemHTMLStr += '<li>' + childItemHTML[0].outerHTML + grandchildItemHTMLStr + '</li>'; // 拼接当前二级菜单
                    } else {
                        childItemHTMLStr += '<li>' + childItemHTML[0].outerHTML + '</li>'; // 拼接当前二级菜单
                    }
                }
                itemHTMLStr = '<ul class="kyee-next-submenu-hide">' + childItemHTMLStr + "</ul>"; // 拼接二级菜单容器
            }
            htmlStr += '<li class="kyee-next-item-level-0-folded">' + itemHTML[0].outerHTML + itemHTMLStr + '</li>'; // 拼接当前一级菜单
        }
        $(htmlStr).appendTo($("#" + parentID)); // 将拼接完的菜单插入到目标容器中
    }

    /**
     * 使用jQuery遍历右下角客服区配置项数据，克隆节点，添加到指定位置
     * @param {*} templateID 克隆节点模板
     * @param {*} parentID 需要添加到父节点的ID
     * @param {*} itemIdPrefix 克隆节点ID前缀
     */
    function cloneAppendCustomerServices(templateID, parentID, itemIdPrefix) {
        var templateHTML = $("#" + templateID);
        var itemsHTML = "";
        for (var i = 0, j = MAIN_CONFIG.CUSTOMER_SERVICES.length; i < j; i++) {
            var item = MAIN_CONFIG.CUSTOMER_SERVICES[i];
            var itemHTML = templateHTML.clone().attr("id", itemIdPrefix + item.ITEM_ID);
            itemHTML.children("span")[0].innerText = item.ITEM_LABEL;
            itemHTML.children("i").addClass(item.ITEM_ICON);
            itemsHTML += itemHTML[0].outerHTML;
        }
        $(itemsHTML).insertBefore("#kyee-next-customer-services-toggle-btn");
    }

    /**
     * 使用jQuery遍历切换系统区配置项数据，克隆节点，添加到指定位置
     * @param {*} templateID 克隆节点模板
     * @param {*} parentID 需要添加到父节点的ID
     * @param {*} itemIdPrefix 克隆节点ID前缀
     */
    function cloneAppendSysList(templateID, parentID, itemIdPrefix) {
        var templateHTML = $("#" + templateID);
        var itemsHTML = "";
        for (var i = 0, j = MAIN_CONFIG.SYS_LIST.length; i < j; i++) {
            var item = MAIN_CONFIG.SYS_LIST[i];
            var itemHTML = templateHTML.clone().attr("id", itemIdPrefix + item.SYS_ID).css("display", "block");
            itemHTML.children("i").addClass(item.SYS_ICON);
            itemHTML.children("span")[0].innerText = item.SYS_LABEL;
            itemsHTML += itemHTML[0].outerHTML;
        }
        $(itemsHTML).appendTo("#" + parentID);
        $(".kyee-next-system-name-box").on("mouseenter", function () {
            $(".kyee-next-toggle-system-box").delay(800).show(100);
        });
        $(".kyee-next-system-name-box").on("mouseleave", function () {
            $(".kyee-next-toggle-system-box").clearQueue();;
        });
        $(".kyee-next-toggle-system-box").on("mouseleave", function () {
            $(this).hide(100);
        })
    }

    // 左上角控制侧边栏固定或悬浮按钮点击事件
    $("#kyee-next-toggle-aside").on("click", function () {
        toogleAsideState();
    })

    // 切换侧边栏的固定（220px）、悬浮（70px）状态
    function toogleAsideState() {
        $(".kyee-next-aside-box").toggleClass("kyee-next-aside-folded"); // 侧边栏宽度 220px与70px 来回切换。
        KyeeToggleClass($("#kyee-next-toggle-aside"), "icon_menu_s", "icon_menu");
        $(".kyee-next-aside-box").off("mouseout").one("mouseout", function () { // 鼠标离开时触发（鼠标未离开，即使点击也不会触发）
            if ($(".kyee-next-aside-box").hasClass("kyee-next-aside-folded")) { // 由固定切换至悬浮状态时，切换右侧主体内容区域的样式（flex布局切换成absolute模式）、侧边栏添加hover效果。
                KyeeToggleClass($(".kyee-next-main-box"), "kyee-next-main-box-fixed", "kyee-next-main-box-dynamic");
                $(".kyee-next-aside-box").addClass("kyee-next-aside-box-hover");
            }
        })
        if ($(".kyee-next-aside-box").hasClass("kyee-next-aside-box-hover")) { // 判断是否真的切换到了悬浮状态（只有上述鼠标离开了，才算真正切换至悬浮状态）
            KyeeToggleClass($(".kyee-next-main-box"), "kyee-next-main-box-fixed", "kyee-next-main-box-dynamic"); // 若目前状态为悬浮状态，则切换至固定状态。
            $(".kyee-next-aside-box").removeClass("kyee-next-aside-box-hover");
        }
    }

    // 一级菜单点击事件
    $("#kyee-next-menu-items-box").on("click", ".kyee-next-item-level-0", function () {
        KyeeToggleClass($(this).parent(), "kyee-next-item-level-0-expanded", "kyee-next-item-level-0-folded"); // 切换一级菜单的展开折叠状态
        var me = this;
        $(".kyee-next-menu-items-box").children(".kyee-next-item-level-0-expanded").each(function () { // 折叠其他已展开的一级菜单
            if ($(me).parent()[0] != this) {
                $(this).removeClass("kyee-next-item-level-0-expanded").addClass("kyee-next-item-level-0-folded");
                if ($(this).children("ul").length > 0) {
                    $(this).children("ul").removeClass("kyee-next-submenu-show").addClass("kyee-next-submenu-hide");
                    $(this).children(".kyee-next-item-level-0").children(".kyee-next-item-icon-right").removeClass("kyee-next-item-icon-right-expanded").addClass("kyee-next-item-icon-right-folded");
                }
            }
        });
        if ($(this).parent().children("ul").length > 0) { // 若存在二级菜单，则切换二级菜单展开、折叠状态
            KyeeToggleClass($(this).parent().children("ul"), "kyee-next-submenu-show", "kyee-next-submenu-hide");
            KyeeToggleClass($(this).children(".kyee-next-item-icon-right"), "kyee-next-item-icon-right-folded", "kyee-next-item-icon-right-expanded")
        }
        MAIN_CONFIG.SHOW_RECENT_FUNC && $(this).hasClass("kyee-router-link-flag") && setItemToVisitedItems({ // 若可以跳转，执行跳转操作
            "MENU_ID": $(this).attr("id").substring(20),
            "MENU_LABEL": $(this).children("span")[0].innerText
        });
    })
    // 二级菜单点击事件
    $("#kyee-next-menu-items-box").on("click", ".kyee-next-item-level-1", function () {
        if ($(this).parent().children("ul").length > 0) { // 若存在三级菜单，则切换三级菜单展开、折叠状态
            KyeeToggleClass($(this).parent().children("ul"), "kyee-next-submenu-show", "kyee-next-submenu-hide");
            KyeeToggleClass($(this).children("i"), "icon_reduce", "icon_add");
        }
        if ($(this).hasClass("kyee-router-link-flag")) {
            MAIN_CONFIG.SHOW_RECENT_FUNC && setItemToVisitedItems({ // 若可以跳转，执行跳转操作
                "MENU_ID": $(this).attr("id").substring(20),
                "MENU_LABEL": $(this).children("span")[0].innerText
            });
            setMenuItemActive($(this)); // 设置菜单选中（active）状态
        }
    })
    // 三级菜单点击事件
    $("#kyee-next-menu-items-box").on("click", ".kyee-next-item-level-2", function () {
        if ($(this).hasClass("kyee-router-link-flag")) {
            MAIN_CONFIG.SHOW_RECENT_FUNC && setItemToVisitedItems({ // 若可以跳转，执行跳转操作
                "MENU_ID": $(this).attr("id").substring(20),
                "MENU_LABEL": $(this)[0].innerText
            });
            setMenuItemActive($(this)); // 设置菜单选中（active）状态
        }
    })

    /**
     * 设置左侧菜单栏中的target为选中状态
     * @param {*} target 目标DOM节点
     * @param {*} target 当前DOM节点
     */
    function setMenuItemActive(target, preTarget) {
        // if (preTarget) {
        //     if (!target.hasClass("item-level-0") && !preTarget.hasClass("item-level-0")) { // 非一级菜单才执行样式修改操作
        //         $(".item-level-1-2-active").removeClass("item-level-1-2-active");
        //         target.addClass("item-level-1-2-active");
        //     } else if (target.hasClass("item-level-0") && !preTarget.hasClass("item-level-0")) { // 一级菜单执行的样式修改操作
        //         $(".item-level-1-2-active").removeClass("item-level-1-2-active");
        //         target.parent().removeClass("item-level-0-folded").addClass("item-level-0-expanded");
        //     } else if (target.hasClass("item-level-0") && preTarget.hasClass("item-level-0")) {
        //         preTarget.parent().removeClass("item-level-0-expanded").addClass("item-level-0-folded");
        //         target.parent().removeClass("item-level-0-folded").addClass("item-level-0-expanded");
        //     } else if (!target.hasClass("item-level-0") && preTarget.hasClass("item-level-0")) {
        //         preTarget.parent().removeClass("item-level-0-expanded").addClass("item-level-0-folded");
        //         target.addClass("item-level-1-2-active");
        //     }
        // } else {

        // }
        $(".kyee-next-item-level-1-2-active").removeClass("kyee-next-item-level-1-2-active");
        target.addClass("kyee-next-item-level-1-2-active");
    }
    /**
     * 维护已访问链接列表
     * @param {*} val 需要插入到已访问列表中的对象
     */
    function setItemToVisitedItems(val) {
        if (findArray(visitedItemsList, {
                MENU_ID: val.MENU_ID
            }) < 0) { // 若不存在于已访问列表中，则插入相应数据
            visitedItemsList.push(val);
            $("#kyee-next-visited-items").children("li").removeClass("kyee-next-active-item");
            var visitedItem = $("#kyee-next-visited-item-temp").clone().attr("id", "kyee-next-visited-item-" + val.MENU_ID).css("display", "inline-block");
            visitedItem.children("span")[0].innerText = val.MENU_LABEL;
            visitedItem.appendTo($("#kyee-next-visited-items"));
        } else if (!$("#kyee-next-visited-item-" + val.MENU_ID).hasClass("kyee-next-active-item")) { // 若已存在于访问列表中，使其为active状态
            $("#kyee-next-visited-items").children("li").removeClass("kyee-next-active-item");
            $("#kyee-next-visited-item-" + val.MENU_ID).addClass("kyee-next-active-item");
        }
        alignToElement($("#kyee-next-visited-item-" + val.MENU_ID)[0]); // 计算偏移量，进行偏移，使完整显示
    }

    /**
     * 维护已访问链接列表
     * @param {*} menuId 需要从已访问列表中删除的对象ID
     * @param {*} element 需要从已访问列表中删除的对象ID
     */
    function removeItemFromVisitedItems(menuId, element) {
        var index = findArray(visitedItemsList, {
            MENU_ID: menuId
        });
        var target; // 删除后需要显示的活跃对象
        if (element.hasClass("kyee-next-active-item")) { // 若被删除对象为当前活跃对象，根据条件设置删除后的活跃对象
            var preTarget = $("#kyee-next-menu-item-" + visitedItemsList[index].MENU_ID);;
            if (index == visitedItemsList.length - 1 && visitedItemsList.length > 1) { // 若为最后一个tab页，则前一个tab页获焦
                $("#kyee-next-visited-item-" + visitedItemsList[index - 1].MENU_ID).addClass("kyee-next-active-item");
                target = $("#kyee-next-menu-item-" + visitedItemsList[index - 1].MENU_ID);
                setMenuItemActive(target, preTarget);
            } else if (index == 0 && visitedItemsList.length == 1) { // 若只有一个tab页，清除侧边栏相应菜单的选中样式
                $(".kyee-next-item-level-1-2-active").removeClass("kyee-next-item-level-1-2-active");
                // $(".kyee-next-item-level-0-expanded").removeClass("kyee-next-item-level-0-expanded").addClass("kyee-next-item-level-0-folded");
            } else if (index < visitedItemsList.length - 1) { // 若删除的tab页为中间的某一项，则后一个tab获焦
                $("#kyee-next-visited-item-" + visitedItemsList[index + 1].MENU_ID).addClass("kyee-next-active-item");
                target = $("#kyee-next-menu-item-" + visitedItemsList[index + 1].MENU_ID);
                setMenuItemActive(target, preTarget);
            }
        } else {
            target = $("#kyee-next-visited-items>.kyee-next-active-item"); // 若被删除对象非当前活跃对象，则活跃对象不变
        }
        if (index > -1) {
            visitedItemsList.splice(index, 1); // 维护已访问列表
            target && alignToElement(target); // 设置活跃对象完全可见
        }
    }

    /**
     * 查找数组，返回匹配到的第一个index
     * 
     * @param array 被查找的数组
     * @param feature 查找特征 或者为一个具体值，用于匹配数组遍历的值，或者为一个对象，表明所有希望被匹配的key-value
     * @param all boolean 希望命中feature全部特征或者只需命中一个特征，默认true
     * 
     * @return 数组下标  查找不到返回-1
     */
    function findArray(array, feature, all = true) {
        for (let index in array) {
            index = +index; // TODO:index 为什么是数值字符串？
            let cur = array[index];
            if (feature instanceof Object) {
                let allRight = true;
                for (let key in feature) {
                    let value = feature[key];
                    if (cur[key] == value && !all) return index;
                    if (all && cur[key] != value) {
                        allRight = false;
                        break;
                    }
                }
                if (allRight) return index;
            } else {
                if (cur == feature) {
                    return index;
                }
            }
        }
        return -1;
    }


    /**
     * 设置活跃对象完全可见
     * @param {*} target 当前活跃DOM
     */
    function alignToElement(target) {
        if (target instanceof jQuery) {
            target = target[0];
        }
        var left = target.offsetLeft - 20; // 获取目标节点相对于父容器的偏移量（位置）
        var width = target.offsetWidth; // 获取目标节点的宽度
        var container = $("#kyee-next-visited-items"); // 获取父容器
        var transformVal = container.css("transform") && container.css("transform") !== "none" ? +(container.css("transform").substring(7).split(',')[4]) : 0;
        var containerWidth = container.outerWidth(); // 外层父容器的宽度
        if (left >= -transformVal && left + width <= containerWidth - transformVal) {
            // 目标节点位于可视区域，不做偏移操作
        } else if (left < -transformVal) {
            container.css({
                "transform": "translateX(" + (60 - left < 0 ? 60 - left : 0) + "px)"
            });
        } else if (left + width > containerWidth - transformVal) {
            container.css({
                "transform": "translateX(" + (containerWidth - left - width - 80 < 0 ? containerWidth - left - width - 80 : 0) + "px)"
            });
        }
    }

    // 已访问链接导航栏列表项目点击事件
    $("#kyee-next-visited-items").on("click", "li", function () {
        if (!$(this).hasClass("kyee-next-active-item")) { // 设置活跃对象
            $(this).parent().children("li").removeClass("kyee-next-active-item");
            $(this).addClass("kyee-next-active-item");
        }
        var id = $(this).attr("id").substring(23);
        alignToElement($("#kyee-next-visited-item-" + id)); // 设置活跃对象完全可见
        var targetId = "#kyee-next-menu-item-" + id;
        if (!$(targetId).hasClass("kyee-next-item-level-1-2-active")) {
            setMenuItemActive($(targetId)); // 设置活跃对象对应的左侧菜单的选中（active）状态
        }
    })
    // 已访问链接导航栏列表项目关闭按钮点击事件
    $("#kyee-next-visited-items").on("click", "li>i", function (e) {
        $(this).parent().remove(); // 从DOM树中删除节点元素
        removeItemFromVisitedItems($(this).parent().attr("id").substring(23), $(this).parent()); // 从访问列表中删除节点信息
        e.stopPropagation();
    })
    // 已访问菜单左箭头点击事件（向左偏移）
    $(".kyee-next-nav-pre").on("click", function () {
        var container = $("#kyee-next-visited-items");
        var transformVal = container.css("transform") && container.css("transform") !== "none" ? +(container.css("transform").substring(7).split(',')[4]) : 0;
        var containerWidth = container.outerWidth();
        var visitedItemsWidthSum = getVisitedItemsWidthSum();
        if (transformVal > (containerWidth - visitedItemsWidthSum)) {
            container.css({
                "transform": "translateX(" + (transformVal - MAIN_CONFIG.SCROLL_STEP) + "px)"
            });
        }
    })
    // 已访问菜单右箭头点击事件（向右偏移）
    $(".kyee-next-nav-next").on("click", function () {
        var container = $("#kyee-next-visited-items");
        var transformVal = container.css("transform") && container.css("transform") !== "none" ? +(container.css("transform").substring(7).split(',')[4]) : 0;
        if (transformVal < 0) {
            container.css({
                "transform": "translateX(" + (transformVal + MAIN_CONFIG.SCROLL_STEP <= 0 ? transformVal + MAIN_CONFIG.SCROLL_STEP : 0) + "px)"
            });
        }
    })
    // 获取已访问菜单的总宽度
    function getVisitedItemsWidthSum() {
        var width = 0;
        var visitedItems = $("#kyee-next-visited-items>li");
        for (var i = 0, j = visitedItems.length; i < j; i++) {
            width += visitedItems[i].offsetWidth;
        }
        return width;
    }


    // 右下角客服按钮点击事件
    $("#kyee-next-customer-services-toggle-btn").on("click", function () {
        $(this).toggleClass("kyee-next-customer-services-expanded");
        $(".kyee-next-customer-services-item:not(#kyee-next-customer-services-item-temp)").fadeToggle("fast");
        KyeeToggleClass($(this).children("i"), "icon_add", "icon_reduce");
    })

    // 遮罩层点击事件
    $(".kyee-next-ui-sidebar-mask").on("click", function () {
        $(".kyee-next-sidebar-right").removeClass("kyee-next-sidebar-show").addClass("kyee-next-sidebar-hidden");
        $(".kyee-next-ui-sidebar-mask").fadeOut(200);
    })

    /**
     * 两个样式类互相切换，区别 jQuery 自带的 toogleClass 用法
     * @param {*} target 目标DOM节点
     * @param {*} className1 样式1
     * @param {*} className2 样式2
     */
    function KyeeToggleClass(target, className1, className2) {
        if (target.hasClass(className1)) {
            target.removeClass(className1).addClass(className2);
        } else if (target.hasClass(className2)) {
            target.removeClass(className2).addClass(className1);
        }
    }
})