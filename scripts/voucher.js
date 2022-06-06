

async function getVoucher(){
    let url = `https://masai-vouchers-api.herokuapp.com/api/vouchers`

    let res = await fetch(url);

    let data  = await res.json();

    let a = data[0].vouchers;
    appendData(a)
    
    console.log(a)
 
}

getVoucher()



function appendData(a){
   a.forEach(function(el){

    let main_div = document.getElementById("voucher_list");

    let div = document.createElement("div");

    main_div.appendChild(div);

    let img = document.createElement("img");

    img.src = el.image;

    let n = document.createElement("h4");

    n.innerHTML = el.name;

    let p = document.createElement("h4");

    p.innerHTML = el.price;

    let btn = document.createElement("button");

    btn.innerHTML = "click";

    btn.addEventListener("click",function(){
        purcahse(el);
    })


    div.append(img,n,p,btn)

   })
}


function purcahse(el){
   let voucher = localStorage.setItem("voucher",JSON.stringify(el));
   console.log(voucher)
   window.location.href = "purchase.html"
}


// image: "https://img4.nbstatic.in/tr:w-350/622a6aa86f487a000c2bf442.jpg"
// name: "Buffets"
// price: 299