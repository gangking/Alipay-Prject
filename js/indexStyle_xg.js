/**
 * Created by Administrator on 2018/2/21 0021.
 */
//���μ����¼�
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

//������Ƶ���Ű�ť
my$('videoPlay').onclick = function () {
    videoPlay(this);
}

//������Ƶ����
function videoPlay(element) {
    //��ʼ������Ƶ
    $('video').get(0).load();
    my$('bgvideo').style.display = 'block';
    $('video').get(0).play();
    element.style.display = 'none';//���ذ�ť
    console.log(my$('bgvideo'));
    setTimeout(function () {
        my$('bgvideo').style.display = 'none';
        my$('videoPlay').style.display = 'block';//���ذ�ť
    }, 23000)
}

//�ֲ����Ͱ�ť�¼�
//��ȡol�����е�li
var olis = my$('olist').getElementsByTagName('li');
//console.log(olis);
//ע�������¼�
for (var i = 0; i < olis.length; i++) {
    olis[i].onclick = olClick;
}
function olClick() {
    console.log(this);
    //����liȡ��������ʾ
    for (var i = 0; i < olis.length; i++) {
        olis[i].className = '';
    }
    //��ǰli������ʾ
    this.className = 'bgcolor';
}

//���������¼��
my$('loginbtn').onclick = function () {
    my$('popupbg').style.display = 'block';
}
//�رյ�¼����
my$('closeLogin').onclick = function () {
    my$('popupbg').style.display = 'none';
}

//��¼����ɨһɨ��ʾ����
$('#useHalp').mouseenter(function () {
    $('#scanPrompt').css('opacity', 1).animate({right: 62})
})
$('#useHalp').mouseleave(function () {
    $('#scanPrompt').css('opacity', 0).animate({right: -75})
})