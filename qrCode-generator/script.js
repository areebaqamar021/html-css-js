function generateQR() {
    var text = document.getElementById('text').value;
    if (!text) {
        alert('Please enter text or URL');
        return;
    }
    
    var qrCodeDiv = document.getElementById('qrcode');
    qrCodeDiv.innerHTML = '';
    
    var qr = qrcode(0, 'M');
    qr.addData(text);
    qr.make();
    var qrImage = qr.createImgTag(7); // Increase size to 7
    qrCodeDiv.innerHTML = qrImage;
}
