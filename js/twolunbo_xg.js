
//�����ֲ�ҳ����Ч
//�ֻ�ɨ����Ч
my$('threelistbg').onmouseover = function () {
    $('#phoneorCode').animate({bottom: -100},800,'linear', function () {
        $('#scanCode').animate({top: -210},1000,'linear')
    })
}

//�ֲ�ͼ�����¼�
//���Ȼ�ȡ���а�ť
var btnlis = my$('olist').getElementsByTagName('li');
var count = btnlis.length - 2;
for (var i = 0; i < btnlis.length; i++) {
    btnlis[i].setAttribute('index',i);
    btnlis[i].onclick = btnClick;
}

function btnClick() {
    //���������li�ĸ�����ʾ
    for (var i = 0; i < btnlis.length; i++) {
        btnlis[i].className = '';
    }
    //�õ�ǰli������ʾ
    this.className = 'bgcolor';
    //��ol������ʽ����
    var index = this.getAttribute('index');
    var topDis = index * 610;
    $('#list').animate({top:-topDis},800,'linear')
    //��¼��ǰul��Ӧ�����Ͱ�ť����
    my$('list').setAttribute('index',index);
    hideBtn(index);//�����������·�ҳ��ť����
    showText(index);
    hideLoginR(index);
}

//���·�ҳ��ͷ
$('#bottombtn').click(function () {
    //��ȡ��ǰҳ��������ĸ��ֲ�ҳ����
    var webscroll = my$('list').getAttribute('index');
    if (webscroll === null) {
        webscroll = 0;
    }
    hideBtn(webscroll);//�����������·�ҳ��ť����
    showText(webscroll);
    hideLoginR(webscroll);
    //Ȼ��ֱ�ӵ�����һ�����Ͱ�ť�ĵ���¼�
    var inx = parseInt(webscroll) + 1;
    if(webscroll <= count) {
        btnlis[inx].click();
    }
})

//�ж��Ƿ��������·�ҳ��ť����
function hideBtn(index) {
    my$('bottombtn').style.display = 'block';
    //������������ֲ�ҳʱ�����ذ�ť
    if (index == 6) {
        my$('bottombtn').style.display = 'none';
    }
}

//�����Ӧ��ҳ����ʾ��Ӧ���ı�ͼ
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

//���ع̶������ĵ�¼ע�ᰴť
function hideLoginR(index) {
    my$('loginRgister').style.display = 'block';
    if(index == 0) {
        my$('loginRgister').style.display = 'none';
    }
}