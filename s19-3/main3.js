let choice = prompt("Nhập loại Cần chuyển đổi (VND --> USD hoặc USD --> VND):");
let change = 23000;
if (choice === "VND --> USD") {
    let vnd = prompt("Nhập số tiền VND:");
    let usd = vnd / change;

    if (usd % 1 === 0) {
        alert(vnd + " VND = " + usd + " USD");
    } else {
        alert(vnd + " VND = " + usd.toFixed(2) + " USD");
    }

} else if (choice === "USD --> VND") {
    let usd = prompt("Nhập số tiền USD:");
    let vnd = usd * change;
    alert(usd + " USD = " + vnd + " VND");
} else {
    alert("Lựa chọn không hợp lệ!");
}
