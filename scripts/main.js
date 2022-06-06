

    var userarr = JSON.parse(localStorage.getItem("user")) || [];


    function submit(){

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let adrress = document.getElementById("address").value;
        let amt = document.getElementById("amount").value;
        var userCredential = {
            Name:name,
            Email:email,
            Adresss:adrress,
            Amt:amt,
        }
        userarr.push(userCredential);
        console.log(userarr)
        localStorage.setItem("user",JSON.stringify(userarr));
        window.location.href = "voucher.html";
        // same local storage data used in login page
    }




