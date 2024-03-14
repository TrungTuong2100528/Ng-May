//lấy các phần tử đầu tiên gán vào các biến đã tạo
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const comment = document.querySelector('#list-comment') 
const commentItem = document.querySelector('#list-comment .item') // muốn lấy tất cả phần tử con thì dùng querySelectorAll
// khởi tạo biến translate với giá trị là 0
var translateY = 0
var count = commentItem.length // lấy đồ dài commentItem gán vào count
//next qua phải
next.addEventListener('click', function(event){
   //để ngăn chặn hành vi mặc định của sự kiện click,
   // trong trường hợp này là chuyển hướng tới một trang mới 
    event.preventDefault() 
    
    if(count ==1){
        // tức là chỉ có một bình luận, thì thoát khỏi hàm với return false;
    //. Điều này có thể là để xử lý trường hợp không cần phải làm gì nếu chỉ có một bình luận.
        return false;
    }
    translateY += -500 //di chuyển lên trên mỗi lần click). Điều này cho phép cuộn bình luận lên trên khi click vào nút next.
    comment.style.transform = `translateY(${translateY}px)` //Đặt thuộc tính transform của phần tử comment thành translateY(${translateY}px)
    //, làm cuộn nội dung bình luận lên trên.
    count-- //Giảm giá trị của count đi một đơn vị để theo dõi số lượng bình luận đã được hiển thị.
})
//next qua trái
prev.addEventListener('click', function(event){
     event.preventDefault() 
     if(count ==3){
         return false;
     }
     translateY += 500
     comment.style.transform = `translateY(${translateY}px)` 
     count++
 })




 let currentLink = null;

 document.querySelectorAll('a').forEach(link => {
     link.addEventListener('click', function(event) {
         if (currentLink !== null) {
             currentLink.style.color = ''; // Reset màu của liên kết trước đó
         }
         this.style.color = 'red'; // Thay đổi màu của liên kết được nhấp vào
         currentLink = this; // Lưu trữ liên kết hiện tại
     });
 });