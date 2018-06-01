
//第三轮播页面特效
//手机扫码特效
my$('threelistbg').onmouseover = function () {
    $('#phoneorCode').animate({bottom: -100},800,'linear', function () {
        $('#scanCode').animate({top: -210},1000,'linear')
    })
}

//轮播图单击事件
//首先获取所有按钮
var btnlis = my$('olist').getElementsByTagName('li');
var count = btnlis.length - 2;
for (var i = 0; i < btnlis.length; i++) {
    btnlis[i].setAttribute('index',i);
    btnlis[i].onclick = btnClick;
}

function btnClick() {
    //先清除所有li的高亮显示
    for (var i = 0; i < btnlis.length; i++) {
        btnlis[i].className = '';
    }
    //让当前li高亮显示
    this.className = 'bgcolor';
    //让ol动画形式上移
    var index = this.getAttribute('index');
    var topDis = index * 610;
    $('#list').animate({top:-topDis},800,'linear')
    //记录当前ul对应的球型按钮索引
    my$('list').setAttribute('index',index);
    hideBtn(index);//调用隐藏向下翻页按钮函数
    showText(index);
    hideLoginR(index);
}

//向下翻页箭头
$('#bottombtn').click(function () {
    //获取当前页面滚动到哪个轮播页面了
    var webscroll = my$('list').getAttribute('index');
    if (webscroll === null) {
        webscroll = 0;
    }
    hideBtn(webscroll);//调用隐藏向下翻页按钮函数
    showText(webscroll);
    hideLoginR(webscroll);
    //然后直接调用下一个球型按钮的点击事件
    var inx = parseInt(webscroll) + 1;
    if(webscroll <= count) {
        btnlis[inx].click();
    }
})

//判断是否隐藏向下翻页按钮函数
function hideBtn(index) {
    my$('bottombtn').style.display = 'block';
    //当移入第七张轮播页时，隐藏按钮
    if (index == 6) {
        my$('bottombtn').style.display = 'none';
    }
}

//到达对应的页面显示对应的文本图
function showText(index) {
    //console.log(index);
    switch (index) {
        case '1':
            $('#textImg1').fadeIn(1500);
            break;
        case '2':
            $('#textImg2').fadeIn(2500);
            break;
        case '3':
            $('#textImg3').fadeIn(3000);
            break;
        case '4':
            $('#textImg4').fadeIn(3000);
            break;
        case '5':
            $('#textImg5').fadeIn(3000);
            break;
        default :
            break;
    }
}

//隐藏固定导航的登录注册按钮
function hideLoginR(index) {
    my$('loginRgister').style.display = 'block';
    if(index == 0) {
        my$('loginRgister').style.display = 'none';
    }
}