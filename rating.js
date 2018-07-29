(function ($) {

    $.fn.rating = function (options) {
        var prop = $.extend({
            maxValue: 5,
            value: 0,
            iconSize: '35px',
            iconSrcActive: undefined,
            iconSrcInactive: undefined,
            iconPadding: 5
        }, options);

        this.each(function () {
            var el = $(this),
                cId = btoa(Math.random()).substr(0, 10);
            el.after('<div class="rb-rating" id="' + cId + '"></div>');

            var elcId = $('#' + cId),
                star = function (cls, val) {
                    var style = 'width:' + prop.iconSize + '; height:' + prop.iconSize + ';';

                    if(val < prop.maxValue){
                        style += 'margin-right: '+ prop.iconPadding + 'px;';
                    }

                    if (cls === 'active' && prop.iconSrcActive !== undefined) {
                        style += 'background-image: url(' + prop.iconSrcActive + ');';
                    }

                    if (cls === 'inactive' && prop.iconSrcInactive !== undefined) {
                        style += 'background-image: url(' + prop.iconSrcInactive + ');';
                    }

                    return $('<div>', {
                        'class': 'rb-rating-star ' + cls,
                        'data-idx': val,
                        'style': style
                    });
                },
                renderValue = function (val) {
                    elcId.html('');

                    for (var i = 0; i < prop.maxValue; i++) {
                        var sts = ((i + 1) <= val) ? 'active' : 'inactive';
                        star(sts, i + 1).appendTo(elcId);
                    }

                    elcId.find('div').each(function () {
                        $(this).click(function () {
                            renderValue($(this).attr('data-idx'));
                        });
                    });

                    el.attr('value', val);
                }

            el.hide();

            if (el.val().trim() !== '')
                prop.value = parseInt(el.val());

            renderValue(prop.value);
        });

        return this;
    };

}(jQuery));