(function () {
    selfBangGia = this;

    var URL_CheckDateTime = 'https://liveprice.fpts.com.vn/hsx/data.ashx?s=cdt';
    var URL_ASHX = 'https://liveprice.fpts.com.vn/hsx/data.ashx?s=index';
    var URL_HNX_UPCOM = 'https://liveprice.fpts.com.vn/hnx/data.ashx?s=index';

    // khai bao bien
    var vni_IndexValue = "";
    var vni_Change = "";
    var vni_ChangePercent = "";

    var vn30_IndexValue = "";
    var vn30_Change = "";
    var vn30_ChangePercent = "";

    var vnxall_IndexValue = "";
    var vnxall_Change = "";
    var vnxall_ChangePercent = "";

    var i02_3 = "";
    var i02_5 = "";
    var i02_6 = "";

    var i41_3 = "";
    var i41_5 = "";
    var i41_6 = "";

    var i03_3 = "";
    var i03_5 = "";
    var i03_6 = "";

    // remove '"'
    this.removeString = function (text) {
        return text.replace('"', '');
    }

    // call VNI_IndexValue VN30_IndexValue
    this.setDataIndex = function (result) {

        var result = result.replace("{", "").replace("}", "");
        var getResult = result.split(':');
        //console.log(getResult);
        // get data
        for (var i = 0; i < getResult.length; i++) {

            // VNXALL
            if (getResult[i].toString().includes("VNXALL_IndexValue")) {
                vnxall_IndexValue = removeString(getResult[i + 1].split('","')[0]);
            }
            if (getResult[i].toString().includes('VNXALL_Change')) {
                vnxall_Change = removeString(getResult[i + 1].split('","')[0]);
            }
            if (getResult[i].toString().includes("VNXALL_ChangePercent")) {
                vnxall_ChangePercent = removeString(getResult[i + 1].split('","')[0]);
            }

            // VNI_IndexValue
            if (getResult[i].toString().includes("VNI_IndexValue")) {
                vni_IndexValue = removeString(getResult[i + 1].split('","')[0]);
            }
            if (getResult[i].toString().includes('VNI_Change')) {
                vni_Change = removeString(getResult[i + 1].split('","')[0]);
            }
            if (getResult[i].toString().includes("VNI_ChangePercent")) {
                vni_ChangePercent = removeString(getResult[i + 1].split('","')[0]);
            }

            // VN30_IndexValue
            if (getResult[i].toString().includes("VN30_IndexValue")) {
                vn30_IndexValue = removeString(getResult[i + 1].split('","')[0]);
            }
            if (getResult[i].toString().includes('VN30_Change')) {
                vn30_Change = removeString(getResult[i + 1].split('","')[0]);
            }
            if (getResult[i].toString().includes("VN30_ChangePercent")) {
                vn30_ChangePercent = removeString(getResult[i + 1].split('","')[0]);
            }
        }
        // render html
        var slide0 = `<div class="vn-index ${vnxall_Change > 0 ? 'color-up' : (vnxall_Change == 0 ? 'color-minus' : 'color-down')}">
                        <div class="name-index">
                            <label>VNXALL </label>
                            <span class ="bold">${vnxall_IndexValue}</span>
                        </div>
                        <div>
                            <span id="vn-index-change">${vnxall_Change}</span>
                            <span class ="glyphicon__ ${vnxall_Change > 0 ? 'conarrowup' : (vnxall_Change == 0 ? 'glyphicon-minus' : 'arrowdown')}"></span>
                            <span class="vn-index-change">${vnxall_ChangePercent}%</span>
                        </div>
                     </div>`;

        var slide1 = `<div class="vn-index ${vni_Change > 0 ? 'color-up' : (vni_Change == 0 ? 'color-minus' : 'color-down')}">
                        <div class="name-index">
                            <label>VN-Index </label>
                            <span class ="bold">${vni_IndexValue}</span>
                        </div>
                        <div>
                            <span id="vn-index-change">${vni_Change}</span>
                            <span class ="glyphicon__ ${vni_Change > 0 ? 'conarrowup' : (vni_Change == 0 ? 'glyphicon-minus' : 'arrowdown')}"></span>
                            <span class="vn-index-change">${vni_ChangePercent}%</span>
                        </div>
                     </div>`;

        var slide2 = `<div class="vn-index ${vn30_Change > 0 ? 'color-up' : (vn30_Change == 0 ? 'color-minus' : 'color-down')}">
                        <div class="name-index">
                            <label>VN30-Index </label>
                            <span class ="bold">${vn30_IndexValue}</span>
                        </div>
                        <div>
                            <span>${vn30_Change}</span>
                            <span class ="glyphicon__ ${vn30_Change > 0 ? 'conarrowup' : (vn30_Change == 0 ? 'glyphicon-minus' : 'arrowdown')}"></span>
                            <span class="vn-index-change">${vn30_ChangePercent}%</span>
                        </div>
                     </div>`;

        $('#slide0').html(slide0);
        $('#slide1').html(slide1);
        $('#slide2').html(slide2);
    }

    // call hnx upcom
    this.setDataHnxUpcom = function (result) {
        var result = result.replace("{", "").replace("}", "");
        var getResult = result.split(':');

        for (var i = 0; i < getResult.length; i++) {
            // hnx i02_3
            if (getResult[i].toString().includes("i02_3")) {
                i02_3 = removeString(getResult[i + 1].split('","')[0]);
            }
            if (getResult[i].toString().includes('i02_5')) {
                i02_5 = (removeString(getResult[i + 1].split('","')[0]));
            }
            if (getResult[i].toString().includes("i02_6")) {
                i02_6 = (removeString(getResult[i + 1].split('","')[0]));
            }

            // hnx30 i41_3
            if (getResult[i].toString().includes("i41_3")) {
                i41_3 = (removeString(getResult[i + 1].split('","')[0]));
            }
            if (getResult[i].toString().includes('i41_5')) {
                i41_5 = (removeString(getResult[i + 1].split('","')[0]));
            }
            if (getResult[i].toString().includes("i41_6")) {
                i41_6 = (removeString(getResult[i + 1].split('","')[0]));
            }

            // upcom i03_3
            if (getResult[i].toString().includes("i03_3")) {
                i03_3 = (removeString(getResult[i + 1].split('","')[0]));
            }
            if (getResult[i].toString().includes('i03_5')) {
                i03_5 = (removeString(getResult[i + 1].split('","')[0]));
            }
            if (getResult[i].toString().includes("i03_6")) {
                i03_6 = (removeString(getResult[i + 1].split('","')[0]));
            }
        }

        var slide3 = `<div class="vn-index ${i02_5 > 0 ? 'color-up' : (i02_5 == 0 ? 'color-minus' : 'color-down')}">
                        <div class="name-index">
                            <label>HNX-Index </label>
                            <span class="bold">${i02_3}</span>
                        </div>
                        <div>
                            <span>${i02_5}</span>
                            <span class ="glyphicon__ ${i02_5 > 0 ? 'conarrowup' : (i02_5 == 0 ? 'glyphicon-minus' : 'arrowdown')}"></span>
                            <span class="vn-index-change">${i02_6}%</span>
                        </div>
                    </div>`;
        $('#slide3').html(slide3);

        var slide4 = `<div class="vn-index ${i41_5 > 0 ? 'color-up' : (i41_5 == 0 ? 'color-minus' : 'color-down')}">
                        <div class="name-index">
                            <label>HNX30-Index </label>
                            <span class ="bold">${i41_3}</span>
                        </div>
                        <div>
                            <span>${i41_5}</span>
                            <span class ="glyphicon__ ${i41_5 > 0 ? 'conarrowup' : (i41_5 == 0 ? 'glyphicon-minus' : 'arrowdown')}"></span>
                            <span class="vn-index-change">${i41_6}%</span>
                        </div>
                    </div>`;
        $('#slide4').html(slide4);

        var slide5 = `<div class="vn-index ${i03_5 > 0 ? 'color-up' : (i03_5 == 0 ? 'color-minus' : 'color-down')}">
                        <div class="name-index">
                            <label>UPCOM-Index </label>
                            <span class ="bold">${i03_3}</span>
                        </div>
                        <div>
                            <span>${i03_5}</span>
                            <span class ="glyphicon__ ${i03_5 > 0 ? 'conarrowup' : (i03_5 == 0 ? 'glyphicon-minus' : 'arrowdown')}"></span>
                            <span class="vn-index-change">${i03_6}%</span>
                        </div>
                    </div>`;
        $('#slide5').html(slide5);
    }

    // call vn index
    this.getDataIndex = function () {
        $.ajax({
            url: URL_ASHX,
            success: function (result) {
                selfBangGia.setDataIndex(result);
                selfBangGia.getDataHnxUpcom();
            }
        });
    }

    // call hnx upcom
    this.getDataHnxUpcom = function () {
        $.ajax({
            url: URL_HNX_UPCOM,
            success: function (result) {
                selfBangGia.setDataHnxUpcom(result);
                $('#box-vn-hnx-index').owlCarousel({
                    items: 6,
                    loop: true,
                    margin: 0,
                    autoplay: true,
                    autoplayTimeout: 5000,
                    autoplayHoverPause: true,
                    responsive: {
                        0: {
                            items: 2
                        },
                        600: {
                            items: 3
                        },
                        1000: {
                            items: 6,
                            loop: false,
                        }
                    }
                });
            }
        });
    }

    this.isWorkingTime = function () {
        var currentDateTime = new Date();
        var hours = currentDateTime.getHours().toString();
        var minutes = currentDateTime.getMinutes().toString();
        var seconds = currentDateTime.getSeconds().toString();

        var year = currentDateTime.getFullYear().toString();
        var month = (currentDateTime.getMonth() + 1).toString();
        var date = currentDateTime.getDate().toString();

        //var currentTime = new Date(year, month, date, hours, minutes, seconds);
        var currentTime = new Date(year, month, date, 10, 0, 0);

        var startWorkingAM = new Date(year, month, date, 8, 55, 0);
        var endWorkingAM = new Date(year, month, date, 9, 5, 0);
        var startWorkingPM = new Date(year, month, date, 14, 55, 0);
        var endWorkingPM = new Date(year, month, date, 15, 5, 0);

        if (currentTime > startWorkingAM && currentTime < endWorkingAM) {
            return true;
        }

        if (currentTime > startWorkingPM && currentTime < endWorkingPM) {
            return true;
        }

        return false;
    }

    this.setCheckWorkingTime = function () {
        $.ajax({
            url: URL_CheckDateTime,
            async: false,
            success: function (result) {
                // conver data result to json
                var obiject = JSON.parse(result);
                // get parameter
                var IsWorkingDay = obiject.IsWorkingDay;
                var IsWorkingTime = obiject.IsWorkingTime;
                var check = (IsWorkingTime && IsWorkingDay);
                
                setStorage("CheckWorkingTime", check.toString());
            }
        });
    }

    // hàm thay đổi biến check=(IsWorkingTime && IsWorkingDay) khi đến và hết giờ trong phiên giao dịch
    this.setStorageCheckWorkingTime = function () {
        
        setInterval(function () {
            if (selfBangGia.isWorkingTime() == true) {
                selfBangGia.setCheckWorkingTime();
            }
        }, 10000);
    }

    // render html IndexContent
    this.renderIndexContent = function () {
        
        var interval_obj = setInterval(function () {
            var check = getStorage("CheckWorkingTime");
            
            if (window.location.pathname != "/") {
                clearInterval(interval_obj);
            } else {
                if (check == "true") {
                    setTimeout(function () {
                        $(".vn-index span").css("background-color", "#fff");
                        selfBangGia.getDataIndex();
                    }, 1000);
                    $(".vn-index span").css("background-color", "#cecccc");
                }
            }
            
        }, 10000);
    }

    // init cac code xu ly su kien cua cac DOM tren form
    this.initHandlers2 = function () {
        selfBangGia.setCheckWorkingTime();
        // khởi tạo bảng giá khi load trang
        if (window.location.pathname == "/") {
            selfBangGia.getDataIndex();
        }
        
        // chạy trước renderIndexContent
        selfBangGia.setStorageCheckWorkingTime();
        // render html IndexContent
        selfBangGia.renderIndexContent();

    }

    // tat ca init can thiet (init all)
    this.initForm2 = function () {
        // init event handlers
        this.initHandlers2();
    }

    // contructor => auto exec
    this.initForm2();

    // global instance
    window.g_classSlideBangGia = this;
})();