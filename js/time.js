function getTime() {

    var dateObj = new Date();



    var hours = dateObj.getHours();//小时

    var minutes = dateObj.getMinutes();//分钟

    var seconds = dateObj.getSeconds();//秒


    if(hours<10){
        hours = "0"+hours;
    }
    if(minutes<10){
        minutes = "0"+minutes;
    }
    if(seconds<10){
        seconds = "0"+seconds;
    }

    var newDate = hours+":"+minutes+":"+seconds;
	
    document.getElementById("date1").innerHTML =  newDate;//在div中写入时间

    setTimeout('getTime()', 500);//每隔500ms执行一次getTime()
}