// This js file aim to solve all events on the Reg.html only

// get the buttons on the reg.html
// VARIABLES
const doms = {
    btnReg: document.querySelector("button.submit.register"),
    account: document.getElementById("txtLoginId"),
    nickName: document.getElementById("txtNickname"),
    pwd1: document.getElementById("txtLoginPwd"),
    pwd2: document.getElementById("txtLoginPwdConfirm"),
    pwd2Error: document.querySelector("#txtLoginPwdConfirm+.err"),
}

// if on the register page and the submit button exists:
// EVENTS:
if (doms.btnReg) {
    doms.btnReg.addEventListener('click', (e) => {
        e.preventDefault();
        const account = doms.account.value;
        const nickName = doms.nickName.value;
        const password = getPWD();
        const userInfo = {
            loginId: account,
            nickname: nickName,
            loginPwd: password,
        }
        // window.alert(JSON.stringify(userInfo));
        register(userInfo);
    }
    )
}

// METHODS:
// check if the passwords are matched, if not, will disabled the 
// submit button and raise error on the reg page
const getPWD = () => {

    const pwd1 = doms.pwd1.value;
    const pwd2 = doms.pwd2.value;
    if (pwd1 !== pwd2) {
        doms.pwd2Error.textContent = "密码不一致";
        // doms.btnReg.style.disabled = "disabled";  // not working because it is not belongs to style
        doms.btnReg.disabled = true;
        doms.btnReg.classList.add("disabled");
    }
    else {
        doms.pwd2Error.textContent = "";
        doms.btnReg.disabled = false;
        doms.btnReg.classList.remove("disabled");
    }
    return pwd1;

    // TODO: should Clear Timeout for this, otherwise
    //       1. dataleak
    //       2. 防抖的效果不是很好。
}

// Events 
// input on the second pwd input box:
doms.pwd2.oninput = () => {
    getPWD();
}
