/**
 * Created by Administrator on 2018/1/31 0031.
 */

//ͨ��ID����ȡԪ��
function my$(element) {
    return document.getElementById(element);
}

//���ñ�ǩ֮�������
function setInnerText(element,content) {
    //�жϵ�ǰ������Ƿ�֧��innerText
    if (typeof element.innerText === 'string') {
        element.innerText = content;
    }else {
        element.textContent = content;
    }
}

//���ݺ���
// �ж�������Ƿ�֧��firstElementChild����
function getFrstElementChild(element) {
    var node, nodes = element.childNodes, i = 0;
    while(node = nodes[i++]) {
        if (node.nodeType === 1) {
            return node;
        }
    }
    return null;
}

//��ȡ��һ���ֵ�Ԫ��
function getNextSibing(nexsbi) {
    var el = this;
    while (el = el.nextSibling) {//�Ȼ�ȡ��һ���ֵܽڵ�
        if (el.nodeType === 1) {//ɸѡ��ָ��Ԫ��
            return el;//���������Ԫ��
        }
    }
    return null;
}
//��ȡ��һ���ֵ�Ԫ��
function getPreviousSibing(nexsbi) {
    var el = this;
    while (el = el.previousSibling) {//�Ȼ�ȡ��һ���ֵܽڵ�
        if (el.nodeType === 1) {//ɸѡ��ָ��Ԫ��
            return el;//���������Ԫ��
        }
    }
    return null;
}

//ѡ��ˮ�������¼���װ
//ȫ����/���ơ���/����(�¼�����,Ҫ���������,Ŀ�����ݾݿ�)
function getClickMove(flag,allcontain,framebox) {
    switch (flag) {
        case '>>':
            //��ȡ����
            var len = allcontain.length;
            for (var i = 0; i < len; i++) {
                framebox.appendChild(allcontain[0]);
            }
            break;
        case '<<':
            //��ȡ����
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

//���㲢���������ҳ���е�����
//pageY = clientY + ҳ������ľ���
function getPage(e) {
    var pageX = e.pageX || e.clientX + getScroll().scrollLeft;
    var pageY = e.pageY || e.clientY + getScroll().scrollTop;

    return {
        pageX: pageX,
        pageY: pageY
    }
}

//��μ�������ֵ
// �����ܵĺ���ֵ x
// ����ܵ�����xday = x / 1000;
// �������� = x/1000/60/60/24;
// ����������Ϊ����Сʱ��
// Сʱ������Ϊ���ķ���
// �������� x/1000 % 60
function getInterval(start, end) {
    //��������
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


//��װ��������
function animation2(element,target) {
    //ʹ�ö�ʱ��֮ǰ�������ʱ��
    if (element.timerlId) {
        clearInterval(element.timerlId);
    }
    element.timerlId = setInterval(function () {
        //����
        var step = 10;
        var curent = element.offsetLeft;

        //��ǰλ�ô���Ŀ��λ��ʱ
        if (curent > target) {
            step = - Math.abs(step);
            //��ֹλ�ò���С��Ŀ��λ��
            if (curent <= target) {
                clearInterval(element.timerlId);
                element.style.left = target + 'px';
                return;
            }
        } else {////��ǰλ�ô���Ŀ��λ��ʱ
            //��ǰ�ƶ�������ڵ���ָ������ʱ��ֱ�Ӹ�ֵΪĿ��ֵ
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


