let result = "javascript" + 5;  // Kết quả: "javascript5" (Nối chuỗi với số)
let result = "javascript" - 1;  // Kết quả: NaN (Chuỗi trừ số không hợp lệ)
let result = "3" + 2;           // Kết quả: "32" (Chuỗi + số → nối chuỗi)
let result = "5" - 4;           // Kết quả: 1 (Chuỗi số tự động chuyển thành số)
let result = isNaN("123");      // Kết quả: false ("123" là số hợp lệ)
let result = isNaN("hello");    // Kết quả: true ("hello" không phải số)
let result = Number.isNaN("123"); // Kết quả: false (Không phải NaN)
let result = Number.isNaN(NaN);   // Kết quả: true (NaN là NaN)
