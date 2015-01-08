document.addEventListener('deviceready', onDeviceReady, false);
//window.addEventListener('load', onDeviceReady, false);
window.addEventListener('hashchange', openPage, false);
document.addEventListener('backbutton', goBack, false);

function onDeviceReady(){
    openPage();
    $('html').addClass(device.platform.toLowerCase());
    //    FastClick.attach(document.body);
    navigator.splashscreen.hide();
}

$(document)
    .on('singleTap', '.back-btn', goBack);
