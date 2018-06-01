/**
 * Created by Administrator on 2018/2/21 0021.
 */
//初次加载事件
window.onload = function () {
    videoPlay(my$('videoPlay'));
}

my$('trianglebox').onmouseover = function () {
    my$('triangle').style.transform = 'rotate(180deg)';
    my$('selectServe').style.display = 'block';
}

my$('selectServe').onmouseout = function () {
    my$('triangle').style.transform = 'rotate(0deg)';
    my$('selectServe').style.display = 'none';
}

//背景视频播放按钮
my$('videoPlay').onclick = function () {
    videoPlay(this);
}

//播放视频方法
function videoPlay(element) {
    //开始播放视频
    $('video').get(0).load();
    my$('bgvideo').style.display = 'block';
    $('video').get(0).play();
    element.style.display = 'none';//隐藏按钮
    console.log(my$('bgvideo'));
    setTimeout(function () {
        my$('bgvideo').style.display = 'none';
        my$('videoPlay').style.display = 'block';//隐藏按钮
    }, 23000)
}

//轮播球型按钮事件
//获取ol中所有的li
var olis = my$('olist').getElementsByTagName('li');
//console.log(olis);
//注册排它事件
for (var i = 0; i < olis.length; i++) {
    olis[i].onclick = olClick;
}
function olClick() {
    console.log(this);
    //其他li取消高亮显示
    for (var i = 0; i < olis.length; i++) {
        olis[i].className = '';
    }
    //当前li高亮显示
    this.className = 'bgcolor';
}

//点击弹出登录框
my$('loginbtn').onclick = function () {
    my$('popupbg').style.display = 'block';
}
//关闭登录弹窗
my$('closeLogin').onclick = function () {
    my$('popupbg').style.display = 'none';
}

//登录框中扫一扫提示动画
$('#useHalp').mouseenter(function () {
    $('#scanPrompt').css('opacity', 1).animate({right: 62})
})
$('#useHalp').mouseleave(function () {
    $('#scanPrompt').css('opacity', 0).animate({right: -75})
})