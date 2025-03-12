(function($) {
    "use strict";
    var MASCOTSWITCHER = {};
    var $document = $(document);
    var $document_body = $(document.body);
    var $window = $(window);
    var $html = $('html');
    var $body = $('body');

    MASCOTSWITCHER.initialize = {

        init: function() {
            MASCOTSWITCHER.initialize.TM_demoSwitcher();
        },

        /* ---------------------------------------------------------------------- */
        /* ------------------------------ Demo Switcher  ------------------------ */
        /* ---------------------------------------------------------------------- */
        TM_demoSwitcher: function() {
            var showSwitcher = true;
            var $style_switcher = $('#style-switcher');
            if( !$style_switcher.length && showSwitcher ) {
                var ajaxData = {
                    'action': 'mascot_color_switcher_get_demo_switcher'
                };
                $.ajax({
                    url: MascotCoreAjaxUrl,
                    data: ajaxData,
                    success: function (data) { $( "body" ).append(data); },
                    dataType: 'html'
                });
            }
        
        },
    };

    /* ---------------------------------------------------------------------- */
    /* ---------- document ready, window load, scroll and resize ------------ */
    /* ---------------------------------------------------------------------- */
    //document ready
    MASCOTSWITCHER.documentOnReady = {
        init: function() {
            MASCOTSWITCHER.initialize.init();
        }
    };



    /* ---------------------------------------------------------------------- */
    /* ---------------------------- Call Functions -------------------------- */
    /* ---------------------------------------------------------------------- */
    $document.ready(
        MASCOTSWITCHER.documentOnReady.init
    );

})(jQuery);