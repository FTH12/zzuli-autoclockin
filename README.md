<h1><center>i轻工大自动打卡(安卓)</center></h1>



<h2>前言</h2>

​	因为多次睡到中午12点，没有及时打卡，让辅导员深深的记住了我的名字，利用所学知识简单写了写这个脚本。安卓和IOS都有。

<h1>声明</h1>

**本脚本仅为方便每日打卡以及学习交流使用，认真填写自己的正确信息，若填报不正确信息，出现任何问题概不负责；若不正确填写个人信息，请勿使用。**

-----




<h2>安卓版</h2>

基于Auto.js Pro，仅提供运行代码，定时功能由Auto.js自行设置，建议Auto.js和Tasker联合使用，因为Auto.js在后台生存能力很差。

### 环境

运行环境 Auto.js pro V8 （低版本应该有bug，应用付费，自行解决）

​				Tasker （免费的，自己找）

<h3>使用</h3>

将main.js文件添加到Auto.js中

<h4>设置参数</h4>

![image-20220526133754391](https://user-images.githubusercontent.com/102567741/170435947-4c13b0cd-2d93-4305-8eff-cfe780594b12.png)


这个参数需要进入https://msg.zzuli.edu.cn/xsc/week，从url中获取，如图遮挡处的code

![Inkedimage-20220526134006502](https://user-images.githubusercontent.com/102567741/170435978-05d8b96d-f708-4cc6-866b-9608862c5ff6.jpg)

这些带注释的参数自行设置

```json
    params = {
        "user_code": "542007010101",  //学号
        "user_name": "张三",  //姓名
        "id_card": "410104200020202020",   //身份证
        "date": time,
        "sex": "男", //性别
        "age": 21,  //年龄
        "org": "计算机与通信工程学院（电子信息工程学院）",  //学院
        "year": 2019,   //年级
        "spec": "计算机科学与技术",  //专业
        "class": "计算机科学与技术20-01",    //专业班级
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
```




<h4>自行设置Tasker和Auto.js</h4>

可参考[(60条消息) Tasker发送广播Intent控制Auto.js_辉辉辉、的博客-CSDN博客](https://blog.csdn.net/qq_45739934/article/details/124983337)

**运行**
![image-20220526142546475](https://user-images.githubusercontent.com/102567741/170435993-5c89f775-4fdd-4cbf-bcb8-ee159a27b9df.png)



