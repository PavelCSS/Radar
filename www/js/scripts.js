document.addEventListener('deviceready', onDeviceReady, false);
//window.addEventListener('load', onDeviceReady, false);
window.addEventListener('hashchange', openPage, false);
document.addEventListener('backbutton', goBack, false);

function onDeviceReady(){
    StatusBar.hide();
    $('html').addClass(device.platform.toLowerCase());
    //    FastClick.attach(document.body);
    navigator.splashscreen.hide();
    openPage();
}

$(document)
    .on('tap', '.back-btn', goBack);