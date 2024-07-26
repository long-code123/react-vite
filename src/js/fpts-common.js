// constant
var ID_PAGINATION                                               = '#pagination';
var ICON_FIRST                                                  = '<i class="glyphicon glyphicon-backward"></i>';
var ICON_LAST                                                   = '<i class="glyphicon glyphicon-forward"></i>';
var ICON_NEXT                                                   = 'Tiếp theo';
var ICON_NEXTC                                                  = '<div id="BgNext"></div>';
var ICON_PREVC                                                  = '<div id="BgPrev"></div>';
var ICON_PREV                                                   = 'Về trước';
var const_NHOM_UNGTUYEN = ',3,';

var LANGUAGE = ""

//phuongtt
var ID_LICHSUKIEN_LIST = ',118,120,121,123,166,183,221,514,515,516,517,521,523,528';

// storage
var STORAGE_NGANHNGHE                                           = "storageNganhNghe";
var STORAGE_DIADIEMLAMVIEC                                      = "storageDiaDiemLamViec";
var STORAGE_LOAIHINHCONGVIEC                                    = "storageLoaiHinhCongViec";
var STORAGE_KEYWORD                                             = "storageKeyword";
var STORAGE_CHEKSEARCHFORBOTTON                                 = "storageChekSearchForBotton";

var config = {
    pageSize: 10,// số item trong 1 page
    pageIndex: 1,
};

var managerConfig = {
    pageSize: 10,// số item trong 1 page
    pageIndex: 1,
};

//phuongtt
var jobConfig = {
    pageSize: 10,// số item trong 1 page
    pageIndex: 1,
};

//phuongtt
convertDateByLang = function (v) {
    var d = new Date(parseInt(v.replace("/Date(", "").replace(")/", "")));
    if (LANGUAGE.lang == 'VN')
        return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
        else
    return `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;
}

function getStorage(storage) {
    return localStorage.getItem(storage);
}

function setStorage(storage, valueStorage) {
    return localStorage.setItem(storage, valueStorage);
}

function paging(totalRow, callback) {
    var totalPage = Math.ceil(totalRow / config.pageSize);

    $(ID_PAGINATION).twbsPagination({
        totalPages: totalPage,
        startPage: 1,
        // số trang được hiển thị
        visiblePages: 5,
        first: '',
        last: '',
        next: ICON_NEXTC,
        prev: ICON_PREVC,
        onPageClick: function (event, page) {
            if (config.pageIndex != page) {
                config.pageIndex = page;
                setTimeout(callback, 200);
            }
        }
    });
}

// dành riêng cho cơ hội nghề nghiệp
function paging2(totalRow, callback) {
    var totalPage = Math.ceil(totalRow / jobConfig.pageSize);

    $(ID_PAGINATION).twbsPagination({
        totalPages: totalPage,
        startPage: 1,
        // số trang được hiển thị
        visiblePages: 5,
        first: '',
        last: '',
        next: '<i class="iconnext"></i>',
        prev: '<i class="iconpre"></i>',
        next: '<i class=""></i>',
        prev: '<i class=""></i>',
        
        onPageClick: function (event, page) {
            if (jobConfig.pageIndex != page) {
                jobConfig.pageIndex = page;
                setTimeout(callback, 200);
            }
        }
    });
}

//danh cho trang quản trị
function paging3(totalRow, callback) {
    var totalPage = Math.ceil(totalRow / managerConfig.pageSize);

	//debugger;
	//$(ID_PAGINATION).onPageClick = function () { };

    $(ID_PAGINATION).twbsPagination({
        totalPages: totalPage,
        startPage: 1,
        // số trang được hiển thị
        visiblePages: 5,
        first: '',
        last: '',
        next: ICON_NEXT,
        prev: ICON_PREV,
        onPageClick: function (event, page) {
            if (managerConfig.pageIndex != page) {
                managerConfig.pageIndex = page;
                setTimeout(callback, 200);
            }
        }
    });
}

function bannerSearch() {
    // get data
    var storageKeyword = $('.search .search-pers-ip').val();
    var storageNganhNghe = $('.search .career-search-fpts').val() ==''? "" : "," + $('.search .career-search-fpts').val() + ",";
    var storageLoaiHinhCongViec = $('.search .rank-search-fpts').val() == ''? "" : "," + $('.search .rank-search-fpts').val() + ",";
    var storageDiaDiemLamViec = $('.search .address-search-fpts').val() == '' ? "" : "," + $('.search .address-search-fpts').val() + ",";
    
    setStorage(STORAGE_CHEKSEARCHFORBOTTON, "true");
    
    // set storage
    setStorage(STORAGE_NGANHNGHE, storageNganhNghe);
    setStorage(STORAGE_DIADIEMLAMVIEC, storageDiaDiemLamViec);
    setStorage(STORAGE_LOAIHINHCONGVIEC, storageLoaiHinhCongViec);
    setStorage(STORAGE_KEYWORD, storageKeyword);
}

//phuongtt them link
$("#bannerSearch").click(function () {
    bannerSearch();
    if (LANGUAGE.lang == 'VN')
        window.location.href = "/co-hoi-nghe-nghiep/tim-kiem/";
    else
        window.location.href = "/career-opportunities/search/";
});

// menu-mobile cơ hội nghề nghiệp
this.menuCallapse = function () {
    
    $("#menu-mobile").click(function () {
        $("#menu-mobile").toggleClass("fa-bars");
        $('#data-menu-mobile').slideToggle();
    });
}

// scrollMoble
this.scrollMoble = function () {
    var widthScreen = $(window).width();
    if (widthScreen < 768) {
        window.onscroll = function () {
            var y = $(window).scrollTop();
            if (y >= 30) {
                $('#header-mobile').css({ 'position': 'fixed', 'background-color': '#ffffff', 'z-index': '1111', 'top': '0', 'width': '100%' });
                $('#menu-mobile').css({ 'top': '18px', 'right': '10px', 'left': 'unset', 'color': 'rgb(0, 125, 184)', 'position': 'fixed', 'z-index': '1151' });

            } else {
                $('#header-mobile').css({
                    'position': 'unset'
                });

                $('#menu-mobile').css({ 'top': '4px', 'left': '7px', 'color': '#fff', 'position': 'fixed', 'z-index': '1151' });
            }
        };
    }
}
this.option1 = function () {

    // Iterate over each select element
    $('#SlCareSearch').each(function () {

        // Cache the number of options
        var $this = $(this),
            numberOfOptions = $(this).children('option').length;

        // Hides the select element
        $this.addClass('s-hidden');

        // Wrap the select element in a div
        $this.wrap('<div class="select"></div>');

        // Insert a styled div to sit over the top of the hidden select element
        $this.after('<div class="styledSelect"></div>');

        // Cache the styled div
        var $styledSelect = $this.next('div.styledSelect');

        // Show the first select option in the styled div
        $styledSelect.text($this.children('option').eq(0).text());

        // Insert an unordered list after the styled div and also cache the list
        var $list = $('<ul />', {
            'class': 'options'
        }).insertAfter($styledSelect);

        // Insert a list item into the unordered list for each select option
        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
        }

        // Cache the list items
        var $listItems = $list.children('li');

        // Show the unordered list when the styled div is clicked (also hides it if the div is clicked again)
        $styledSelect.click(function (e) {
            e.stopPropagation();
            $('div.styledSelect.active').each(function () {
                $(this).removeClass('active').next('ul.options').hide();
            });
            $(this).toggleClass('active').next('ul.options').toggle();
        });

        // Hides the unordered list when a list item is clicked and updates the styled div to show the selected list item
        // Updates the select element to have the value of the equivalent option
        $listItems.click(function (e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));
            $list.hide();
            /* alert($this.val()); Uncomment this for demonstration! */
        });

        // Hides the unordered list when clicking outside of it
        $(document).click(function () {
            $styledSelect.removeClass('active');
            $list.hide();
        });

    });
}
//
this.option2 = function () {

    // Iterate over each select element
    $('#SlRankSearch').each(function () {

        // Cache the number of options
        var $this = $(this),
            numberOfOptions = $(this).children('option').length;

        // Hides the select element
        $this.addClass('s-hidden');

        // Wrap the select element in a div
        $this.wrap('<div class="select"></div>');

        // Insert a styled div to sit over the top of the hidden select element
        $this.after('<div class="styledSelect"></div>');

        // Cache the styled div
        var $styledSelect = $this.next('div.styledSelect');

        // Show the first select option in the styled div
        $styledSelect.text($this.children('option').eq(0).text());

        // Insert an unordered list after the styled div and also cache the list
        var $list = $('<ul />', {
            'class': 'options'
        }).insertAfter($styledSelect);

        // Insert a list item into the unordered list for each select option
        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
        }

        // Cache the list items
        var $listItems = $list.children('li');

        // Show the unordered list when the styled div is clicked (also hides it if the div is clicked again)
        $styledSelect.click(function (e) {
            e.stopPropagation();
            $('div.styledSelect.active').each(function () {
                $(this).removeClass('active').next('ul.options').hide();
            });
            $(this).toggleClass('active').next('ul.options').toggle();
        });

        // Hides the unordered list when a list item is clicked and updates the styled div to show the selected list item
        // Updates the select element to have the value of the equivalent option
        $listItems.click(function (e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));
            $list.hide();
            /* alert($this.val()); Uncomment this for demonstration! */
        });

        // Hides the unordered list when clicking outside of it
        $(document).click(function () {
            $styledSelect.removeClass('active');
            $list.hide();
        });

    });
}
//
this.option3 = function () {

    // Iterate over each select element
    $('#SlAddressSearch').each(function () {

        // Cache the number of options
        var $this = $(this),
            numberOfOptions = $(this).children('option').length;

        // Hides the select element
        $this.addClass('s-hidden');

        // Wrap the select element in a div
        $this.wrap('<div class="select"></div>');

        // Insert a styled div to sit over the top of the hidden select element
        $this.after('<div class="styledSelect"></div>');

        // Cache the styled div
        var $styledSelect = $this.next('div.styledSelect');

        // Show the first select option in the styled div
        $styledSelect.text($this.children('option').eq(0).text());

        // Insert an unordered list after the styled div and also cache the list
        var $list = $('<ul />', {
            'class': 'options'
        }).insertAfter($styledSelect);

        // Insert a list item into the unordered list for each select option
        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
        }

        // Cache the list items
        var $listItems = $list.children('li');

        // Show the unordered list when the styled div is clicked (also hides it if the div is clicked again)
        $styledSelect.click(function (e) {
            e.stopPropagation();
            $('div.styledSelect.active').each(function () {
                $(this).removeClass('active').next('ul.options').hide();
            });
            $(this).toggleClass('active').next('ul.options').toggle();
        });

        // Hides the unordered list when a list item is clicked and updates the styled div to show the selected list item
        // Updates the select element to have the value of the equivalent option
        $listItems.click(function (e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));
            $list.hide();
            /* alert($this.val()); Uncomment this for demonstration! */
        });

        // Hides the unordered list when clicking outside of it
        $(document).click(function () {
            $styledSelect.removeClass('active');
            $list.hide();
        });

    });
}

this.repleateAllString = function (str) {
    while(str.includes('|'))
    {
        str = str.replace("|","");
    }
    return str;
}

// tat ca init can thiet (init all)
this.initForm = function () {
    // menu mobile
    menuCallapse();
    //selection
    self.option1();
    self.option2();
    self.option3();
    // scrollMoble
    self.scrollMoble();

    // dùng cho trang hiển thị cv detail
    $(".CVInfo input").attr("disabled", "disabled");
    $(".CVInfo textarea").attr("disabled", "disabled");
}

// contructor => auto exec
this.initForm();