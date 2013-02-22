// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$.ajaxSetup({
    beforeSend: function(xhr) {
        xhr.setRequestHeader('X-CSRF-Token',
                             $('meta[name="csrf-token"]').attr('content'));
    }
});

detectBrowser = function(userAgent, language) {
    var version, webkitVersion, browser = {};
    userAgent = (userAgent || navigator.userAgent).toLowerCase();
    language = language || navigator.language || navigator.browserLanguage;
    version = browser.version = (userAgent.match(/.*(?:rv|chrome|webkit|opera|ie)[\/: ](.+?)([ \);]|$)/) || [])[1];
    webkitVersion = (userAgent.match(/webkit\/(.+?) /) || [])[1];
    browser.windows = browser.isWindows = !! /windows/.test(userAgent);
    browser.mac = browser.isMac = !! /macintosh/.test(userAgent) || (/mac os x/.test(userAgent) && !/like mac os x/.test(userAgent));
    browser.lion = browser.isLion = !! (/mac os x 10_7/.test(userAgent) && !/like mac os x 10_7/.test(userAgent));
    browser.iPhone = browser.isiPhone = !! /iphone/.test(userAgent);
    browser.iPod = browser.isiPod = !! /ipod/.test(userAgent);
    browser.iPad = browser.isiPad = !! /ipad/.test(userAgent);
    browser.iOS = browser.isiOS = browser.iPhone || browser.iPod || browser.iPad;
    browser.android = browser.isAndroid = !! /android/.test(userAgent);
    browser.opera = /opera/.test(userAgent) ? version : 0;
    browser.isOpera = !! browser.opera;
    browser.msie = /msie/.test(userAgent) && !browser.opera ? version : 0;
    browser.isIE = !! browser.msie;
    browser.isIE8OrLower = !! (browser.msie && parseInt(browser.msie, 10) <= 8);
    browser.mozilla = /mozilla/.test(userAgent) && !/(compatible|webkit|msie)/.test(userAgent) ? version : 0;
    browser.isMozilla = !! browser.mozilla;
    browser.webkit = /webkit/.test(userAgent) ? webkitVersion : 0;
    browser.isWebkit = !! browser.webkit;
    browser.chrome = /chrome/.test(userAgent) ? version : 0;
    browser.isChrome = !! browser.chrome;
    browser.mobileSafari = /apple.*mobile/.test(userAgent) && browser.iOS ? webkitVersion : 0;
    browser.isMobileSafari = !! browser.mobileSafari;
    browser.iPadSafari = browser.iPad && browser.isMobileSafari ? webkitVersion : 0;
    browser.isiPadSafari = !! browser.iPadSafari;
    browser.iPhoneSafari = browser.iPhone && browser.isMobileSafari ? webkitVersion : 0;
    browser.isiPhoneSafari = !! browser.iphoneSafari;
    browser.iPodSafari = browser.iPod && browser.isMobileSafari ? webkitVersion : 0;
    browser.isiPodSafari = !! browser.iPodSafari;
    browser.isiOSHomeScreen = browser.isMobileSafari && !/apple.*mobile.*safari/.test(userAgent);
    browser.safari = browser.webkit && !browser.chrome && !browser.iOS && !browser.android ? webkitVersion : 0;
    browser.isSafari = !! browser.safari;
    browser.language = language.split("-", 1)[0];
    browser.current = browser.msie ? "msie" : browser.mozilla ? "mozilla" : browser.chrome ? "chrome" : browser.safari ? "safari" : browser.opera ? "opera" : browser.mobileSafari ? "mobile-safari" : browser.android ? "android" : "unknown";
    return browser
};