const passFieldBorderColor = (para) =>{
    let obj = document.querySelector(".login-modal-input-password-field");
    if(para)
        obj.style.borderBottom = "1px solid #2874f0";
    else
        obj.style.borderBottom = "1px solid #cccccc";
}

const toggleLoginModal = (para) => {
    let obj = document.getElementById("login_modal");
    if(para)
        obj.style.display = "block";
    else
        obj.style.display = "none";
}

const hide = (cls) =>{
    let obj = document.querySelector(cls);
    obj.style.display = "none";
}

const show = (cls) =>{
    let obj = document.querySelector(cls);
    obj.style.display = "block";
}

const toogleLoginForm = (para) => {
    event.preventDefault();
    if(para){
        hide(".login-modal-create-account");
        hide(".login-modal-existing-user");
        hide(".login-modal-password");
        show(".login-modal-new-user")
    }
    else{
        hide(".login-modal-new-user")
        show(".login-modal-create-account");
        show(".login-modal-existing-user");
        show(".login-modal-password");
    }
}