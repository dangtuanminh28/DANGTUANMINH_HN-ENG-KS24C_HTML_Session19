let month = +prompt("Nhập số tháng mà bạn cần nhập:");
if (month < 13 && month > 0) {
    switch (month) {
        case 2:
            alert("Tháng 2 có 28 hoặc 29 ngày năm nhuận");
            break;
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            alert(`Tháng ${month} có 31 ngày`);
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            alert(`Tháng ${month} có 30 ngày`);
            break;
    }
} else {
    alert('Số tháng nhập không hợp lệ!');
}