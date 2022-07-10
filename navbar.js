(function( $ ) {

    $(function() {

        /**
         * @fn  Fire if Element Has Ready
         */
         var waitForElement = function(selector, callback) {
            if ($(selector).length) {
              callback();
            } else {
              setTimeout(function() {
                waitForElement(selector, callback);
              }, 0);
            }
        }

        // $('#content').prepend($('.nvbrcls'));

        /**
         * NavBar Effect
         */
        function navScrollEffect() {
            scrollY = window.pageYOffset;
            nvbrwrp = $('.nvbrcls');
            if ( scrollY > 1 ) {
                nvbrwrp.addClass('efctbxshdw');
            }
            if ( scrollY <= 1 ) {
                nvbrwrp.removeClass('efctbxshdw');
            }
        }
        window.addEventListener('scroll', navScrollEffect);

        /**
         * @modal       navigation bar
         * @method      body => enable scrolling
         *              backdrop => white background
         */
         $('.icnwrp').click(function() {
            $('.modal#nvbr').modal('show');
         });

         $('.modal#nvbr').on('show.bs.modal', function () {
            $(this).children('.modal-dialog').attr('class', 'modal-dialog animate__animated animate__slideInRight');
            $('body').addClass('enblscrl');
            waitForElement('.modal-backdrop',function() {
                $('.modal-backdrop').addClass('wh-bgmdl');
            });
        });

        $('.modal#nvbr').on('hide.bs.modal', function () {
            $(this).children('.modal-dialog').attr('class', 'modal-dialog animate__animated animate__slideOutRight');
            $('body').removeClass('enblscrl');
        });

        $('.modal#nvbr').on('hidden.bs.modal', function () {
            $('.modal-backdrop').removeClass('wh-bgmdl');
        });

    }); // end ready doc.

})( jQuery );
