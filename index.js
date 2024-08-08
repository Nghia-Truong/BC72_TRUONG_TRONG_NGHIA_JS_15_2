function domID(iD) {
    return document.getElementById(iD)
}

// BT 1
document.getElementById('kqBt1').onclick = function () {
    var diemChuan = domID('diemChuan').value
    var khuVuc = domID('khuVuc').value
    var diemKhuVuc = { 'A': 2, 'B': 1, 'C': 0.5, 'X': 0 }
    var doiTuong = domID('doiTuong').value
    var diemDoiTuong = { '1': 2.5, '2': 1.5, '3': 1, '0': 0 };
    var diemM2 = Number(domID('diemM2').value)
    var diemM3 = Number(domID('diemM3').value)
    var diemM1 = Number(domID('diemM1').value)

    var diemTong = diemM1 + diemM2 + diemM3 + (diemKhuVuc[khuVuc] || 0) + (diemDoiTuong[doiTuong.toString()] || 0)


    if (diemTong >= diemChuan) {
        domID('outputBT1').innerHTML = 'Bạn đã đậu. Tổng điểm: ' + diemTong
    } else {
        domID('outputBT1').innerHTML = 'Bạn đã rớt. Tổng điểm: ' + diemTong
    }
}

// BT 2
document.getElementById('tinhTienDien').onclick = function () {
    var hoTenBt2 = domID('hoTenBt2').value
    var nhapKW = domID('nhapKW').value
    var tienDien = 0;
    if (nhapKW <= 50) {
        tienDien = nhapKW * 500
    } else if (nhapKW <= 100) {
        tienDien = 50 * 500 + (nhapKW - 50) * 650
    } else if (nhapKW <= 200) {
        tienDien = 50 * 500 + 50 * 650 + (nhapKW - 100) * 850
    } else if (nhapKW <= 350) {
        tienDien = 50 * 500 + 50 * 650 + 100 * 850 + (nhapKW - 200) * 1100
    } else {
        tienDien = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (nhapKW - 350) * 1300
    }
    domID('outputBT2').innerHTML = 'Họ Tên: ' + hoTenBt2 + ' ; Tiền Điện:' + tienDien.toLocaleString() + 'VND'
}

// BT 3
document.getElementById('tinhTienThue').onclick = function () {
    var hoTenBt3 = domID('hoTenBt3').value
    var nhapThuNhap = domID('nhapThuNhap').value
    var soNguoi = domID('soNguoi').value
    var giamTruPhuThuoc = 1.6 * soNguoi
    var thuNhapChiuThue = nhapThuNhap - 4 - giamTruPhuThuoc
    var thuePhaiTra = 0
    if (thuNhapChiuThue <= 60) {
        thuePhaiTra = thuNhapChiuThue * 0.05;
    } else if (thuNhapChiuThue <= 120) {
        thuePhaiTra = 60 * 0.05 + (thuNhapChiuThue - 60) * 0.1;
    } else if (thuNhapChiuThue <= 210) {
        thuePhaiTra = 60 * 0.05 + 60 * 0.1 + (thuNhapChiuThue - 120) * 0.15;
    } else if (thuNhapChiuThue <= 384) {
        thuePhaiTra = 60 * 0.05 + 60 * 0.1 + 90 * 0.15 + (thuNhapChiuThue - 210) * 0.2;
    } else if (thuNhapChiuThue <= 624) {
        thuePhaiTra = 60 * 0.05 + 60 * 0.1 + 90 * 0.15 + 174 * 0.2 + (thuNhapChiuThue - 384) * 0.25;
    } else if (thuNhapChiuThue <= 960) {
        thuePhaiTra = 60 * 0.05 + 60 * 0.1 + 90 * 0.15 + 174 * 0.2 + 240 * 0.25 + (thuNhapChiuThue - 624) * 0.3;
    } else {
        thuePhaiTra = 60 * 0.05 + 60 * 0.1 + 90 * 0.15 + 174 * 0.2 + 240 * 0.25 + 336 * 0.3 + (thuNhapChiuThue - 960) * 0.35;
    }
    domID('outputBT3').innerHTML = 'Họ Tên: ' + hoTenBt3 + ' ; Tiền Thuế:' + thuePhaiTra.toLocaleString() + 'Triệu VND'
}

// BT4


domID('loaiKhachHang').onchange = function () {
    var loaiKhachHang = domID('loaiKhachHang').value
    var loaiDoanhNghiep = domID('loaiDoanhNghiep')
    if (loaiKhachHang === 'doanhNghiep') {
        loaiDoanhNghiep.style.display = 'block'
    } else {
        loaiDoanhNghiep.style.display = 'none'
    }
}

domID('tinhBill').onclick = function () {
    var loaiKhachHang = domID('loaiKhachHang').value
    var soKenh = parseInt(domID('soKenh').value)
    var tongBill = 0

    if (loaiKhachHang === 'nhaDan') {
        tongBill = 4.5 + 20.5 + (7.5 * soKenh)
    } else {
        var soKN = parseInt(domID('soKN').value)
        tongBill = 15 + 75 + (soKN > 10 ? (soKN - 10) * 5 : 0) + (50 * soKenh)
    }
    var maKhachHang = domID('maKhachHang').value
    domID('outputBT4').innerHTML = 'Mã khách hàng: ' + maKhachHang + '  Tổng tiền cáp: $' + tongBill.toFixed(2)
}