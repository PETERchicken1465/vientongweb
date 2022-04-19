
function KiemTraThongTin(){       
    var email=window.document.dangnhap.txtEmail;
    re=/\w+@\w+\.\w+/;
    if (email.value==""){
    alert("Bạn chưa nhập Email.") ;
    const newLocal = email.focus();
    return false;
    }
    else
    if(re.test(email.value)==false){
    alert("Email không đúng định dạng!");
    email.focus();
    return false;
    }
    var pass=document.getElementById("pass");
    if (pass.value==""){
    alert("Vui lòng nhập mật khẩu.");
    pass.focus();
    return false;
    }  
    alert("Đăng nhập thành công! Xin chúc mừng.");   

    return true;
    
   }
