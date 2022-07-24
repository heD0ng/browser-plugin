chrome.tabs.getSelected(null, function (tab) {
    // $('#code').qrcode(tab.url);
    const container = document.getElementById('code');
    new QRCode(container, {
        text: tab.url,
        width: 280,
        height: 280,
        colorDark : "#000000",
        colorLight : "#ffffff",
    });
});

