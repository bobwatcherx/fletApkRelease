document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    // YOU URL WEB
    url  = "http://fletjoker.surge.sh/"
    showurl(url)


    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}

function showurl(url){
    // NOW YOU MUST INSTALL inappbrowser cordova
    var ref = cordova.InAppBrowser.open(url,"_self","location=no,zoom=no,hardwareback=no");
    return;
}