/**
 * Created by Administrator on 2018/2/28 0028.
 */
;
(function () {
    //头部导航
    var heafnav = my$('headmain').getElementsByTagName('li');
    for (var i = 0; i < heafnav.length; i++) {
        //头部导航下拉列表初始化
        //获取li下的指定div
        listing(heafnav[i]);
        heafnav[i].onmouseenter = heafnavmouse;
        heafnav[i].onmouseleave = heafnavmouseout;
    }

    function heafnavmouse() {
        var spanflag = this.getElementsByTagName('span');
        if (spanflag.length !== 0) {
            spanflag[0].className = 'spanhover';
            spanflag[0].style.color = 'white';
        }
        var listingdiv = listing(this);
        if (typeof listingdiv !== 'undefined') {
            listingdiv.style.visibility = 'visible';
        }
    }

    function heafnavmouseout() {
        var spanflag = this.getElementsByTagName('span');
        if (spanflag.length !== 0) {
            spanflag[0].className = '';
        }
        var listingdiv = listing(this);
        if (typeof listingdiv !== 'undefined') {
            if (this.className !== 'border') {
                listingdiv.style.visibility = 'hidden';
            } else {
                listingdiv.onclick = function () {
                    this.style.visibility = 'hidden';
                }
            }
        }
    }

    function listing(lins) {
        var hezuoption = lins.getElementsByTagName('div');
        if (hezuoption.length !== 0 && hezuoption[0].className === 'hezuoption') {
            var height = hezuoption[0].offsetHeight;
            hezuoption[0].style.bottom = -height + 'px';
            if (lins.className === 'border') {
                //针对右侧导航栏情况
                hezuoption[0].style.bottom = -height - 16 + 'px';
            }
            return hezuoption[0];
        }
    }

    //点击搜索按钮动画效果
    var btnSearch = document.getElementById('btnserch');
    var searchbox = document.getElementById('searchbox');
    //是否复原标识
    var isRestore = true;
    btnSearch.onclick = function () {
        if (isRestore) {
            isRestore = false;
            $('#searchbox').animate({width: 252}, 50, function () {
                $(this).css('right', '-224px')
                    .css('background-color', '#394662');
            })
        } else {
            isRestore = true;
            $('#searchbox').animate({width: 20}, 50, function () {
                $(this).css('right', '10px')
                    .css('background-color', 'transparent');
            })
        }
    }
})()

//轮播点击事件
;
(function () {
    var btns = $('#broadbtn').find('li');
    for (var i = 0; i < btns.length; i++) {
        var btn = btns[i];
        btn.index = i;
        btn.onclick = btnbroadClick;

    }

    //动态轮播
    var thisIndex = 0;//记录当前轮播位置
    setInterval(function () {
        thisIndex++;
        btns[thisIndex].click();
        if (thisIndex === btns.length - 1) {
            thisIndex = -1;
        }
    }, 4000)

    //图片轮播切换事件
    function btnbroadClick() {
        for (var i = 0; i < btns.length; i++) {
            btns[i].className = '';
        }
        thisIndex = this.index;
        this.className = 'broadbtnColor';//按钮高亮显示
        //点击切换对应的图片
        $('.broadcast').children('img').eq(this.index).fadeIn().siblings('img').fadeOut();
        //点击设置对应的文字
        switch (this.index) {
            case 0:
                console.log('0');
                $('#banner-admodel_txt').children('h1').fadeOut(2000).text('限时免费  限量试用').fadeIn();
                $('#banner-admodel_txt').children('p').eq(0).fadeOut(2000).text('小程序全新上线云客服能力').fadeIn();
                $('#banner-admodel_txt').children('p').eq(1).fadeOut(2000).text('立即申请').fadeIn();
                break;
            case 1:
                console.log('1');
                $('#banner-admodel_txt').children('h1').fadeOut(2000).text('IT采购开年惠 阿里云产品5折起').fadeIn();
                $('#banner-admodel_txt').children('p').eq(0).fadeOut(2000).text('云服务器、云安全等5折起，短信2.8分/条起').fadeIn();
                $('#banner-admodel_txt').children('p').eq(1).fadeOut(2000).text('立即订购').fadeIn();
                break;
            case 2:
                console.log('2');
                $('#banner-admodel_txt').children('h1').fadeOut(2000).text('花呗分期-商家高单价商品营销利器').fadeIn();
                $('#banner-admodel_txt').children('p').eq(0).fadeOut(2000).text('合作伙伴协助商户接入并推广花呗分期服务').fadeIn();
                $('#banner-admodel_txt').children('p').eq(1).fadeOut(2000).text('为商家搭建分期贴息营销能力').fadeIn();
                break;
            case 3:
                console.log('3');
                $('#banner-admodel_txt').children('h1').fadeOut().text('信用生活开放（试运营）').fadeIn();
                $('#banner-admodel_txt').children('p').eq(0).fadeOut().text('共享信用红利，助力商家成长').fadeIn();
                $('#banner-admodel_txt').children('p').eq(1).fadeOut().text('点击入驻').fadeIn();
                break;
            case 4:
                console.log('4');
                $('#banner-admodel_txt').children('h1').fadeOut(2000).text('优惠券 、现金红包全面开放').fadeIn();
                $('#banner-admodel_txt').children('p').eq(0).fadeOut(2000).text('配置营销活动奖品，获得支付宝流量。展示品牌，拉动业绩增长').fadeIn();
                $('#banner-admodel_txt').children('p').eq(1).fadeOut(2000).text('>>立即查看').fadeIn();
                break;
            case 5:
                console.log('5');
                $('#banner-admodel_txt').children('h1').fadeOut(2000).text('支付宝首页流量开放商户使用').fadeIn();
                $('#banner-admodel_txt').children('p').eq(0).fadeOut(2000).text('支付宝为商家推广，商家交易越多，您的返佣越多').fadeIn();
                $('#banner-admodel_txt').children('p').eq(1).fadeOut(2000).text('立即参与').fadeIn();
                break;
            case 6:
                console.log('6');
                $('#banner-admodel_txt').children('h1').fadeOut(2000).text('蚂蚁服务市场 全新登场').fadeIn();
                $('#banner-admodel_txt').children('p').eq(0).fadeOut(2000).text('没有卖不出的服务，只有没发布的服务').fadeIn();
                break;
        }
    }

    //登录框中扫一扫提示动画
    $('#useHalp').mouseenter(function () {
        $('#scanPrompt').css('opacity', 1).animate({right: 62})
    })
    $('#useHalp').mouseleave(function () {
        $('#scanPrompt').css('opacity', 0).animate({right: -75})
    })

})()
