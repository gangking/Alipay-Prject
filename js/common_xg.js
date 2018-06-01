/**
 * Created by Administrator on 2018/1/31 0031.
 */

//通过ID名获取元素
function my$(element) {
    return document.getElementById(element);
}

//设置标签之间的内容
function setInnerText(element,content) {
    //判断当前浏览器是否支持innerText
    if (typeof element.innerText === 'string') {
        element.innerText = content;
    }else {
        element.textContent = content;
    }
}

//兼容函数
// 判断浏览器是否支持firstElementChild属性
function getFrstElementChild(element) {
    var node, nodes = element.childNodes, i = 0;
    while(node = nodes[i++]) {
        if (node.nodeType === 1) {
            return node;
        }
    }
    return null;
}

//获取下一个兄弟元素
function getNextSibing(nexsbi) {
    var el = this;
    while (el = el.nextSibling) {//先获取下一个兄弟节点
        if (el.nodeType === 1) {//筛选出指定元素
            return el;//返回这个子元素
        }
    }
    return null;
}
//获取上一个兄弟元素
function getPreviousSibing(nexsbi) {
    var el = this;
    while (el = el.previousSibling) {//先获取上一个兄弟节点
        if (el.nodeType === 1) {//筛选出指定元素
            return el;//返回这个子元素
        }
    }
    return null;
}

//选择水果函数事件封装
//全部左/右移、右/左移(事件类型,要处理的数据,目标数据据框)
function getClickMove(flag,allcontain,framebox) {
    switch (flag) {
        case '>>':
            //获取长度
            var len = allcontain.length;
            for (var i = 0; i < len; i++) {
                framebox.appendChild(allcontain[0]);
            }
            break;
        case '<<':
            //获取长度
            var len = allcontain.length;
            for (var i = 0; i < len; i++) {
                framebox.appendChild(allcontain[0]);
            }
            break;
        case '>':
            var options = [];
            for (var i = 0; i < allcontain.length; i++) {
                var option = allcontain[i];
                console.log(option);
                if (option.selected === true) {
                    option.selected = false;
                    options.push(option);
                }
            }
            for (var i = 0; i < options.length; i++) {
                framebox.appendChild(options[i]);
            }
            break;
        case '<':
            var options = [];
            for (var i = 0; i < allcontain.length; i++) {
                var option = allcontain[i];
                console.log(option);
                if (option.selected === true) {
                    option.selected = false;
                    options.push(option);
                }
            }
            for (var i = 0; i < options.length; i++) {
                framebox.appendChild(options[i]);
            }
            break;
        default :
            console.log('12');
            break;
    }
}

//计算并返回鼠标在页面中的坐标
//pageY = clientY + 页面滚动的距离
function getPage(e) {
    var pageX = e.pageX || e.clientX + getScroll().scrollLeft;
    var pageY = e.pageY || e.clientY + getScroll().scrollTop;

    return {
        pageX: pageX,
        pageY: pageY
    }
}

//如何计算相差的值
// 相差的总的毫秒值 x
// 相差总的秒数xday = x / 1000;
// 相差的天数 = x/1000/60/60/24;
// 天数的余数为相差的小时数
// 小时的余数为相差的分钟
// 相差的秒数 x/1000 % 60
function getInterval(start, end) {
    //相差的秒数
    var interval = end - start;
    var day, hour, minute, second;
    interval = interval / 1000;
    day = Math.round(interval / 60 / 60 / 24);
    hour = Math.round(interval / 60 / 60 % 24);
    minute = Math.round(interval / 60 % 60);
    second = Math.round(interval % 60);

    day = day < 10 ? '0' + day : day;
    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;
    second = second < 10 ? '0' + second : second;

    return {
        day: day,
        hour: hour,
        minute: minute,
        second: second
    }
}


//封装动画函数
function animation2(element,target) {
    //使用定时器之前先清除定时器
    if (element.timerlId) {
        clearInterval(element.timerlId);
    }
    element.timerlId = setInterval(function () {
        //步进
        var step = 10;
        var curent = element.offsetLeft;

        //当前位置大于目标位置时
        if (curent > target) {
            step = - Math.abs(step);
            //终止位置不能小于目标位置
            if (curent <= target) {
                clearInterval(element.timerlId);
                element.style.left = target + 'px';
                return;
            }
        } else {////当前位置大于目标位置时
            //当前移动距离大于等于指定距离时候，直接赋值为目标值
            if (curent >= target) {
                clearInterval(element.timerlId);
                element.style.left = target + 'px';
                return;
            }
        }
        curent += step;
        element.style.left = curent + 'px';
    }, 30)
}


