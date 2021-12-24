
function dongHo(){
    let gio = document.getElementById('gio');
    let phut = document.getElementById('phut');
    let giay = document.getElementById('giay');

    let gioHienTai = new Date().getHours();
    let phutHienTai = new Date().getMinutes();
    let giayHienTai = new Date().getSeconds();

    gio.innerHTML = gioHienTai;
    phut.innerHTML = phutHienTai;
    giay.innerHTML = giayHienTai;
}

let chayDongHo = setInterval(dongHo, 1000);