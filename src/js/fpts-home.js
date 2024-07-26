
(function () {
    selfHome = this;

    // ------------ const 2019-01-29 17:24:20 PhucVM------------
    var CONST = 'const';
    var POST = 'post';
    var JSON = 'json';
    var URL_TINTUC = '/editor/Surface/Home/getNoidungTinTuc';
    
    var CLASS_FPT_N_CONTENT_LEFT = '.fpt-n-content-left';
    
    var ID_TAB_THONGBAO          = '#tabThongBao';
    var ID_TAB_CONGBO            = '#tabCongBo';
    var ID_TAB_TINTUC            = '#tabTinTuc';
    var ID_TAB_TINDAUGIA         = '#tabTinDauGia';
    var ID_DATA_CONTENT      = '#data-content';

    
    // viet cac function 
        this.callData = function (idTinTuc) {
        //set so luong tin hien thi
        var sl = 3;
        // tin cong bo
        if (idTinTuc == 409 || idTinTuc == 533)
            sl = 5;
        //tin Tin tuc
        if (idTinTuc == 86 || idTinTuc == 506)
            sl = 5;
        //tin dau gia
        if (idTinTuc == 90 || idTinTuc == 507)
            sl = 5;
        // Tin thong bao
        if (idTinTuc == 173 || idTinTuc == 522)
            sl = 3;

        $.ajax({
            url: URL_TINTUC + "?ID=" + idTinTuc + "&sl=" + sl,
            
            //type: POST,
            //data: { ID: idTinTuc },
            dataType: JSON,
            success: function (result) {
                var html = '';                
                var listItem = result.items;
                
                if (listItem.length != 0) {       
                    //debugger;
                    html = html + `<ul>`;
                    for (var i = 0; i < listItem.length; i++) {
                        var d = new Date(parseInt(listItem[i].Ngaytao.replace("/Date(", "").replace(")/", "")));

                        // custom minutes
                        var minutes2 = d.getMinutes();
                        if (parseInt(minutes2) < 10) {
                            minutes2 = "0" + minutes2 ;
                        }
                        // custom Hours
                        var hours2 = d.getHours();
                        if (parseInt(hours2) < 10) {
                            hours2 = "0" + hours2;
                        }

                        //2019-06-03 10:32:47 PhucVM
                        //link của tin tương ứng vs link trong DB, thay đổi cấu trúc bên ngoài thì 
                        // vào sửa link tương ứng...
                        var link = result.Path + listItem[i].TitleLink;
                        if (listItem[i].ClickDownload == 1)
                        {
                            link = listItem[i].download == null ? link : listItem[i].download.replace('/FileStore2','http://file.fpts.com.vn/FileStore2');
                        }
                        //Chi Thong bao tu FPTS moi hien thi noi dung tom tat
                        var sTomtat = (idTinTuc == 173 || idTinTuc == 522) ? (listItem[i].Tomtat == null ? "" : listItem[i].Tomtat) : "";             

                        html = html + `<li>
                                            <a href="${link}">
                                                <h3 class ="fpts-menutab-title">${(listItem[i].StockCode == null ? "": listItem[i].StockCode + ":")} ${listItem[i].NoiDung}</h3>
                                                <p class ="fpts-menutab-content" style="${sTomtat == "" ? "display: none; " : ""}" >${sTomtat}</p>
                                            </a>
                                            <p class ="fpts-menutab-date">${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()} ${hours2}: ${minutes2}</p>
                                        </li>`;
                    }
                    html = html + `</ul>`;
                    html = html + `<a href="${result.Path}" class="btn btn-default fpts-btn-home">${LANGUAGE.xem_tat_ca}</a>`;
                    $(ID_DATA_CONTENT).html(html);
                }
            }
        });
    }

    //this.setNewsTabNames = function (groupids) {
    //    debugger
    //    $.ajax({
    //        url: '/editor/Surface/Home/getNameFolderForHome/' + groupids,
    //        //type: POST,
    //        //data: { ID: idTinTuc },
    //        dataType: JSON,
    //        success: function (result) {
    //            $(ID_TAB_THONGBAO).html(result[0].Description);
    //            $(ID_TAB_CONGBO).html(result[1].Description);   
    //            $(ID_TAB_TINTUC).html(result[2].Description);
    //            $(ID_TAB_TINDAUGIA).html(result[3].Description);
    //        }
    //    });
    //}

    // init cac code xu ly su kien cua cac DOM tren form
    this.initHandlers = function () {
        $(ID_TAB_THONGBAO).click(function () {
            $('.tablinks').removeClass('active');
            $(this).addClass('active');
            if (LANGUAGE.lang == 'VN') {
                callData(173);
            }
            else
            {
                callData(522);
            }
        });

        $(ID_TAB_CONGBO).click(function () {
            $('.tablinks').removeClass('active');
            $(this).addClass('active');
            if (LANGUAGE.lang == 'VN') {
                callData(409);
            }
            else {
                callData(533);
            }
            
        });

        $(ID_TAB_TINTUC).click(function () {
            $('.tablinks').removeClass('active');
            $(this).addClass('active');
            if (LANGUAGE.lang == 'VN') {
                callData(86);
            }
            else {
                callData(506);
            }
           
        });

        $(ID_TAB_TINDAUGIA).click(function () {
            $('.tablinks').removeClass('active');
            $(this).addClass('active');
            if (LANGUAGE.lang == 'VN') {
               callData(427);

            }
            else {
               callData(551);

            }
        });
        
        //selfHome.validteDataFeedback();
    }

    // tat ca init can thiet (init all)
    this.initForm = function () {
        // init event handlers
        this.initHandlers();
        //set tên cho các tab tin tức
        if (LANGUAGE.lang == 'VN') {
            //setNewsTabNames('173,409,10,427');
            // load data tab dau tien khi moi load trang
            callData(173);
        }
        else {
            //setNewsTabNames('522,533,501,507');
            // load data tab dau tien khi moi load trang
            callData(522);
        }
        
        $('.tablinks').removeClass('active');
        $(ID_TAB_THONGBAO).addClass('active');
    }

    // contructor => auto exec
    this.initForm();

    // global instance
    window.g_classFptsHome = this;
})();

$(document).ready(function () {
    var owl = $('.slider');
    owl.owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true
    });
    $('.play').on('click', function () {
        owl.trigger('play.owl.autoplay', [1000])
    })
    $('.stop').on('click', function () {
        owl.trigger('stop.owl.autoplay')
    })

    ///
   
})