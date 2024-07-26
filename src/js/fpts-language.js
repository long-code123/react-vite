
(function () {
    self = this;

    // callDataChildren
    this.callDataLanguage = function () {

        var URL = '/editor/Surface/FptsRes/getLanguage';

        $.ajax({
            url: URL,
            async: false,
        }).done(function (jsonData) {
            LANGUAGE = jsonData;
           // console.log(LANGUAGE);
        });
    }

    // init cac code xu ly su kien cua cac DOM tren form
    this.initHandlers = function () {
        self.callDataLanguage();
    }

    // tat ca init can thiet (init all)
    this.initForm = function () {
        // init event handlers
        this.initHandlers();
    }

    // contructor => auto exec
    this.initForm();

    // global instance
    window.g_classLanguage = this;
})();
