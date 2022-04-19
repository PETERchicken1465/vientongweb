const hoten = document.querySelector("#hoten");

const diachi = document.querySelector("#diachi");

const tel= document.querySelector("#tel"); 
const iconError_tel = document.querySelector(".iconError_tel");
const iconSuccess_tel = document.querySelector(".iconSuccess_tel");
const error_tel = document.querySelector(".error-text_tel");

const email = document.querySelector("#email");
const iconError = document.querySelector(".iconError");
const iconSuccess = document.querySelector(".iconSuccess");
const error = document.querySelector(".error-text");

const dn = document.querySelector("#dn");
const iconError_dn = document.querySelector(".iconError_dn");
const iconSuccess_dn = document.querySelector(".iconSuccess_dn");

const password1 = document.querySelector("#password1");
const iconError_p1 = document.querySelector(".iconError_p1");
const iconSuccess_p1 = document.querySelector(".iconSuccess_p1");
const error_p1 = document.querySelector(".error-text_p1");

const password2 = document.querySelector("#password2");
const iconError_p2 = document.querySelector(".iconError_p2");
const iconSuccess_p2 = document.querySelector(".iconSuccess_p2");
const error_p2 = document.querySelector(".error-text_p2");
var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/;
let regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
function check(){

  // hoten

  if (hoten.value !="")
  {
    hoten.style.borderColor = "#27ae60";
    hoten.style.background = "#eafaf1";   }
else{
    hoten.style.borderColor = "#e74c3c";
    hoten.style.background = "#fceae9";
 
  }
   
// dia chi


  if (diachi.value !="")
  {
    diachi.style.borderColor = "#27ae60";
    diachi.style.background = "#eafaf1";   }
else{
    diachi.style.borderColor = "#e74c3c";
    diachi.style.background = "#fceae9";
 
  }

// SĐT

if(tel.value.match(vnf_regex)){
    tel.style.borderColor = "#27ae60";
    tel.style.background = "#eafaf1";  
    iconError_tel.style.display = "none";
    iconSuccess_tel.style.display = "block";
    error_tel.style.display = "none"; 

}
else{
  tel.style.borderColor = "#e74c3c";
  tel.style.background = "#fceae9";
  iconError_tel.style.display = "block";
    iconSuccess_tel.style.display = "none";
    error_tel.style.display = "block";

  }   
  
// email




  if(email.value.match(regExp)){
    email.style.borderColor = "#27ae60";
    email.style.background = "#eafaf1";
    iconError.style.display = "none";
    iconSuccess.style.display = "block";
    error.style.display = "none";
  
   
        
  }else{
    email.style.borderColor = "#e74c3c";
    email.style.background = "#fceae9";
    iconError.style.display = "block";
    iconSuccess.style.display = "none";
    error.style.display = "block";       
    }      


    // ten dang nhap

    if (dn.value !="")
  {
    dn.style.borderColor = "#27ae60";
    dn.style.background = "#eafaf1";  
    iconError_dn.style.display = "none";
    iconSuccess_dn.style.display = "block";
  }

else{
    dn.style.borderColor = "#e74c3c";
    dn.style.background = "#fceae9";
    iconError_dn.style.display = "block";
    iconSuccess_dn.style.display = "none";
  }





  // pas1

  if (password1.value !="")
  {
    password1.style.borderColor = "#27ae60";
    password1.style.background = "#eafaf1";  
    iconError_p1.style.display = "none";    
    error_p1.style.display = "none"; 
  }

else{
    password1.style.borderColor = "#e74c3c";
    password1.style.background = "#fceae9";
    iconError_p1.style.display = "block";
    iconSuccess_p1.style.display = "none";
    error_p1.style.display = "block"; 
    
 
  }




// pass2

  if (password2.value !="")
  {
    password2.style.borderColor = "#27ae60";
    password2.style.background = "#eafaf1";  
    iconError_p2.style.display = "none";    
    error_p2.style.display = "none"; 
  }

else{
    password2.style.borderColor = "#e74c3c";
    password2.style.background = "#fceae9";
    iconError_p2.style.display = "block";
    iconSuccess_p2.style.display = "none";
    error_p2.style.display = "block";    
 
  }
 
}
function thongtin(){
  var hoTen=document.getElementById("hoten");
  if (hoTen.value==""){  
  alert("Bạn chưa nhập họ và tên.") ;    
  hoTen.focus();
  return false;
  } 
  var gt=document.getElementById("GioiTinh");
  var gt1=document.getElementById("GioiTinh1");
  if ((gt.checked==true)&&(gt1.checked==true)){  
  alert("Bạn chưa chọn giới tính.") ;    
  gt.focus();
  return false;
  } 
  var ns=document.getElementById("day");
  if (ns.value =="00"){   
  alert("Bạn chưa chọn ngày sinh.") ;    
  ns.focus();
  return false;
  } 
  var ns1=document.getElementById("month");
  if (ns1.value=="00"){  
  alert("Bạn chưa chọn tháng sinh.") ;    
  ns1.focus();
  return false;
  } 
  var ns2=document.getElementById("year");
  if (ns2.value =="00"){  
  alert("Bạn chưa chọn năm sinh.") ;    
  ns2.focus();
  return false;
  }  
 
  var dc=document.getElementById("diachi");
  if (dc.value==""){   
  alert("Bạn chưa nhập địa chỉ.") ;   
  dc.focus();
  return false;
  }
  var sdt=document.getElementById("tel");
  if (sdt.value==""){  
  alert("Bạn chưa nhập số điện thoại.") ;    
  sdt.focus();
  return false;
  } 
  var dn=document.getElementById("dn");
  if (dn.value==""){  
  alert("Bạn chưa nhập tên đăng nhập.") ;    
  dn.focus();
  return false;
  }
  var p1=document.getElementById("password1");
  if (p1.value==""){  
  alert("Bạn chưa nhập mật khẩu") ;    
   p1.focus();
  return false;
  }
  var p2=document.getElementById("password2");
  if (p2.value==""){  
  alert("Bạn chưa nhập lại mật khẩu.") ;    
   p2.focus();
  return false;
  }
  if(p1.value != p2.value){
  alert("Bạn nhập chưa đúng mật khẩu.") ;    
  p2.focus();
  return false;
  }


alert("Đăng ký thành công! Xin chúc mừng.");
return true; 
}