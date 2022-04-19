
     
    const email = document.querySelector("#email");
    const iconError = document.querySelector(".iconError");
    const iconSuccess = document.querySelector(".iconSuccess");
    const error = document.querySelector(".error-text");  
    const password = document.querySelector("#password");
    const iconError1 = document.querySelector(".iconError1");
    const iconSuccess1 = document.querySelector(".iconSuccess1");
    const error1 = document.querySelector(".error-text1");
    
    let regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    function check(){
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

      if (password.value=="") {       
            password.style.borderColor = "#e74c3c";
            password.style.background = "#fceae9";
            iconError1.style.display = "block";
            iconSuccess1.style.display = "none";
            error1.style.display = "block";   
      } 
    else{
        password.style.borderColor = "#27ae60";
        password.style.background = "#eafaf1";
        iconError1.style.display = "none";
        iconSuccess1.style.display = "none";
        error1.style.display = "none";
        
        
       
        }
    
    }
    function thongtin(){
        var hoTen=document.getElementById("email");
        if (hoTen.value==""){  
        alert("Bạn chưa nhập Email.") ;    
        hoTen.focus();
        return false;
        } 
    
    var mk=document.getElementById("password");
    if (mk.value==""){   
    alert("Bạn chưa nhập mk.") ;   
    mk.focus();
    return false;
    }

    alert("Đăng ký thành công! Xin chúc mừng.");
    return true; 
    }
    