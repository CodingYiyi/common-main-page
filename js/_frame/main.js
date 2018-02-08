var $K = jQuery.noConflict(); // 自定义快捷方式，以防与其他库冲突

var KYEE = (function () {
    var visitedItemsList = []; // 已访问链接列表
    var KYEE_NEXT_MAIN_CONFIG; // 页面配置项

    // 初始化页面
    function initPage(config) {
        KYEE_NEXT_MAIN_CONFIG = config;
        basicConfig(); // 页面基本配置项
        cloneAppendToolBars("KyeeNext-func-item-temp", "KyeeNext-func-items-box", "KyeeNext-func-item-"); // 页面顶部工具栏
        cloneAppendMenuItems("KyeeNext-menu-item-temp", "KyeeNext-menu-items-box", "KyeeNext-menu-item-"); // 页面左侧导航栏
        if (KYEE_NEXT_MAIN_CONFIG.CUSTOMER_SERVICES_CONFIG.SHOW_CUSTOMER_SERVICES && KYEE_NEXT_MAIN_CONFIG.CUSTOMER_SERVICES_CONFIG.CUSTOMER_SERVICES.length > 0) { // 页面右下角客服栏显示
            $K("#KyeeNext-customer-services-box").fadeIn(300);
            cloneAppendCustomerServices("KyeeNext-customer-services-item-temp", "KyeeNext-customer-services-box", "KyeeNext-service-itemd-");
        }
        if (KYEE_NEXT_MAIN_CONFIG.TOGGLE_SYS_CONFIG.CAN_TOGGLE_SYS && KYEE_NEXT_MAIN_CONFIG.TOGGLE_SYS_CONFIG.SYS_LIST.length > 0) { // 可切换系统配置区显示
            $K(".KyeeNext-system-name-box>i").show();
            cloneAppendSysList("KyeeNext-toggle-system-temp", "KyeeNext-toggle-system-items-box", "KyeeNext-system-item-");
        }
        if (KYEE_NEXT_MAIN_CONFIG.SHOW_RECENT_FUNC) { // 控制已访问功能区tab页显示
            $K(".KyeeNext-visited-nav-box").fadeIn(300);
            $K(".KyeeNext-main-body-box").removeClass("KyeeNext-hide-recent-func-tabbar");
        }
    }

    // 页面基本配置
    function basicConfig() {
        $K("title")[0].innerHTML = KYEE_NEXT_MAIN_CONFIG.PRO_TITLE; // 设置页面标题
        $K("link[rel='icon']").attr("href", KYEE_NEXT_MAIN_CONFIG.PRO_FAVICON); // 设置页面收藏夹图标
        $K("#KyeeNext-pro-logo").attr("src", KYEE_NEXT_MAIN_CONFIG.PRO_LOGO); // 设置项目logo
        $K("#KyeeNext-system-name")[0].innerHTML = KYEE_NEXT_MAIN_CONFIG.PRO_NAME; // 设置项目名称
    }

    /**
     * 使用jQuery遍历工具栏配置项数据，克隆节点，添加到指定位置
     * @param {*} templateID 克隆节点模板
     * @param {*} parentID 需要添加到父节点的ID
     * @param {*} itemIdPrefix 克隆节点ID前缀
     */
    function cloneAppendToolBars(templateID, parentID, itemIdPrefix) {
        var templateHTML = $K("#" + templateID);
        var itemsHTML = "";
        for (var i = 0, j = KYEE_NEXT_MAIN_CONFIG.TOOL_BARS.length; i < j; i++) {
            var item = KYEE_NEXT_MAIN_CONFIG.TOOL_BARS[i];
            if (!item.USE_TEMPLATE) {
                var itemHTML = templateHTML.clone().attr("id", itemIdPrefix + item.TOOL_ID).removeAttr("style");
                if (item.BIND_FUNC) { // 指定元素绑定事件
                    for (var x = 0, y = item.EVENT_FUNCS.length; x < y; x++) {
                        $K("#KyeeNext-func-items-box").on(item.EVENT_FUNCS[x].EVENT_NAME, "#" + (itemIdPrefix + item.TOOL_ID), item.EVENT_FUNCS[x].EVENT_FUNC);
                    }
                } else if (item.ROUTER_LINK) {

                }
                itemHTML.children("i").addClass(item.TOOL_ICON);
                itemHTML.children("span")[0].innerHTML = item.TOOL_LABEL;
                itemsHTML += itemHTML[0].outerHTML;
            } else {
                itemsHTML += item.TEMPLATE;
            }
        }
        $K(itemsHTML).appendTo($K("#" + parentID));
    }

    /**
     * 使用jQuery遍历左侧菜单栏配置项数据，克隆节点，添加到指定位置
     * @param {*} templateID 克隆节点模板
     * @param {*} parentID 需要添加到父节点的ID
     * @param {*} itemIdPrefix 克隆节点ID前缀
     */
    function cloneAppendMenuItems(templateID, parentID, itemIdPrefix) {
        var templateHTML = $K("#" + templateID + " .KyeeNext-item-level-0"); // 一级菜单模板
        var childTempHTML = $K("#" + templateID + " .KyeeNext-item-level-1"); // 二级菜单模板
        var grandchildTempHTML = $K("#" + templateID + " .KyeeNext-item-level-2"); // 三级菜单模板
        var htmlStr = ""; // 最终需要插入到DOM树中的DOM节点字符串
        var activeTargetId = ""; // 默认选中的节点ID
        for (var i = 0, j = KYEE_NEXT_MAIN_CONFIG.ASIDE_MENU_ITEMS.length; i < j; i++) { // 遍历一级菜单
            var itemHTMLStr = "";
            var item = KYEE_NEXT_MAIN_CONFIG.ASIDE_MENU_ITEMS[i];
            var itemHTML = templateHTML.clone().attr("id", itemIdPrefix + item.MENU_ID); // 获取一级菜单模板
            itemHTML.children(".KyeeNext-item-icon-left").addClass(item.MENU_ICON); // 设置一级菜单左侧图标
            itemHTML.children("span")[0].innerHTML = item.MENU_LABEL; // 设置一级菜单名称
            item.ROUTER_LINK && itemHTML.addClass("kyee-router-link-flag"); // 设置点击是否跳转标识
            item.AUTO_CHECKED && (activeTargetId = itemIdPrefix + item.MENU_ID);
            if (item.CHILDREN_ITEMS && item.CHILDREN_ITEMS.length > 0) { // 遍历二级菜单
                var childItemHTMLStr = "";
                for (var x = 0, y = item.CHILDREN_ITEMS.length; x < y; x++) {
                    var childItem = item.CHILDREN_ITEMS[x];
                    var childItemHTML = childTempHTML.clone().attr("id", itemIdPrefix + childItem.MENU_ID); // 获取二级菜单模板
                    childItemHTML.children("span")[0].innerHTML = childItem.MENU_LABEL; // 设置二级菜单的名称
                    childItem.ROUTER_LINK && childItemHTML.addClass("kyee-router-link-flag"); // 设置点击是否跳转标识
                    childItem.AUTO_CHECKED && (activeTargetId = itemIdPrefix + childItem.MENU_ID);
                    if (childItem.CHILDREN_ITEMS && childItem.CHILDREN_ITEMS.length > 0) { // 遍历三级菜单
                        var grandchildItemHTMLStr = "";
                        childItemHTML.children("i").addClass("kyeenext-icon-add"); // 设置二级菜单左侧图标
                        for (var k = 0, l = childItem.CHILDREN_ITEMS.length; k < l; k++) {
                            var grandchildItem = childItem.CHILDREN_ITEMS[k];
                            var grandchildItemHTML = grandchildTempHTML.clone().attr("id", itemIdPrefix + grandchildItem.MENU_ID); // 获取三级菜单模板
                            grandchildItem.ROUTER_LINK && grandchildItemHTML.addClass("kyee-router-link-flag"); // 设置点击是否跳转标识
                            grandchildItemHTML[0].innerHTML = grandchildItem.MENU_LABEL; // 设置三级菜单名称
                            grandchildItemHTMLStr += grandchildItemHTML[0].outerHTML; // 拼接三级菜单字符串 结果："<li>...</li><li>...</li>"
                            grandchildItem.AUTO_CHECKED && (activeTargetId = itemIdPrefix + grandchildItem.MENU_ID);
                        }
                        grandchildItemHTMLStr = '<ul class="KyeeNext-submenu-hide">' + grandchildItemHTMLStr + "</ul>"; // 拼接三级菜单容器
                        childItemHTMLStr += '<li>' + childItemHTML[0].outerHTML + grandchildItemHTMLStr + '</li>'; // 拼接当前二级菜单
                    } else {
                        childItemHTMLStr += '<li>' + childItemHTML[0].outerHTML + '</li>'; // 拼接当前二级菜单
                    }
                }
                itemHTMLStr = '<ul class="KyeeNext-submenu-hide">' + childItemHTMLStr + "</ul>"; // 拼接二级菜单容器
            }
            htmlStr += '<li class="KyeeNext-item-level-0-folded">' + itemHTML[0].outerHTML + itemHTMLStr + '</li>'; // 拼接当前一级菜单
        }
        $K(htmlStr).appendTo($K("#" + parentID)); // 将拼接完的菜单插入到目标容器中
        expandedToMenuItem(activeTargetId); // 自动展开目标菜单
    }

    /**
     * 使用jQuery遍历右下角客服区配置项数据，克隆节点，添加到指定位置
     * @param {*} templateID 克隆节点模板
     * @param {*} parentID 需要添加到父节点的ID
     * @param {*} itemIdPrefix 克隆节点ID前缀
     */
    function cloneAppendCustomerServices(templateID, parentID, itemIdPrefix) {
        var templateHTML = $K("#" + templateID);
        var itemsHTML = "";
        for (var i = 0, j = KYEE_NEXT_MAIN_CONFIG.CUSTOMER_SERVICES_CONFIG.CUSTOMER_SERVICES.length; i < j; i++) {
            var item = KYEE_NEXT_MAIN_CONFIG.CUSTOMER_SERVICES_CONFIG.CUSTOMER_SERVICES[i];
            var itemHTML = templateHTML.clone().attr("id", itemIdPrefix + item.ITEM_ID);
            itemHTML.children("span")[0].innerHTML = item.ITEM_LABEL;
            itemHTML.children("i").addClass(item.ITEM_ICON);
            itemsHTML += itemHTML[0].outerHTML;
        }
        $K(itemsHTML).insertBefore("#KyeeNext-customer-services-toggle-btn");
    }

    /**
     * 使用jQuery遍历切换系统区配置项数据，克隆节点，添加到指定位置
     * @param {*} templateID 克隆节点模板
     * @param {*} parentID 需要添加到父节点的ID
     * @param {*} itemIdPrefix 克隆节点ID前缀
     */
    function cloneAppendSysList(templateID, parentID, itemIdPrefix) {
        var templateHTML = $K("#" + templateID);
        var itemsHTML = "";
        for (var i = 0, j = KYEE_NEXT_MAIN_CONFIG.TOGGLE_SYS_CONFIG.SYS_LIST.length; i < j; i++) {
            var item = KYEE_NEXT_MAIN_CONFIG.TOGGLE_SYS_CONFIG.SYS_LIST[i];
            var itemHTML = templateHTML.clone().attr("id", itemIdPrefix + item.SYS_ID).css("display", "block");
            itemHTML.children("i").addClass(item.SYS_ICON);
            itemHTML.children("span")[0].innerHTML = item.SYS_LABEL;
            itemsHTML += itemHTML[0].outerHTML;
        }
        $K(itemsHTML).appendTo("#" + parentID);
        $K(".KyeeNext-system-name-box").on("mouseenter", function () {
            $K(".KyeeNext-toggle-system-box").delay(600).fadeIn(100);
        });
        $K(".KyeeNext-system-name-box").on("mouseleave", function () {
            $K(".KyeeNext-toggle-system-box").clearQueue();;
        });
        $K(".KyeeNext-toggle-system-box").on("mouseleave", function () {
            $K(this).fadeOut(100);
        })
    }

    // 左上角控制侧边栏固定或悬浮按钮点击事件
    $K("#KyeeNext-toggle-aside").on("click", function () {
        toogleAsideState();
    })

    // 切换侧边栏的固定（220px）、悬浮（70px）状态
    function toogleAsideState() {
        $K(".KyeeNext-aside-box").toggleClass("KyeeNext-aside-folded"); // 侧边栏宽度 220px与70px 来回切换。
        KyeeToggleClass($K("#KyeeNext-toggle-aside"), "kyeenext-icon-menu-s", "kyeenext-icon-menu");
        $K(".KyeeNext-aside-box").off("mouseout").one("mouseout", function () { // 鼠标离开时触发（鼠标未离开，即使点击也不会触发）
            if ($K(".KyeeNext-aside-box").hasClass("KyeeNext-aside-folded")) { // 由固定切换至悬浮状态时，切换右侧主体内容区域的样式（flex布局切换成absolute模式）、侧边栏添加hover效果。
                KyeeToggleClass($K(".KyeeNext-main-box"), "KyeeNext-main-box-fixed", "KyeeNext-main-box-dynamic");
                $K(".KyeeNext-aside-box").addClass("KyeeNext-aside-box-hover");
            }
        })
        if ($K(".KyeeNext-aside-box").hasClass("KyeeNext-aside-box-hover")) { // 判断是否真的切换到了悬浮状态（只有上述鼠标离开了，才算真正切换至悬浮状态）
            KyeeToggleClass($K(".KyeeNext-main-box"), "KyeeNext-main-box-fixed", "KyeeNext-main-box-dynamic"); // 若目前状态为悬浮状态，则切换至固定状态。
            $K(".KyeeNext-aside-box").removeClass("KyeeNext-aside-box-hover");
        }
    }

    // 一级菜单点击事件
    $K("#KyeeNext-menu-items-box").on("click", ".KyeeNext-item-level-0", function () {
        var me = this;
        $K(".KyeeNext-menu-items-box").children(".KyeeNext-item-level-0-expanded").each(function () { // 折叠其他已展开的一级菜单
            if ($K(me).parent()[0] != this) {
                $K(this).removeClass("KyeeNext-item-level-0-expanded").addClass("KyeeNext-item-level-0-folded");
                if ($K(this).children("ul").length > 0) {
                    $K(this).children("ul").removeClass("KyeeNext-submenu-show").addClass("KyeeNext-submenu-hide");
                    $K(this).children(".KyeeNext-item-level-0").children(".KyeeNext-item-icon-right").removeClass("KyeeNext-item-icon-right-expanded").addClass("KyeeNext-item-icon-right-folded");
                }
            }
        });
        if ($K(this).parent().children("ul").length > 0) { // 若存在二级菜单，则切换二级菜单展开、折叠状态
            KyeeToggleClass($K(this).parent(), "KyeeNext-item-level-0-expanded", "KyeeNext-item-level-0-folded"); // 切换一级菜单的展开折叠状态
            KyeeToggleClass($K(this).parent().children("ul"), "KyeeNext-submenu-show", "KyeeNext-submenu-hide");
            KyeeToggleClass($K(this).children(".KyeeNext-item-icon-right"), "KyeeNext-item-icon-right-folded", "KyeeNext-item-icon-right-expanded")
        }
        if ($K(this).hasClass("kyee-router-link-flag")) {
            setItemToVisitedItems({ // 若可以跳转，执行跳转操作
                "MENU_ID": $K(this).attr("id").substring(19),
                "MENU_LABEL": $K(this).children("span")[0].innerHTML
            });
            setMenuItemActive($K(this)); // 设置菜单选中（active）状态
        }
    })
    // 二级菜单点击事件
    $K("#KyeeNext-menu-items-box").on("click", ".KyeeNext-item-level-1", function () {
        if ($K(this).parent().children("ul").length > 0) { // 若存在三级菜单，则切换三级菜单展开、折叠状态
            KyeeToggleClass($K(this).parent().children("ul"), "KyeeNext-submenu-show", "KyeeNext-submenu-hide");
            KyeeToggleClass($K(this).children("i"), "kyeenext-icon-reduce", "kyeenext-icon-add");
        }
        if ($K(this).hasClass("kyee-router-link-flag")) {
            setItemToVisitedItems({ // 若可以跳转，执行跳转操作
                "MENU_ID": $K(this).attr("id").substring(19),
                "MENU_LABEL": $K(this).children("span")[0].innerHTML
            });
            setMenuItemActive($K(this)); // 设置菜单选中（active）状态
        }
    })
    // 三级菜单点击事件
    $K("#KyeeNext-menu-items-box").on("click", ".KyeeNext-item-level-2", function () {
        if ($K(this).hasClass("kyee-router-link-flag")) {
            setItemToVisitedItems({ // 若可以跳转，执行跳转操作
                "MENU_ID": $K(this).attr("id").substring(19),
                "MENU_LABEL": $K(this)[0].innerHTML
            });
            setMenuItemActive($K(this)); // 设置菜单选中（active）状态
        }
    })

    /**
     * 设置左侧菜单栏中的target为选中状态
     * @param {*} target 目标DOM节点
     */
    function setMenuItemActive(target) {
        $K(".KyeeNext-item-level-1-2-active").removeClass("KyeeNext-item-level-1-2-active");
        $K(".KyeeNext-item-level-0-active").removeClass("KyeeNext-item-level-0-active");
        if (target.hasClass("KyeeNext-item-level-0")) {
            target.addClass("KyeeNext-item-level-0-active");
        } else {
            target.addClass("KyeeNext-item-level-1-2-active");
        }
    }

    /**
     * 自动展开目标菜单
     * @param {*} targetId 目标菜单
     */
    function expandedToMenuItem(targetId){
        var target=$K("#"+targetId);
        if(target.hasClass("KyeeNext-item-level-0")){
            target.addClass("KyeeNext-item-level-0-active");
        }else if(target.hasClass("KyeeNext-item-level-1")){
            target.parents(".KyeeNext-item-level-0-folded").removeClass("KyeeNext-item-level-0-folded").addClass("KyeeNext-item-level-0-expanded");
            target.parents(".KyeeNext-submenu-hide").removeClass("KyeeNext-submenu-hide").addClass("KyeeNext-submenu-show");
            target.addClass("KyeeNext-item-level-1-2-active");
        }else if(target.hasClass("KyeeNext-item-level-2")){
            target.parents(".KyeeNext-item-level-0-folded").removeClass("KyeeNext-item-level-0-folded").addClass("KyeeNext-item-level-0-expanded");
            target.parents(".KyeeNext-submenu-hide").removeClass("KyeeNext-submenu-hide").addClass("KyeeNext-submenu-show");
            target.parent().prev().children("i").removeClass("kyeenext-icon-add").addClass("kyeenext-icon-reduce");
            target.addClass("KyeeNext-item-level-1-2-active");
        }
        setItemToVisitedItems({
            "MENU_ID": target.attr("id").substring(19),
            "MENU_LABEL": target.children("span")[0]?target.children("span")[0].innerHTML:target[0].innerHTML
        });
    }

    /**
     * 维护已访问链接列表
     * @param {*} val 需要插入到已访问列表中的对象
     */
    function setItemToVisitedItems(val) {
        if(!KYEE_NEXT_MAIN_CONFIG.SHOW_RECENT_FUNC){
            return;
        }
        if (findArray(visitedItemsList, {
                MENU_ID: val.MENU_ID
            }) < 0) { // 若不存在于已访问列表中，则插入相应数据
            visitedItemsList.push(val);
            $K("#KyeeNext-visited-items").children("li").removeClass("KyeeNext-active-item");
            var visitedItem = $K("#KyeeNext-visited-item-temp").clone().attr("id", "KyeeNext-visited-item-" + val.MENU_ID).css("display", "inline-block");
            visitedItem.children("span")[0].innerHTML = val.MENU_LABEL;
            visitedItem.appendTo($K("#KyeeNext-visited-items"));
        } else if (!$K("#KyeeNext-visited-item-" + val.MENU_ID).hasClass("KyeeNext-active-item")) { // 若已存在于访问列表中，使其为active状态
            $K("#KyeeNext-visited-items").children("li").removeClass("KyeeNext-active-item");
            $K("#KyeeNext-visited-item-" + val.MENU_ID).addClass("KyeeNext-active-item");
        }
        alignToElement($K("#KyeeNext-visited-item-" + val.MENU_ID)[0]); // 计算偏移量，进行偏移，使完整显示
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
        if (element.hasClass("KyeeNext-active-item")) { // 若被删除对象为当前活跃对象，根据条件设置删除后的活跃对象
            if (index == visitedItemsList.length - 1 && visitedItemsList.length > 1) { // 若为最后一个tab页，则前一个tab页获焦
                $K("#KyeeNext-visited-item-" + visitedItemsList[index - 1].MENU_ID).addClass("KyeeNext-active-item");
                target = $K("#KyeeNext-menu-item-" + visitedItemsList[index - 1].MENU_ID);
                setMenuItemActive(target);
            } else if (index == 0 && visitedItemsList.length == 1) { // 若只有一个tab页，清除侧边栏相应菜单的选中样式
                $K(".KyeeNext-item-level-1-2-active").removeClass("KyeeNext-item-level-1-2-active");
            } else if (index < visitedItemsList.length - 1) { // 若删除的tab页为中间的某一项，则后一个tab获焦
                $K("#KyeeNext-visited-item-" + visitedItemsList[index + 1].MENU_ID).addClass("KyeeNext-active-item");
                target = $K("#KyeeNext-menu-item-" + visitedItemsList[index + 1].MENU_ID);
                setMenuItemActive(target);
            }
        } else {
            target = $K("#KyeeNext-visited-items>.KyeeNext-active-item"); // 若被删除对象非当前活跃对象，则活跃对象不变
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
        var left = target.offsetLeft; // 获取目标节点相对于父容器的偏移量（位置）
        var width = target.offsetWidth; // 获取目标节点的宽度
        var container = $K("#KyeeNext-visited-items"); // 获取父容器
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
    $K("#KyeeNext-visited-items").on("click", "li", function () {
        if (!$K(this).hasClass("KyeeNext-active-item")) { // 设置活跃对象
            $K(this).parent().children("li").removeClass("KyeeNext-active-item");
            $K(this).addClass("KyeeNext-active-item");
        }
        var id = $K(this).attr("id").substring(22);
        alignToElement($K("#KyeeNext-visited-item-" + id)); // 设置活跃对象完全可见
        var targetId = "#KyeeNext-menu-item-" + id;
        if (!$K(targetId).hasClass("KyeeNext-item-level-1-2-active")) {
            setMenuItemActive($K(targetId)); // 设置活跃对象对应的左侧菜单的选中（active）状态
        }
    })
    // 已访问链接导航栏列表项目关闭按钮点击事件
    $K("#KyeeNext-visited-items").on("click", "li>i", function (e) {
        $K(this).parent().remove(); // 从DOM树中删除节点元素
        removeItemFromVisitedItems($K(this).parent().attr("id").substring(22), $K(this).parent()); // 从访问列表中删除节点信息
        e.stopPropagation();
    })
    // 已访问菜单左箭头点击事件（向左偏移）
    $K(".KyeeNext-nav-pre").on("click", function () {
        var container = $K("#KyeeNext-visited-items");
        var transformVal = container.css("transform") && container.css("transform") !== "none" ? +(container.css("transform").substring(7).split(',')[4]) : 0;
        var containerWidth = container.outerWidth();
        var visitedItemsWidthSum = getVisitedItemsWidthSum();
        if (transformVal > (containerWidth - visitedItemsWidthSum)) {
            container.css({
                "transform": "translateX(" + (transformVal - KYEE_NEXT_MAIN_CONFIG.SCROLL_STEP) + "px)"
            });
        }
    })
    // 已访问菜单右箭头点击事件（向右偏移）
    $K(".KyeeNext-nav-next").on("click", function () {
        var container = $K("#KyeeNext-visited-items");
        var transformVal = container.css("transform") && container.css("transform") !== "none" ? +(container.css("transform").substring(7).split(',')[4]) : 0;
        if (transformVal < 0) {
            container.css({
                "transform": "translateX(" + (transformVal + KYEE_NEXT_MAIN_CONFIG.SCROLL_STEP <= 0 ? transformVal + KYEE_NEXT_MAIN_CONFIG.SCROLL_STEP : 0) + "px)"
            });
        }
    })
    // 获取已访问菜单的总宽度
    function getVisitedItemsWidthSum() {
        var width = 0;
        var visitedItems = $K("#KyeeNext-visited-items>li");
        for (var i = 0, j = visitedItems.length; i < j; i++) {
            width += visitedItems[i].offsetWidth;
        }
        return width;
    }


    // 右下角客服按钮点击事件
    $K("#KyeeNext-customer-services-toggle-btn").on("click", function () {
        $K(this).toggleClass("KyeeNext-customer-services-expanded");
        $K(".KyeeNext-customer-services-item:not(#KyeeNext-customer-services-item-temp)").fadeToggle("fast");
        KyeeToggleClass($K(this).children("i"), "kyeenext-icon-add", "kyeenext-icon-reduce");
    })

    // 遮罩层点击事件
    $K(".KyeeNext-ui-sidebar-mask").on("click", function () {
        $K(".KyeeNext-sidebar-right").removeClass("KyeeNext-sidebar-show").addClass("KyeeNext-sidebar-hidden");
        $K(".KyeeNext-ui-sidebar-mask").fadeOut(200);
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

    return {
        init: initPage
    }
})();