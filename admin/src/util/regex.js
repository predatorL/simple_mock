export default {
    // 邮箱正则表达式
    emailReg: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
    // 密码正则表达式，登录密码：8~16位
    pwdReg: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d\S]{8,16}$/,
    // 资金密码正则表达式，字母和特殊字符組成，其中必須包含數字和字母 8~16位
    tradePwdReg: /^(?=.*[a-zA-Z])(?=.*[0-9])[0-9A-Za-z\+\-\@\_\=\*\$]{8,16}$/,
    // 国内手机号
    phoneReg: /^1[3|4|5|7|8]\d{9}$/,
    // 数字
    numberReg: /^\d+$/,
    // 汉字
    replaceHZReg: /^[\u4E00-\u9FA5]+$/ig,
    // 字母
    replaceZMReg: /^[A-Za-z]+$/,
    // 非数字
    replaceNaNReg: /[^0-9]/ig,
}
