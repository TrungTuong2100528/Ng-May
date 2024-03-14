 // ----------------Giỏ hàng-------------

const btn = document.querySelectorAll(".item button")
//console.log(btn)
btn.forEach(function(button,index){ 
    // lấy thông tin
    button.addEventListener("click",function(event){
        {
            var btnItem = event.target 
            var product = btnItem.parentElement
            var productImg = product.querySelector("img").src // lấy link ảnh
            var productName = product.querySelector(".item .name").innerText // lấy tên
            var productPricce = product.querySelector(".item .price").innerText
            //console.log(productPricce,productImg,productName)
            // để vào cart
            addcart(productPricce,productImg,productName)
        }
        })
    
})
 function addcart(productPricce,productImg,productName){
    var addtr = document.createElement("tr")
    //thông báo k đc trùng{
    var cartItem = document.querySelectorAll("tbody tr")
    for(var i = 0; i<cartItem.length; i++){
        var productT= document.querySelectorAll(".title")
        
            if(productT[i].innerHTML == productName){
                alert("Sản phẩm của bạn đã có trong giỏ hàng")
                return
            }
        
    }
    //}
    var trcontent = '<tr> <td style="display: flex; align-items: center;"><img style="width:70px" src="'+productImg+'" alt=""><span class ="title">'+productName+'</span></td> <td><p><span class = "prices">'+productPricce+' </span><sup>VNĐ</sup></p></td><td><input style="width: 30px;outline: none;" type = "number" value="1" min="1"></td><td style="cursor: pointer;"><span class ="delete-cart">Xóa</span></td></tr>'
    addtr.innerHTML = trcontent
    var cartTable = document.querySelector("tbody")
    //console.log(cartTable)
    cartTable.append(addtr)



    carttotal()

    deleteCart()
 }


//-----------------Toalprice: tổng giá ------------------//
function carttotal(){
    var cartItem = document.querySelectorAll("tbody tr")
    //console.log(cartItem.length)
    var totalC = 0
    for(var i = 0; i<cartItem.length; i++){
        var inputValue = cartItem[i].querySelector("input").value
        //console.log(inputValue)
        var productPrice = cartItem[i].querySelector(".prices").innerHTML
        //console.log(productPrice)
        var totalA = 0
        var newsProductPrice = productPrice.split('.').join('')
    
        
       //console.log(newsProductPrice)
       newsProductPrice = newsProductPrice.replace("VNĐ", "").replace(",", ""); // chữ vnđ và ,
        totalA = newsProductPrice *inputValue//*1000 sẻ them 3 sô 0 phía sau giá tiền
       // var totalB = totalA.toLocaleString('de-DE') // hiện dấu chấm giá tiền
       // console.log(totalB)
        
        totalC = totalC + totalA
       // console.log(totalC)
       //var totalD = totalC.toLocaleString('de-DE')
    }
    var cartTotalA = document.querySelector('.price-total span')
    var cartPrice = document.querySelector(".GioHang span")
    cartTotalA.innerHTML = totalC.toLocaleString('de-DE')
    cartPrice.innerHTML = totalC.toLocaleString('de-DE')
    //console.log(cartTotalA)

    inputchange()
}


//-----------------Delete cart ------------------//

function deleteCart(){
    var cartItem = document.querySelectorAll("tbody tr")
    for(var i = 0; i<cartItem.length; i++){
        
        var productT= document.querySelectorAll(".delete-cart")
        productT[i].addEventListener("click", function(event){
            var cartDelete = event.target
            var cartItemR = cartDelete.parentElement.parentElement
            cartItemR.remove()
            carttotal()
        })
        
    }
}
// số lượng
function inputchange(){
    var cartItem = document.querySelectorAll("tbody tr")
    for(var i = 0; i<cartItem.length; i++){
        var inputValue= cartItem[i].querySelector("input")
        inputValue.addEventListener("change", function(){
            carttotal()
        })
        
    }
}

// hiện và tắt cart

const cartbtn = document.querySelector(".cartX")
cartbtn.addEventListener("click", function(){
    
    document.querySelector(".cart").style.right = "-100%"
})
const cartshow = document.querySelector(".GioHang")
cartshow.addEventListener("click", function(){
    document.querySelector(".cart").style.right = "0"
})

