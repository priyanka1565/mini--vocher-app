
let voucher = JSON.parse(localStorage.getItem("voucher"));
console.log(voucher)

let purchased_vouchers = document.getElementById("purchased_vouchers");

let img = document.createElement("img");

img.src = voucher.image;

   let n = document.createElement("h4");

    n.innerHTML = voucher.name;

    let p = document.createElement("h4");

    p.innerHTML = voucher.price;


purchased_vouchers.append(img,n,p)