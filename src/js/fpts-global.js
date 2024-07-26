

//2018-11-21 15:21:26 PhucVM
function $$(id) { return document.getElementById(id); }
var MenuMobile = function () {
    self = this;
    //khai báo
    self.CLASS_BTNMENUMOBILE    =      '.MmenuResponsiv';
    self.ID_MOBILESHOW          =      '#MobileShow';
    self.ID_SEARCH              =      '#SearchShow';
    self.ID_MOBILEHEDEN         =      '#MobileHeden';
    self.ID_HOME                =      '#MenuResposive';
    self.CLASS_SHOWMENU         =      '.glyphicon-menu-hamburger';
    self.ID_MENULEFT            =      '#ItemLeftShowMobile';
    self.ID_SEARCHMOBILE        =      '#searchmobile';
    self.ID_BLOCKSEARCH         =      '#SearchMobile';
    self.ID_MENUCOSO            =      '#showcontent';  //span chứng khoán cơ sở
    self.ID_MENUPHAISINH        =      '#showcontent_'; //span menu chứng khoán phái sinh
    self.ID_CONTENTCOSO         =      '#submenumobile'
    self.ID_CONTENTPHAISINH     =      '#submenumobile'


    //dùng chung cho sự kiện click
    //event click menu mobile
    self.EventMenu = function () {
        $('#MenuResposive').slideToggle();
        $("#MobileShow").toggleClass("Mobileclose_");
    }
    self.EventBtnMenuLeft = function () {
        $('.MenuItemLeft').slideToggle();
        $("#ItemLeftShowMobile").toggleClass("ItemLeftMobileclose_");
    }
    //event click search mobile
    self.EventSearch = function () {
        $("#SearchShow").toggleClass("glyphicon-search");
        //$('#MenuResposive').slideToggle();
    }

    //event check with remove class boder
    self.CheckWidth = function () {
        if ($(window).width() > 1020) {
            $("#bordermobile").removeClass("boder-menumobile");
        }
    }
    //sư kiện click menu mobile phần Hỗ trợ khách hàng chứng khoán cơ sở và phái sinh
    self.CheckWidthHT = function () {
        if ($(window).width() < 1025) {
            $('#htmobile').addClass("menudown");
            //$('#submenumobile').hide();
            $('#htmobile_').addClass("menuup_");
            $('#submenumobile_').hide();

        } else {
            $('#htmobile').removeClass("menudown menuup");
            $('#htmobile_').removeClass("menudown_ menuup_");
        }

    }
    self.Showupmenu = function () {
        $("#submenumobile").slideToggle("");
        $("#htmobile").toggleClass("menuup");

    }
    self.Showupmenu_ = function () {
        $("#submenumobile_").slideToggle("");
        $("#htmobile_").toggleClass("menudown_");

    }
    //Event scroll up
    self.UpTop = function () {
        if ($(window).scrollTop() > 300) {
            $('#ScrollTop').fadeIn();
        } else {
            $('#ScrollTop').fadeOut();
        }
    }
    self.EventScroll = function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    }
    //Event scroll hiden top Header
    self.EventScrollHeader = function () {

        if ($(window).width() > 0 && $(window).width() <= 1024) {
            //console.log($(window).scrollTop());
            if ($(window).scrollTop() > 30) {
                $$("fptsMenuHome").style.position = "fixed";
                $$("fptsMenuHome").style.zIndex = "50";
                $$("fptsMenuHome").style.top = "0";
                $('.fpts-slogan').css("display", "none");
                //icon btn menu
                $('.MmenuResponsiv').css("position", "fixed");
                $('.MmenuResponsiv').css("zIndex", "100");
                $('.MmenuResponsiv').css("top", "13px");
                $('.MmenuResponsiv').css("right", "13px");
                $('.MmenuResponsiv').css("left", "unset");
                $('.MmenuResponsiv>span').css("background", "#007db8");
                //
                $('.fptsMobileIconSearch').css("position", "fixed");
                $('.fptsMobileIconSearch').css("zIndex", "50");
                $('.fptsMobileIconSearch').css("top", "26px");
                $('.fptsMobileIconSearch').css("right", "41px");
                $('.fptsMobileIconSearch').css("left", "unset");
                $('.glyphicon-search').css("color", "#007db8");
                //icon search
                $('.fptsMobileIconSearch').css("position", "fixed");
                $('.fptsMobileIconSearch').css("zIndex", "100");
                $('.fptsMobileIconSearch').css("top", "13px");
                $('.fptsMobileIconSearch').css("right", "50px");
                $('.fptsMobileIconSearch>span').css("color", "#007db8");
            }
            if ($(window).scrollTop() < 30) {
                $$("fptsMenuHome").style.position = "relative";
                $$("fptsMenuHome").style.zIndex = "unset";
                $$("fptsMenuHome").style.top = "unset";
                $('.fpts-slogan').css("display", "block");
                //
                $('.MmenuResponsiv').css("position", "absolute");
                $('.MmenuResponsiv').css("zIndex", "unset");
                $('.MmenuResponsiv').css("top", "7px");
                $('.MmenuResponsiv').css("right", "unset");
                $('.MmenuResponsiv').css("left", "13px");
                $('.MmenuResponsiv>span').css("background", "#fff");
                //
                $('.fptsMobileIconSearch').css("position", "absolute");
                $('.fptsMobileIconSearch').css("zIndex", "unset");
                $('.fptsMobileIconSearch').css("top", "8px");
                $('.fptsMobileIconSearch').css("right", "unset");
                $('.fptsMobileIconSearch').css("left", "38px");
                $('.glyphicon-search').css("color", "#fff");
                //icon search
                $('.fptsMobileIconSearch').css("position", "absolute");
                $('.fptsMobileIconSearch').css("top", "8px");
                $('.fptsMobileIconSearch').css("left", "38px");
                $('.fptsMobileIconSearch>span').css("color", "#fff");
            }

        }
    }
    //Event scroll hiden top Header
    self.EventScrollHeaderDesktop = function () {

        if ($(window).width() >= 1024) {
            //console.log($(window).scrollTop());
            if ($(window).scrollTop() > 100) {
                $$("MenuResposive").style.position = "fixed";
                $$("MenuResposive").style.zIndex = "50";
                $$("MenuResposive").style.top = "0";
                $$("MenuResposive").classList.add("fptsNavBoxshadow")

            }
            if ($(window).scrollTop() < 30) {
                $$("MenuResposive").style.position = "relative";
                $$("MenuResposive").style.zIndex = "unset";
                $$("MenuResposive").style.top = "unset";
                $$("MenuResposive").classList.remove("fptsNavBoxshadow")
                //

            }

        }
    }

    //Event Show and hiden input search Mobile
    self.EventClickSearchMobile = function () {

        $('#SearchMobile').slideToggle();
    }
    self.CheckWidthImg = function () {
        var imgs = document.getElementsByClassName("fix-rickeditor").getElementsByTagName('img');
        for (var i = 0; i < imgs.length; i++) {
            console.log(imgs.length);
              
        }
    }
}

$(document).ready(function () {
    //call
    var $_service_ = new MenuMobile();
    self = this;

    // đóng menu cha
    $('.menu-multilevel').click(function () {
        $('.fpts-megamenu').hide();
        $(this).next().show();
        $('.fpts-menunav').animate({ left: "-100%" });
    });
    // đóng menu con
    $('.fpts-btn-premenu').click(function () {
        $('.fpts-menunav').animate({ left: "0px" });
    });

    //load 
    //_service_.EventMenu();  //load trc khi có sự kiện click nên bỏ :))
    $_service_.CheckWidth();
    $_service_.UpTop();
    $_service_.CheckWidthHT();
   // $_service_.CheckWidthImg();
    //$_service_.CheckWidthMobile();
    // _service_.EventScrollHeader();


    // global instance
    window.g_classFeedback = this;

    //Gọi sự kiện click đến ID của tab tương ứng

    $($_service_.ID_MOBILESHOW).click(function () {
        $('#SearchMobile').hide();
        $('.removesearch').hide();
        $('.iconsearch').show();
        $_service_.EventMenu();
    });
    $($_service_.ID_MENUCOSO).click(function () {
        $_service_.Showupmenu();
    });
    $($_service_.ID_MENUPHAISINH).click(function () {
        $_service_.Showupmenu_();
    });
    $($_service_.ID_MENULEFT).click(function () {
        $_service_.EventBtnMenuLeft();
    });
    //show input search
    $($_service_.ID_SEARCH).click(function () {
        $_service_.EventSearch();

    });
    //show and hiden input  Search
    $($_service_.ID_SEARCHMOBILE).click(function () {
        document.getElementById("MobileShow").classList.remove("Mobileclose_");
        $('#MenuResposive').hide();
        $_service_.EventClickSearchMobile();

        //   alert('this is');
    });
    $(window).scroll(function () {
        $_service_.UpTop();
        $_service_.EventScrollHeader();
        $_service_.EventScrollHeaderDesktop();


    });
    $('#ScrollTop').click(function () {
        $_service_.EventScroll();
    });
    
    //console.log($(window).width());

  
});


function enterSearch(e) {
    //See notes about 'which' and 'key'
    if (e.keyCode == 13) {
        //debugger;
        var valSerach = document.getElementById("fpts-search-stockcode").value;
        
        if (valSerach != null && valSerach != "") {
            // viet vao day
            $.ajax({
                url: '/editor/Surface/WebsiteBase/GetStockCodesBySearch',
                data: {
                    stockCode: valSerach,
                },
                success: function (jsonData) {
                    console.log(jsonData);
                    if (jsonData[0] != null) {
                        var websitelink = "http://ezsearch.fpts.com.vn/Services/EzData/default2.aspx?s=";
                        var link = jsonData[0].websitelink;

                        window.open(link, '_blank');
                    }
                }
            });
        }
        return false;
    }
   
  
}
if (document.getElementById('DataByMenuLeft')) {
    var x = document.getElementById('DataByMenuLeft').getElementsByTagName('img')
    for (i = 0; i < x.length; i++) {
        if (x[i].width < '150') {
            x[i].classList.add('fixSizeImg');
            x[i].style.display = 'initial !important';
            x[i].style.marginLeft = 'unset !important';
            x[i].style.marginRight = 'unset !important';
        }
    }
}
