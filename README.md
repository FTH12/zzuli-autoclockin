<h1><center>i轻工大自动打卡(安卓)</center></h1>



<h2>前言</h2>

​	因为多次睡到中午12点，没有及时打卡，让辅导员深深的记住了我的名字。

​	本来基于Python开发，但是因为电脑一直不关机也不现实，云服务器也不是每个人都会操作，所以选择了人人都会用的手机开发，安卓端利用Auto.js，IOS端利用系统自带的快捷指令。

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
![image-20220526133754391](https://user-images.githubusercontent.com/102567741/170440729-71b98774-cc4a-41a4-a828-144d931e6d35.png)

这个参数需要进入https://msg.zzuli.edu.cn/xsc/week，从url中获取，如图遮挡处的code
![Inkedimage-20220526134006502](https://user-images.githubusercontent.com/102567741/170440377-1a3ead71-7275-4a49-b6a8-f680a860f797.jpg)

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
```




<h4>自行设置Tasker和Auto.js</h4>

可参考[(60条消息) Tasker发送广播Intent控制Auto.js_辉辉辉、的博客-CSDN博客](https://blog.csdn.net/qq_45739934/article/details/124983337)

**运行**
![image-20220526142546475](https://user-images.githubusercontent.com/102567741/170440408-21186ff6-3a60-41bf-a477-6829721f95d0.png)



<h2>ios版</h2>

ios基于是利用系统自带的快捷指令实现的，只需要将个人日报告信息**正确的填入**到**指定位置**即可，具体如何填，看安卓版的注释。

<h3>下载打卡的快捷指令</h3>

<h5>第一个快捷指令(获取Token)：</h5>

用ios设备打开https://www.icloud.com/shortcuts/e57e1f5d74064ca5ae006527d7624223

![image-20220526151308974](https://user-images.githubusercontent.com/102567741/170440474-745f4458-c426-4fe9-a4a8-7a87c1cc57cc.png)

将code填入其中。

下载第二个快捷指令(ClockinHome):[快捷指令 (icloud.com)](https://www.icloud.com/shortcuts/d05a322e1b494c5883d685de1fa1cc93)

![image-20220526152002433](https://user-images.githubusercontent.com/102567741/170440520-4b84d0e6-6fec-4c73-a7e6-941dcaa8e2ce.png)

根据自己的健康日报信息更改信息

<h3>设置自动运行</h3>

进入自动化页面，创建个人自动化，选择特定时间，添加操作，选择运行快捷指令。
![image-20220526152336494](https://user-images.githubusercontent.com/102567741/170440559-1dd8a5cd-6e9a-4b93-bb12-0c7e988d9871.png)
运行顺序为：获取Token，ClockinHome
![image-20220526152449880](https://user-images.githubusercontent.com/102567741/170440578-5e306c4d-291e-4ac5-ad5b-1470641a804b.png)
**注意：一定要将Token的运行结果，输入到ClockinHome中**

之后将运行前询问关闭

![image-20220526152647609](https://user-images.githubusercontent.com/102567741/170440596-872c321e-29e3-4c51-a032-a9eef4ff3064.png)

<h3>设置日志记录</h3>

日志是利用备忘录实现的

只需新建备忘录，在最开始输入 **目录 **即可

![image-20220526152857248](https://user-images.githubusercontent.com/102567741/170440607-818c7133-fb2a-409e-866a-78b2c89b0259.png)

至此设置完毕

<h3>注意</h3>

因为涉及网络访问 ，所以需要先手动运行一下。
