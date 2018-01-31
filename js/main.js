jQuery(function ($) {
    var userInfo = {
        name: "张毅"
    }
    var visitedItemsList = []; // 已访问链接列表
    var MAIN_CONFIG = {
        "PRO_FAVICON": "./assets/favicon.ico", //收藏夹图标
        "PRO_TITLE": "京颐集团", //浏览器标题
        "PRO_LOGO": "./assets/img/logo.png", //左上角项目logo
        "PRO_NAME": "系统主界面", //项目名称
        "SCROLL_STEP": 200, // 已访问列表左、右箭头点击滑动距离
        "TOOL_BARS": [ //工具栏区域配置项
            {
                "TOOL_ID": 101,
                "TOOL_ICON": "icon-setting",
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
                "TOOL_ICON": "icon-switch",
                "TOOL_LABEL": "退出",
                "ROUTER_LINK": "",
                "USE_TEMPLATE": false,
                "TEMPLATE": ""
            },
            {
                "TOOL_ID": 103,
                "TOOL_ICON": "",
                "TOOL_LABEL": "",
                "ROUTER_LINK": "",
                "USE_TEMPLATE": true,
                "TEMPLATE": `
                <li class="user-info row-flex-box">
                    <img src="./assets/img/user.jpg"/>
                    <span>欢迎您，${userInfo.name}</span>
                </li>
                `
            }
        ],
        "SHOW_CUSTOMER_SERVICES": true, //是否显示右下角客服区
        "CUSTOMER_SERVICES": [ //客服区域配置项
            {
                "ITEM_ID": "1",
                "ITEM_LABEL": "微信客服",
                "ITEM_ICON": "icon-medicalrecord"
            },
            {
                "ITEM_ID": "2",
                "ITEM_LABEL": "QQ客服",
                "ITEM_ICON": "icon-favorite"
            },
            {
                "ITEM_ID": "3",
                "ITEM_LABEL": "电话客服",
                "ITEM_ICON": "icon-refresh"
            },
        ],
        "SHOW_RECENT_FUNC": false, //是否显示最近常用功能区
        "ASIDE_MENU_ITEMS": [{
                "MENU_ID": 1, //菜单唯一标识
                "MENU_LABEL": "审核管理", //页面展示的文字
                "MENU_TYPE": "0", //0、1、2分别代表跟节点、二级节点、三级节点
                "MENU_ICON": "icon-files", //左侧字体图标
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
                        "MENU_LABEL": "信息管理", //页面展示的文字
                        "MENU_TYPE": "1", //0、1、2分别代表跟节点、二级节点、三级节点
                        "MENU_ICON": "", //左侧字体图标
                        "ROUTER_LINK": "", //点击跳转路径
                        "AUTO_EXPANDED": false, //是否默认展开
                        "AUTO_CHECKED": false, //是否默认选中
                        "CHILDREN_ITEMS": [ //子节点数据
                            {
                                "MENU_ID": 111, //菜单唯一标识
                                "MENU_LABEL": "人员综合查询", //页面展示的文字
                                "MENU_TYPE": "2", //0、1、2分别代表跟节点、二级节点、三级节点
                                "MENU_ICON": "", //左侧字体图标
                                "ROUTER_LINK": "/app/business/home", //点击跳转路径
                                "AUTO_EXPANDED": false, //是否默认展开
                                "AUTO_CHECKED": false, //是否默认选中
                            },
                            {
                                "MENU_ID": 112, //菜单唯一标识
                                "MENU_LABEL": "补签次数统计", //页面展示的文字
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
                        "MENU_LABEL": "报表查询", //页面展示的文字
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
                "MENU_LABEL": "考勤管理", //页面展示的文字
                "MENU_TYPE": "0", //0、1、2分别代表跟节点、二级节点、三级节点
                "MENU_ICON": "icon-save", //左侧字体图标
                "ROUTER_LINK": "/app/business/home", //点击跳转路径
                "AUTO_EXPANDED": false, //是否默认展开
                "AUTO_CHECKED": false, //是否默认选中
            },
            {
                "MENU_ID": 2, //菜单唯一标识
                "MENU_LABEL": "审核管理", //页面展示的文字
                "MENU_TYPE": "0", //0、1、2分别代表跟节点、二级节点、三级节点
                "MENU_ICON": "icon-pc", //左侧字体图标
                "ROUTER_LINK": "", //点击跳转路径
                "AUTO_EXPANDED": false, //是否默认展开
                "AUTO_CHECKED": false, //是否默认选中
                "CHILDREN_ITEMS": [ //子节点数据
                    {
                        "MENU_ID": 21, //菜单唯一标识
                        "MENU_LABEL": "信息管理", //页面展示的文字
                        "MENU_TYPE": "1", //0、1、2分别代表跟节点、二级节点、三级节点
                        "MENU_ICON": "", //左侧字体图标
                        "ROUTER_LINK": "", //点击跳转路径
                        "AUTO_EXPANDED": false, //是否默认展开
                        "AUTO_CHECKED": false, //是否默认选中
                        "CHILDREN_ITEMS": [ //子节点数据
                            {
                                "MENU_ID": 211, //菜单唯一标识
                                "MENU_LABEL": "人员综合查询", //页面展示的文字
                                "MENU_TYPE": "2", //0、1、2分别代表跟节点、二级节点、三级节点
                                "MENU_ICON": "", //左侧字体图标
                                "ROUTER_LINK": "/app/business/home", //点击跳转路径
                                "AUTO_EXPANDED": false, //是否默认展开
                                "AUTO_CHECKED": false, //是否默认选中
                            },
                            {
                                "MENU_ID": 212, //菜单唯一标识
                                "MENU_LABEL": "补签次数统计", //页面展示的文字
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
                        "MENU_LABEL": "报表查询", //页面展示的文字
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
                        "MENU_LABEL": "报表查询", //页面展示的文字
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
                        "MENU_LABEL": "报表查询", //页面展示的文字
                        "MENU_TYPE": "2", //0、1、2分别代表跟节点、二级节点、三级节点
                        "MENU_ICON": "", //左侧字体图标
                        "ROUTER_LINK": "", //点击跳转路径
                        "AUTO_EXPANDED": false, //是否默认展开
                        "AUTO_CHECKED": false, //是否默认选中
                        "CHILDREN_ITEMS": [ //子节点数据
                            {
                                "MENU_ID": 241, //菜单唯一标识
                                "MENU_LABEL": "人员综合查询", //页面展示的文字
                                "MENU_TYPE": "2", //0、1、2分别代表跟节点、二级节点、三级节点
                                "MENU_ICON": "", //左侧字体图标
                                "ROUTER_LINK": "/app/business/home", //点击跳转路径
                                "AUTO_EXPANDED": false, //是否默认展开
                                "AUTO_CHECKED": false, //是否默认选中
                            },
                            {
                                "MENU_ID": 242, //菜单唯一标识
                                "MENU_LABEL": "补签次数统计", //页面展示的文字
                                "MENU_TYPE": "2", //0、1、2分别代表跟节点、二级节点、三级节点
                                "MENU_ICON": "", //左侧字体图标
                                "ROUTER_LINK": "/app/business/home", //点击跳转路径
                                "AUTO_EXPANDED": false, //是否默认展开
                                "AUTO_CHECKED": false, //是否默认选中
                            },
                            {
                                "MENU_ID": 243, //菜单唯一标识
                                "MENU_LABEL": "人员综合查询", //页面展示的文字
                                "MENU_TYPE": "2", //0、1、2分别代表跟节点、二级节点、三级节点
                                "MENU_ICON": "", //左侧字体图标
                                "ROUTER_LINK": "/app/business/home", //点击跳转路径
                                "AUTO_EXPANDED": false, //是否默认展开
                                "AUTO_CHECKED": false, //是否默认选中
                            },
                            {
                                "MENU_ID": 244, //菜单唯一标识
                                "MENU_LABEL": "补签次数统计", //页面展示的文字
                                "MENU_TYPE": "2", //0、1、2分别代表跟节点、二级节点、三级节点
                                "MENU_ICON": "", //左侧字体图标
                                "ROUTER_LINK": "/app/business/home", //点击跳转路径
                                "AUTO_EXPANDED": false, //是否默认展开
                                "AUTO_CHECKED": false, //是否默认选中
                            }
                        ]
                    }
                ]
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
        cloneAppendToolBars("func-item-temp", "func-items-box", "func-item-"); // 页面顶部工具栏
        cloneAppendMenuItems("menu-item-temp", "menu-items-box", "menu-item-"); // 页面左侧导航栏
        if (MAIN_CONFIG.SHOW_CUSTOMER_SERVICES && MAIN_CONFIG.CUSTOMER_SERVICES.length > 0) {
            $("#customer-services-box").removeAttr("hidden");
            cloneAppendCustomerServices("customer-services-item-temp", "customer-services-box", "service-itemd-"); // 页面右下角客服栏
        }
    }

    // 页面基本配置
    function basicConfig() {
        $("title")[0].innerHTML = MAIN_CONFIG.PRO_TITLE; // 设置页面标题
        $("link[rel='icon']").attr("href", MAIN_CONFIG.PRO_FAVICON); // 设置页面收藏夹图标
        $("#pro-logo").attr("src", MAIN_CONFIG.PRO_LOGO); // 设置项目logo
        $("#system-name")[0].innerText = MAIN_CONFIG.PRO_NAME; // 设置项目名称
    }

    /**
     * 使用jQuery遍历工具栏配置项数据，克隆节点，添加到指定位置
     * @param {*} templateID 克隆节点模板
     * @param {*} parentID 需要添加到父节点的ID
     * @param {*} itemIdPrefix 克隆节点ID前缀
     * @param {*} data 需要克隆的数据
     */
    function cloneAppendToolBars(templateID, parentID, itemIdPrefix) {
        var templateHTML = $("#" + templateID);
        var itemsHTML = "";
        for (var i = 0, j = MAIN_CONFIG.TOOL_BARS.length; i < j; i++) {
            var item = MAIN_CONFIG.TOOL_BARS[i];
            if (!item.USE_TEMPLATE) {
                var itemHTML = templateHTML.clone().attr("id", itemIdPrefix + item.TOOL_ID).css("display", "inline-block");
                if (item.BIND_FUNC) { // 指定元素绑定事件
                    for (var x = 0, y = item.EVENT_FUNCS.length; x < y; x++) {
                        $("#func-items-box").on(item.EVENT_FUNCS[x].EVENT_NAME, "#" + (itemIdPrefix + item.TOOL_ID), item.EVENT_FUNCS[x].EVENT_FUNC);
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
     * @param {*} templateID 
     * @param {*} parentID 
     * @param {*} itemIdPrefix 
     */
    function cloneAppendMenuItems(templateID, parentID, itemIdPrefix) {
        var templateHTML = $("#" + templateID + " .item-level-0"); // 一级菜单模板
        var childTempHTML = $("#" + templateID + " .item-level-1"); // 二级菜单模板
        var grandchildTempHTML = $("#" + templateID + " .item-level-2"); // 三级菜单模板
        var htmlStr = ""; // 最终需要插入到DOM树中的DOM节点字符串
        for (var i = 0, j = MAIN_CONFIG.ASIDE_MENU_ITEMS.length; i < j; i++) { // 遍历一级菜单
            var itemHTMLStr = "";
            var item = MAIN_CONFIG.ASIDE_MENU_ITEMS[i];
            var itemHTML = templateHTML.clone().attr("id", itemIdPrefix + item.MENU_ID); // 获取一级菜单模板
            itemHTML.children(".item-icon-left").addClass(item.MENU_ICON); // 设置一级菜单左侧图标
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
                        childItemHTML.children("i").addClass("icon-add"); // 设置二级菜单左侧图标
                        for (var k = 0, l = childItem.CHILDREN_ITEMS.length; k < l; k++) {
                            var grandchildItem = childItem.CHILDREN_ITEMS[k];
                            var grandchildItemHTML = grandchildTempHTML.clone().attr("id", itemIdPrefix + grandchildItem.MENU_ID); // 获取三级菜单模板
                            grandchildItem.ROUTER_LINK && grandchildItemHTML.addClass("kyee-router-link-flag"); // 设置点击是否跳转标识
                            grandchildItemHTML[0].innerHTML = grandchildItem.MENU_LABEL; // 设置三级菜单名称
                            grandchildItemHTMLStr += grandchildItemHTML[0].outerHTML; // 拼接三级菜单字符串 结果："<li>...</li><li>...</li>"
                        }
                        grandchildItemHTMLStr = '<ul class="submenu-hide">' + grandchildItemHTMLStr + "</ul>"; // 拼接三级菜单容器
                        childItemHTMLStr += '<li>' + childItemHTML[0].outerHTML + grandchildItemHTMLStr + '</li>'; // 拼接当前二级菜单
                    } else {
                        // childItemHTML.children("i").css({
                        //     "display": "inline-block",
                        //     "width": "12px"
                        // }); // 设置二级菜单左侧占位，使对齐
                        childItemHTMLStr += '<li>' + childItemHTML[0].outerHTML + '</li>'; // 拼接当前二级菜单
                    }
                }
                itemHTMLStr = '<ul class="submenu-hide">' + childItemHTMLStr + "</ul>"; // 拼接二级菜单容器
            }
            htmlStr += '<li class="item-level-0-folded">' + itemHTML[0].outerHTML + itemHTMLStr + '</li>'; // 拼接当前一级菜单
        }
        $(htmlStr).appendTo($("#" + parentID)); // 将拼接完的菜单插入到目标容器中
    }

    /**
     * 使用jQuery遍历右下角客服区配置项数据，克隆节点，添加到指定位置
     * @param {*} templateID 
     * @param {*} parentID 
     * @param {*} itemIdPrefix 
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
        $(itemsHTML).insertBefore("#customer-services-toggle-btn");
    }

    // 左上角控制侧边栏固定或悬浮按钮点击事件
    $("#toggle-aside").on("click", function () {
        toogleAsideState();
    })

    // 切换侧边栏的固定（220px）、悬浮（70px）状态
    function toogleAsideState() {
        $(".aside-box").toggleClass("aside-folded"); // 侧边栏宽度 220px与70px 来回切换。
        KyeeToggleClass($("#toggle-aside"), "icon-menu_s", "icon-menu");
        $(".aside-box").off("mouseout").one("mouseout", function () { // 鼠标离开时触发（鼠标未离开，即使点击也不会触发）
            if ($(".aside-box").hasClass("aside-folded")) { // 由固定切换至悬浮状态时，切换右侧主体内容区域的样式（flex布局切换成absolute模式）、侧边栏添加hover效果。
                console.log("mouseout");
                KyeeToggleClass($(".main-box"), "main-box-fixed", "main-box-dynamic");
                $(".aside-box").addClass("aside-box-hover");
            }
        })
        if ($(".aside-box").hasClass("aside-box-hover")) { // 判断是否真的切换到了悬浮状态（只有上述鼠标离开了，才算真正切换至悬浮状态）
            KyeeToggleClass($(".main-box"), "main-box-fixed", "main-box-dynamic"); // 若目前状态为悬浮状态，则切换至固定状态。
            $(".aside-box").removeClass("aside-box-hover");
        }
    }

    // 一级菜单点击事件
    $("#menu-items-box").on("click", ".item-level-0", function () {
        KyeeToggleClass($(this).parent(), "item-level-0-expanded", "item-level-0-folded"); // 切换一级菜单的展开折叠状态
        var me = this;
        $(".menu-items-box").children(".item-level-0-expanded").each(function () { // 折叠其他已展开的一级菜单
            if ($(me).parent()[0] != this) {
                $(this).removeClass("item-level-0-expanded").addClass("item-level-0-folded");
                if ($(this).children("ul").length > 0) {
                    $(this).children("ul").removeClass("submenu-show").addClass("submenu-hide");
                    $(this).children(".item-level-0").children(".item-icon-right").removeClass("item-icon-right-expanded").addClass("item-icon-right-folded");
                }
            }
        });
        if ($(this).parent().children("ul").length > 0) { // 若存在二级菜单，则切换二级菜单展开、折叠状态
            KyeeToggleClass($(this).parent().children("ul"), "submenu-show", "submenu-hide");
            KyeeToggleClass($(this).children(".item-icon-right"), "item-icon-right-folded", "item-icon-right-expanded")
        }
        $(this).hasClass("kyee-router-link-flag") && setItemToVisitedItems({ // 若可以跳转，执行跳转操作
            "MENU_ID": $(this).attr("id").substring(10),
            "MENU_LABEL": $(this).children("span")[0].innerText
        });
    })
    // 二级菜单点击事件
    $("#menu-items-box").on("click", ".item-level-1", function () {
        if ($(this).parent().children("ul").length > 0) { // 若存在三级菜单，则切换三级菜单展开、折叠状态
            KyeeToggleClass($(this).parent().children("ul"), "submenu-show", "submenu-hide");
            KyeeToggleClass($(this).children("i"), "icon-reduce", "icon-add");
        }
        $(this).hasClass("kyee-router-link-flag") && setItemToVisitedItems({ // 若可以跳转，执行跳转操作
            "MENU_ID": $(this).attr("id").substring(10),
            "MENU_LABEL": $(this).children("span")[0].innerText
        });
    })
    // 三级菜单点击事件
    $("#menu-items-box").on("click", ".item-level-2", function () {
        $(this).hasClass("kyee-router-link-flag") && setItemToVisitedItems({ // 若可以跳转，执行跳转操作
            "MENU_ID": $(this).attr("id").substring(10),
            "MENU_LABEL": $(this)[0].innerText
        });
    })

    /**
     * 维护已访问链接列表
     * @param {*} val 需要插入到已访问列表中的对象
     */
    function setItemToVisitedItems(val) {
        if (findArray(visitedItemsList, {
                MENU_ID: val.MENU_ID
            }) < 0) {
            visitedItemsList.push(val);
            $(".visited-items").children("li").removeClass("active-item");
            var visitedItem = $("#visited-item-temp").clone().attr("id", "visited-item-" + val.MENU_ID).css("display", "inline-block");
            visitedItem.children("span")[0].innerText = val.MENU_LABEL;
            visitedItem.appendTo($(".visited-items"));
        } else if (!$("#visited-item-" + val.MENU_ID).hasClass("visited-items")) {
            $(".visited-items").children("li").removeClass("active-item");
            $("#visited-item-" + val.MENU_ID).addClass("active-item");
        }
    }

    /**
     * 维护以访问链接列表
     * @param {*} val 需要从已访问列表中删除的对象
     */
    function removeItemFromVisitedItems(val) {
        var index = findArray(visitedItemsList, {
            MENU_ID: val.MENU_ID
        });
        if (index > -1) {
            visitedItemsList.splice(index, 1);
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

    // 已访问链接导航栏列表项目点击事件
    $(".visited-items").on("click", "li", function () {
        if (!$(this).hasClass("active-item")) {
            $(this).parent().children("li").removeClass("active-item");
            $(this).addClass("active-item");
        }
    })
    // 已访问链接导航栏列表项目关闭按钮点击事件
    $(".visited-items").on("click", "li>i", function (e) {
        removeItemFromVisitedItems({ // 从访问列表中删除节点信息
            "MENU_ID": $(this).parent().attr("id").substring(13)
        });
        $(this).parent().remove(); // 从DOM树中删除节点元素
        e.stopPropagation();
    })
    // 已访问菜单左箭头点击事件（向左偏移）
    $(".nav-pre").on("click", function () {
        var target = $(this).next().children("ul");
        var transformVal = target.css("transform") && target.css("transform") !== "none" ? +(target.css("transform").substring(7).split(',')[4]) : 0;
        var containerWidth = $(".visited-items").outerWidth();
        var visitedItemsWidthSum = getVisitedItemsWidthSum();
        if (transformVal > (containerWidth - visitedItemsWidthSum)) {
            // target.css({ // 暂不使用ES6的写法
            //     "transform": `translateX(${transformVal-MAIN_CONFIG.SCROLL_STEP}px)`
            // });
            target.css({
                "transform": "translateX(" + (transformVal - MAIN_CONFIG.SCROLL_STEP) + "px)"
            });
        }
    })
    // 已访问菜单右箭头点击事件（向右偏移）
    $(".nav-next").on("click", function () {
        var target = $(this).prev().children("ul");
        var transformVal = target.css("transform") && target.css("transform") !== "none" ? +(target.css("transform").substring(7).split(',')[4]) : 0;
        if (transformVal < 0) {
            // target.css({ // 暂不使用ES6的写法
            //     "transform": `translateX(${transformVal+MAIN_CONFIG.SCROLL_STEP<=0?transformVal+MAIN_CONFIG.SCROLL_STEP:0}px)`
            // });
            target.css({
                "transform": "translateX(" + (transformVal + MAIN_CONFIG.SCROLL_STEP <= 0 ? transformVal + MAIN_CONFIG.SCROLL_STEP : 0) + "px)"
            });
        }
    })
    // 获取已访问菜单的总宽度
    function getVisitedItemsWidthSum() {
        var width = 0;
        var visitedItems = $(".visited-items>li");
        for (var i = 0, j = visitedItems.length; i < j; i++) {
            width += visitedItems[i].offsetWidth;
        }
        return width;
    }


    // 右下角客服按钮点击事件
    $("#customer-services-toggle-btn").on("click", function () {
        $(this).toggleClass("customer-services-expanded");
        $(".customer-services-item:not(#customer-services-item-temp)").fadeToggle("fast");
        KyeeToggleClass($(this).children("i"), "icon-add", "icon-reduce");
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