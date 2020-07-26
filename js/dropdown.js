(function ($) {
    'use strict';

    function dropdown(elem) {
        var $elem = $(elem),
            activeClass = $elem.data("active") + '-active';

        $elem.hover(function () {
            // over
            $elem.addClass(activeClass);

        }, function () {
            // out
            $elem.removeClass(activeClass);
        });
    }
    //jquery插件的形式
    $.fn.extend({
        dropdown: function () {
            return this.each(function () {
                dropdown(this);
            });
        }
    });
    //调用
    $('.dropdown').dropdown();

    // $('.dropdown').each(function () {
    //     dropdown(this);
    // });
})(jQuery);