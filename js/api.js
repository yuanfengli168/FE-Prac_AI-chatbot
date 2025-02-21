/**
 * 以下全部代码都是自己写的，练习用：
 * - 可以看看和老师代码之间的差距
 */
const urlBase = "https://study.duyiedu.com";
const apiDoms = {
    btnReg: document.querySelector("button.submit.register"),
    account: document.getElementById("txtLoginId"),
    nickName: document.getElementById("txtNickname"),
    pwd1: document.getElementById("txtLoginPwd"),
    pwd2: document.getElementById("txtLoginPwdConfirm"),
    pwd2Error: document.querySelector("#txtLoginPwdConfirm+.err"),
}


/**
 * if success and the user exists, then alert success info and then redirect page to the index.html
 * if not success then stay in the reg.html, and alert what is wrong
 * @param {object} userInfo {
                                "loginId": "string",
                                "nickname": "string",
                                "loginPwd": "string"
                            }
 */
async function register(userInfo) {
    // see if the userInfo is not enough

    // Will not work:
    // console.log(userInfo);
    // if (!userInfo || Object.keys(userInfo).length === 0) {
    //     // throw new Error("User Info is empty");
    //     window.alert("User info is empty! please write down your informations!")
    // }
    // window.alert(userInfo);

    // we assume the userInfo is good to use: 
    // using fetch to connect with backend api
    console.log("Reg used!!!");


    const response = await fetch(urlBase + '/api/user/reg', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo),
    })
    const body = await response.json();

    // follow up actions: 
    const responseCode = body.code;
    if (responseCode === 400) {
        window.alert(body.msg);
    }
    if (responseCode === 0) {
        window.alert(`注册成功！请前往登录页面！你的账号是： ${body.data.loginId}`);
        window.location.href = './login.html';
        // apiDoms.account.value = body.data.loginId;  //TODO: not working for some reason.
    }

}

function login(loginInfo) {

}

function exists(loginId) {

}


function profile() {

}

function sendChat(content) {

}

function getHistory() {

}