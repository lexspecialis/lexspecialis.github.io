yepnope.injectJs('/wp-content/themes/lex-specialis/js/vendors.js', function () {
    $(document).foundation();
    $(function () {
        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    var targetTop = target.offset().top - $('.top-bar .title-area').height() + 1;
                    var speed = Math.abs($(window).scrollTop() - targetTop) * 0.3;
                    $('html,body').animate({
                        scrollTop: targetTop
                    }, speed);
                    return true;
                }
            }
        });
    });
    $(function () {
        FastClick.attach(document.body);
    });

    function setCookie(key, value) {
        var expires = new Date();
        expires.setTime(expires.getTime() + (1 * 24 * 60 * 60 * 1000));
        document.cookie = key + '=' + value +';path=/'+ ';expires=' + expires.toUTCString();
    }

    function getCookie(key) {
        var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
        return keyValue ? keyValue[2] : null;
    }

    $('.cookie span').on('click', function(event){
        event.preventDefault();
        setCookie('agreed', 'agreed');
        $('.cookie').removeClass('visible');
    });

    if (!getCookie('agreed')) {
        $('.cookie').addClass('visible');
    }

    yepnope.injectJs('https://maps.googleapis.com/maps/api/js?v=3.exp&callback=initializeMap', function () {
        window.initializeMap = function () {
            var map;

            function initialize() {
                var mapOptions = {
                    zoom: 16,
                    center: new google.maps.LatLng(52.219766, 21.021036),
                    disableDefaultUI: true,
                    draggable: false,
                    zoomControl: false,
                    scrollwheel: false,
                    disableDoubleClickZoom: true
                };

                google.maps.Map.prototype.setCenterWithOffset = function (latlng, offsetX, offsetY) {
                    var map = this;
                    var ov = new google.maps.OverlayView();
                    ov.onAdd = function () {
                        var proj = this.getProjection();
                        var aPoint = proj.fromLatLngToContainerPixel(latlng);
                        aPoint.x = aPoint.x + offsetX;
                        aPoint.y = aPoint.y + offsetY;
                        map.setCenter(proj.fromContainerPixelToLatLng(aPoint));
                    };
                    ov.draw = function () {
                    };
                    ov.setMap(this);
                };

                map = new google.maps.Map(document.getElementById('map'), mapOptions);
                map.setCenterWithOffset(new google.maps.LatLng(52.219766, 21.021036), -$(window).width() / 4, 0);

                setTimeout(function () {
                    new google.maps.Marker({
                        position: new google.maps.LatLng(52.219766, 21.021036),
                        map: map,
                        draggable: false,
                        animation: google.maps.Animation.DROP
                    });
                }, 400);

                $('#map').data('initialized', true);
            }

            function showMapIfNeeded() {
                if (currentScreenSize() !== 'small') {
                    var map = $('#map');
                    map.show();
                    if (!map.data('initialized')) {
                        google.maps.event.addDomListener(window, 'load', initialize);
                        initialize();
                    }
                } else {
                    $('#map').hide();
                }
            }

            function currentScreenSize() {
                return $('#media-query-breakpoints').find('div:visible').first().data('size');
            }

            $(window).resize(function () {
                showMapIfNeeded();
            });
            showMapIfNeeded();
        }
    });
});

yepnope.injectJs('/wp-content/themes/lex-specialis/js/google-analytics.js');

