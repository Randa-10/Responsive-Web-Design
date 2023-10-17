var but2 = document.getElementById("vvv2");
but2.addEventListener("click", function () {
    document.getElementById("head").innerHTML = "Track your package";
    document.getElementById("para").innerHTML =
    "If your tracking information shows that your package was delivered, but you haven't yet received it, wait until the end of the day. Some couriers may deliver until 10pm."
    document.getElementById("head2").innerHTML = "Find a missing package that shows As delivered";
    document.getElementById("para2").innerHTML =
        "If your tracking information shows that your package was delivered, but you haven't yet received it, wait until the end of the day. Some couriers may deliver until 10pm."
    document.getElementById("head3").innerHTML = "Undeliverable Packages";
    document.getElementById("para3").innerHTML =
        " You can find tracking information in your order details. If an order includes multiple items, each may have separate delivery dates and tracking."
    document.getElementById("div4").style.display = "none";
    document.getElementById("div5").style.display = "none";
    document.getElementById("div6").style.display = "none";
    document.getElementById("div7").style.display = "none";
    document.getElementById("div8").style.display = "none"
    document.getElementById("last").style.display = "inline"
    document.getElementById("last2").style.display = "none"
    document.getElementById("last3").style.display = "none"

})
var but3 = document.getElementById("vvv3");
but3.addEventListener("click", function () {
    document.getElementById("head").innerHTML = "Track your package";
    document.getElementById("para").innerHTML =
        "You can find tracking information in your order details. If an order includes multiple items, each may have separate delivery dates and tracking."
    document.getElementById("head2").innerHTML = "Find a missing package that shows As delivered";
    document.getElementById("para2").innerHTML =
    "You can find tracking information in your order details. If an order includes multiple items, each may have separate delivery dates and tracking."
    document.getElementById("head3").innerHTML = "Undeliverable Packages";
    document.getElementById("para3").innerHTML =
    "You can find tracking information in your order details. If an order includes multiple items, each may have separate delivery dates and tracking." 
       document.getElementById("div4").style.display = "block";
    document.getElementById("div5").style.display = "block";
    document.getElementById("div6").style.display = "block";
    document.getElementById("div7").style.display = "block";
    document.getElementById("div8").style.visibility = "visible"
    document.getElementById("last").style.display = "none"
    document.getElementById("last2").style.display = "inline"
    document.getElementById("last3").style.display = "none"


})
var but4 = document.getElementById("vvv4");
but4.addEventListener("click", function () {
    document.getElementById("head").innerHTML = "Track your package";
    document.getElementById("para").innerHTML =
    "If your tracking information shows that your package was delivered, but you haven't yet received it, wait until the end of the day. Some couriers may deliver until 10pm."
    document.getElementById("head2").innerHTML = "Find a missing package that shows As delivered";
    document.getElementById("para2").innerHTML =
        "If your tracking information shows that your package was delivered, but you haven't yet received it, wait until the end of the day. Some couriers may deliver until 10pm."
    document.getElementById("head3").innerHTML = "Undeliverable Packages";
    document.getElementById("para3").innerHTML =
        " Occasionally, packages are returned to us as undeliverable. Occasionally, packages are returned to us as undeliverable."
    document.getElementById("div4").style.display = "block";
    document.getElementById("div5").style.display = "block";
    document.getElementById("div6").style.display = "none";
    document.getElementById("div7").style.display = "none";
    document.getElementById("div8").style.visibility = "visible"
    document.getElementById("last").style.display = "none"
    document.getElementById("last3").style.display = "inline"
    document.getElementById("last2").style.display = "none"
})
var but5 = document.getElementById("vvv5");
but5.addEventListener("click", function () {
    document.getElementById("head").innerHTML = "Placing orders";
    document.getElementById("para").innerHTML =         "Marketplace sellers are independent sellers who offer a variety of products and goods.."

    document.getElementById("head2").innerHTML = "Ordering From Marketplace Sellers";
    document.getElementById("para2").innerHTML =
        "Marketplace sellers are independent sellers who offer a variety of products and goods.."
    document.getElementById("div3").style.display = "none";
    document.getElementById("div4").style.display = "none";
    document.getElementById("div5").style.display = "none";
    document.getElementById("div6").style.display = "none";
    document.getElementById("div7").style.display = "none";
    document.getElementById("div8").style.visibility = "hidden"
    document.getElementById("last").style.display = "none"
    document.getElementById("last3").style.display = "none"
    document.getElementById("last2").style.display = "none"
})
// 

var but9 = document.getElementById("vvv9");
but9.addEventListener("click", function () {
    document.getElementById("head").innerHTML = "Kindle Content Help";
    document.getElementById("para").innerHTML = "  Get help with Kindle content features and services."
    document.getElementById("head2").innerHTML = "Kindle E-Reader Help.";
    document.getElementById("para2").innerHTML = "Get help setting up and troubleshooting common issues with your Kindle E-reader"
    document.getElementById("div3").style.display = "block";
 document.getElementById("head3").innerHTML = "All Devices & Digital Services Help"
    document.getElementById("para3").innerHTML = "."
    document.getElementById("div4").style.display = "none";
    
    // document.getElementById("head4").innerHTML = "Ordering"
    // document.getElementById("para4").innerHTML = "."
    document.getElementById("div5").style.display = "none";
    // document.getElementById("head5").innerHTML = "Gift Cards"
    // document.getElementById("para6").innerHTML = "."
    document.getElementById("div6").style.display = "none";
    document.getElementById("div7").style.display = "none";
    document.getElementById("div8").style.display = "none"
    document.getElementById("last").style.display = "none"
    document.getElementById("last2").style.display = "none"
    document.getElementById("last3").style.display = "none"

})



// end of js help page

function updateCartCount() {
    var cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    var cartCountElement = document.querySelector(".cart_num");
    
    cartCountElement.textContent = cartItems.length;
  }

  window.addEventListener("load", function () {
    updateCartCount();
  });