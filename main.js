/**
 * date:2022.05.26
 * Description:zzuli日报告打卡(居家版)
 */
 var time;  //打卡的日期
 var refer; //表单的填写URL
 var TOKEN; //【XSRF-TOKEN larasession】
 var XSRFTOKEN; //X-XSRF-TOKEN
 var cookie; //Cookie
 var params; //个人信息
 var options;   //请求头
 var myCode = ""; //个人参数

run();

//--------以下是功能函数---------//
//启动
function run(){
    init();
    console.log("打卡日期："+time);
    clockin();
}
//初始化
function init(){
    time = getTime();
    refer = "https://msg.zzuli.edu.cn/xsc/view?from=app&code="+myCode+"&date=" + time;
    //console.log(refer);
    TOKEN = getToken();
    if (TOKEN == null) {
        console.log("未获得TOKEN");
        exit();
    }
    sleep(1000);
    XSRFTOKEN = TOKEN[0].split("=")[1].replace(/%3D/g, '=');
    //console.log(XSRFTOKEN);
    cookie = TOKEN[0] + "; " + TOKEN[1];
    //console.log(cookie);
    params = {
        "user_code": "542007010101",  //学号
        "user_name": "张三",  //姓名
        "id_card": "410104200020202020",   //身份证
        "date": time,
        "sex": "男", //性别
        "age": 21,  //年龄
        "org": "计算机与通信工程学院（电子信息工程学院）",  //学院
        "year": 2019,   //年级
        "spec": "计算机科学与技术(移动软件)",  //专业
        "class": "移动软件19-04",    //专业班级
        "mobile": "12345678910",    //手机号
        "jt_mobile": "12345678910",   //手机号
        "province": "河南省",  //省
        "city": "郑州市",     //市
        "district": "中原区",  //区
        "address": "郑州轻工业大学",   //具体地址，小区名，或学校名
        "hjdz": "是",
        "out": "否",
        "out_address": "[{\"start_date\":\"\",\"end_date\":\"\",\"province\":\"\",\"city\":\"\",\"district\":\"\",\"area\":\"\",\"address\":\"\"}]",
        "hb": "否",
        "hn": "否",
        "lat": 34.810871,   //获取定位的纬度,自己搜
        "lon": 113.509422,  //获取定位时的经度，自己搜
        "gcj_lat": 34.810871,   //获取定位的纬度，自己搜
        "gcj_lon": 113.509422,  //获取定位时的经度，自己搜
        "jz_address": "河南省郑州市中原区郑州轻工业大学",  //定位的地址
        "jz_province": "河南省",   //省
        "jz_city": "郑州市",       //市
        "jz_district": "中原区",  //区
        "jz_sfyz": "是",
        "temp": "正常",
        "jrzz": "无",
        "stzk": "无",
        "jcbl": "否",
        "yqgl": "否",
        "yjs": 0,
        "other": "无",
        "jjymqk": "已完成接种",
        "hsjcqk": "更多次",
        "last_time": "2022-05-22",  //最后接种时间
        "fxdj": "低风险",    //地区风险等级
        "flgl": "正常",     //所在地区管理分类
        "jkmzt": "绿色",   //健康码颜色二
        "qz_yqbl": "否",  
        "wj_type": 0
    }
    options = {
        headers: {
            'Host': 'msg.zzuli.edu.cn',
            "Content-Type": "application/json;charset=UTF-8",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36 Edg/99.0.1150.46",
            'Connection': 'keep-alive',
            'Accept': 'application/json, text/plain, */*',
            "X-XSRF-TOKEN": XSRFTOKEN,
            "Origin": "https://msg.zzuli.edu.cn",
            "X-Requested-With": "io.cordova.zhqy",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Dest": "empty",
            "Referer": refer,
            "Accept-Encoding": "gzip, deflate",
            "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
            "Cookie": cookie
        }
    }
}
//打卡
function clockin() {
    var req = http.postJson("https://msg.zzuli.edu.cn/xsc/add", params, options);
    if (req.statusCode >= 200 && req.statusCode < 300) {
        console.log("打卡成功");
        console.log(req.body.json());
        exit();
    } else {
        console.log("请求失败：" + req.statusCode + "  ", +req.statusMessage);
        console.log(req.body.json());
    }
    exit();
}

//获得XSRF-TOKEN,laravel_session
function getToken() {
    var res = http.get(refer);
    if (res.statusCode >= 200 && res.statusCode < 300) {
        var sCookie = res.headers["Set-Cookie"];
        var strs = sCookie[0].split(";");
        var XSRF = strs[0];
        var strs = sCookie[1].split(";");
        var lara = strs[0];
        //console.log(lara);
        var TOKEN = [XSRF, lara];
        return TOKEN;
    } else {
        console.log("连接失败," + res.statusCode + res.statusMessage);
        return null;
    }
}

//获得打卡日期
function getTime() {
    var tDate = new Date()
    var rDate = tDate.getFullYear() + '-';
    var month = tDate.getMonth() + 1;
    var day = tDate.getDate();
    if (month < 10) {
        month = '0' + month.toString();
    }
    rDate = rDate + month + '-';
    if (day < 10) {
        day = '0' + day.toString();
    }
    rDate = rDate + day;
    console.log(rDate);
    return rDate;
}
