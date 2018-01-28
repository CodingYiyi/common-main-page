jQuery(function ($) {
    var userInfo = {
        name: "张毅"
    }
    var MAIN_CONFIG = {
        "PRO_LOGO": "../assets/img/logo", //左上角项目logo
        "PRO_NAME": "系统主界面", //项目名称
        "TOOL_BARS": [ //工具栏区域配置项
            {
                "TOOL_ID": 101,
                "TOOL_ICON": "icon_set",
                "TOOL_LABEL": "设置",
                "ROUTER_LINK": "",
                "USE_TEMPLATE": false,
                "TEMPLATE": "",
                "BIND_FUNC": true,
                "EVENT_NAME": ["click", "mouseout"],
                "EVENT_FUNC": [function () {
                    console.log(this.valueOf());
                }, function () {
                    console.log(this.valueOf());
                }]
            },
            {
                "TOOL_ID": 102,
                "TOOL_ICON": "icon_computer",
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
        "SHOW_CUSTOMER_SERVICES": false, //是否显示右下角客服区
        "CUSTOMER_SERVICES": [ //客服区域配置项
            {

            }
        ],
        "SHOW_RECENT_FUNC": false, //是否显示最近常用功能区
        "ASIDE_MENU_ITEMS": [{
                "MENU_ID": 30, //菜单唯一标识
                "MENU_LABEL": "一级菜单①", //页面展示的文字
                "MENU_TYPE": "0", //0、1、2分别代表跟节点、二级节点、三级节点
                "MENU_ICON": "icon_friend_list", //左侧字体图标
                "ROUTER_LINK": "/app/business/home", //点击跳转路径
                "AUTO_EXPANDED": true, //是否默认展开
                "AUTO_CHECKED": false, //是否默认选中
                "CHILDREN_ITEMS": [ //子节点数据
                    {
                        "MENU_ID": 301, //菜单唯一标识
                        "MENU_LABEL": "①二级菜单①", //页面展示的文字
                        "MENU_TYPE": "0", //0、1、2分别代表跟节点、二级节点、三级节点
                        "MENU_ICON": "icon_friend_list", //左侧字体图标
                        "ROUTER_LINK": "/app/business/home", //点击跳转路径
                        "AUTO_EXPANDED": true, //是否默认展开
                        "AUTO_CHECKED": false, //是否默认选中
                        "CHILDREN_ITEMS": [ //子节点数据
                            {
                                "MENU_ID": 30, //菜单唯一标识
                                "MENU_LABEL": "三级菜单①", //页面展示的文字
                                "MENU_TYPE": "0", //0、1、2分别代表跟节点、二级节点、三级节点
                                "MENU_ICON": "icon_friend_list", //左侧字体图标
                                "ROUTER_LINK": "/app/business/home", //点击跳转路径
                                "AUTO_EXPANDED": true, //是否默认展开
                                "AUTO_CHECKED": false, //是否默认选中
                            },
                            {
                                "MENU_ID": 30, //菜单唯一标识
                                "MENU_LABEL": "三级菜单②", //页面展示的文字
                                "MENU_TYPE": "0", //0、1、2分别代表跟节点、二级节点、三级节点
                                "MENU_ICON": "icon_friend_list", //左侧字体图标
                                "ROUTER_LINK": "/app/business/home", //点击跳转路径
                                "AUTO_EXPANDED": true, //是否默认展开
                                "AUTO_CHECKED": false, //是否默认选中
                            }
                        ]
                    },
                    {
                        "MENU_ID": 302, //菜单唯一标识
                        "MENU_LABEL": "①二级菜单②", //页面展示的文字
                        "MENU_TYPE": "0", //0、1、2分别代表跟节点、二级节点、三级节点
                        "MENU_ICON": "icon_friend_list", //左侧字体图标
                        "ROUTER_LINK": "/app/business/home", //点击跳转路径
                        "AUTO_EXPANDED": true, //是否默认展开
                        "AUTO_CHECKED": false, //是否默认选中
                        "CHILDREN_ITEMS": [ //子节点数据

                        ]
                    }
                ]
            },
            {
                "MENU_ID": 40, //菜单唯一标识
                "MENU_LABEL": "一级菜单②", //页面展示的文字
                "MENU_TYPE": "0", //0、1、2分别代表跟节点、二级节点、三级节点
                "MENU_ICON": "icon_friend_list", //左侧字体图标
                "ROUTER_LINK": "/app/business/home", //点击跳转路径
                "AUTO_EXPANDED": true, //是否默认展开
                "AUTO_CHECKED": false, //是否默认选中
                "CHILDREN_ITEMS": [ //子节点数据
                    {
                        "MENU_ID": 401, //菜单唯一标识
                        "MENU_LABEL": "②二级菜单①", //页面展示的文字
                        "MENU_TYPE": "0", //0、1、2分别代表跟节点、二级节点、三级节点
                        "MENU_ICON": "icon_friend_list", //左侧字体图标
                        "ROUTER_LINK": "/app/business/home", //点击跳转路径
                        "AUTO_EXPANDED": true, //是否默认展开
                        "AUTO_CHECKED": false, //是否默认选中
                        "CHILDREN_ITEMS": [ //子节点数据

                        ]
                    },
                    {
                        "MENU_ID": 402, //菜单唯一标识
                        "MENU_LABEL": "②二级菜单②", //页面展示的文字
                        "MENU_TYPE": "0", //0、1、2分别代表跟节点、二级节点、三级节点
                        "MENU_ICON": "icon_friend_list", //左侧字体图标
                        "ROUTER_LINK": "/app/business/home", //点击跳转路径
                        "AUTO_EXPANDED": true, //是否默认展开
                        "AUTO_CHECKED": false, //是否默认选中
                        "CHILDREN_ITEMS": [ //子节点数据

                        ]
                    }
                ]
            },
            {
                "MENU_ID": 50, //菜单唯一标识
                "MENU_LABEL": "一级菜单③", //页面展示的文字
                "MENU_TYPE": "0", //0、1、2分别代表跟节点、二级节点、三级节点
                "MENU_ICON": "icon_friend_list", //左侧字体图标
                "ROUTER_LINK": "/app/business/home", //点击跳转路径
                "AUTO_EXPANDED": true, //是否默认展开
                "AUTO_CHECKED": false, //是否默认选中
                "CHILDREN_ITEMS": [ //子节点数据
                    {
                        "MENU_ID": 501, //菜单唯一标识
                        "MENU_LABEL": "③二级菜单①", //页面展示的文字
                        "MENU_TYPE": "0", //0、1、2分别代表跟节点、二级节点、三级节点
                        "MENU_ICON": "icon_friend_list", //左侧字体图标
                        "ROUTER_LINK": "/app/business/home", //点击跳转路径
                        "AUTO_EXPANDED": true, //是否默认展开
                        "AUTO_CHECKED": false, //是否默认选中
                        "CHILDREN_ITEMS": [ //子节点数据

                        ]
                    },
                    {
                        "MENU_ID": 502, //菜单唯一标识
                        "MENU_LABEL": "③二级菜单②", //页面展示的文字
                        "MENU_TYPE": "0", //0、1、2分别代表跟节点、二级节点、三级节点
                        "MENU_ICON": "icon_friend_list", //左侧字体图标
                        "ROUTER_LINK": "/app/business/home", //点击跳转路径
                        "AUTO_EXPANDED": true, //是否默认展开
                        "AUTO_CHECKED": false, //是否默认选中
                        "CHILDREN_ITEMS": [ //子节点数据

                        ]
                    }
                ]
            },
            {
                "MENU_ID": 602, //菜单唯一标识
                "MENU_LABEL": "①一级菜单④", //页面展示的文字
                "MENU_TYPE": "0", //0、1、2分别代表跟节点、二级节点、三级节点
                "MENU_ICON": "icon_friend_list", //左侧字体图标
                "ROUTER_LINK": "/app/business/home", //点击跳转路径
                "AUTO_EXPANDED": true, //是否默认展开
                "AUTO_CHECKED": false, //是否默认选中
                "CHILDREN_ITEMS": [ //子节点数据

                ]
            }

        ]
    }

    /**
     * 使用jQuery遍历工具栏配置项数据，克隆节点，添加到指定位置
     * @param {*} templateID 克隆节点模板
     * @param {*} parentID 需要添加到父节点的ID
     * @param {*} itemIdPrefix 克隆节点ID前缀
     * @param {*} data 需要克隆的数据
     */
    function cloneAppend(templateID, parentID, itemIdPrefix) {
        var templateHTML = $("#" + templateID);
        var itemsHTML = "";
        for (var i = 0, j = MAIN_CONFIG.TOOL_BARS.length; i < j; i++) {
            var item = MAIN_CONFIG.TOOL_BARS[i];
            if (!item.USE_TEMPLATE) {
                var itemHTML = templateHTML.clone().attr("id", itemIdPrefix + item.TOOL_ID).css("display", "inline-block");
                if (item.BIND_FUNC) { // 指定元素绑定事件
                    for (var x = 0, y = item.EVENT_NAME.length; x < y; x++) {
                        $("#func-items").on(item.EVENT_NAME[x], "#" + (itemIdPrefix + item.TOOL_ID), item.EVENT_FUNC[x]);
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

    function initPage() {
        $("#system-name")[0].innerText = MAIN_CONFIG.PRO_NAME;
        cloneAppend("func-item-temp", "func-items", "func-item-");
    }
    $(document).ready(function () {
        initPage();
    })

    // 左上角控制侧边栏固定或悬浮按钮点击事件
    $("#toggle-aside").on("click", function () {
        toogleAsideState();
    })

    // 切换侧边栏的固定（220px）、悬浮（70px）状态
    function toogleAsideState(){
        $(".aside-box").toggleClass("aside-folded"); // 侧边栏宽度 220px与70px 来回切换。
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

    $(".item-level-0").on("click", function () {
        KyeeToggleClass($(this).parent().children("ul"), "submenu-show", "submenu-hide");
        KyeeToggleClass($(this).parent(), "item-level-0-expanded", "item-level-0-folded");
    })
    $(".item-level-1").on("click", function () {
        KyeeToggleClass($(this).parent().children("ul"), "submenu-show", "submenu-hide");
        KyeeToggleClass($(this).children("i"), "icon_lessen", "icon_add");
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