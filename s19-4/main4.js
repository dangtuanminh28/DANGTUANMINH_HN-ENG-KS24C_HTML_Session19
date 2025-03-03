let number = prompt("Nhập một số bất kỳ:");
if (number % 3 === 0 && number % 5 === 0) {
    alert(`${number} chia hết cho cả 3 và 5`);
} else if (number % 3 === 0) {
    alert(`${number} không chia hết cho cả 3 và 5`);
}
