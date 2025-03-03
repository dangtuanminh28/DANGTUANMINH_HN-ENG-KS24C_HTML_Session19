let choice = prompt("Nhập loại chuyển đổi (VND --> USD hoặc USD --> VND):");
let exchangeRate = 23000; // Tỷ giá: 1 USD = 23,000 VND

if (choice === "VND --> USD") {
    let vnd = prompt("Nhập số tiền VND:");
    let usd = vnd / exchangeRate;

    if (usd % 1 === 0) {
        alert(vnd + " VND = " + usd + " USD");
    } else {
        alert(vnd + " VND = " + usd.toFixed(2) + " USD");
    }

} else if (choice === "USD --> VND") {
    let usd = prompt("Nhập số tiền USD:");
    let vnd = usd * exchangeRate;
    alert(usd + " USD = " + vnd + " VND");
} else {
    alert("Lựa chọn không hợp lệ!");
}
