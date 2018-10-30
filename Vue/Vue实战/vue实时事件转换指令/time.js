
/*   时间转换的逻辑    */
//  1分钟以前, 显示"刚刚".
//  1分钟 ~ 1小时之间, 显示 "XX分钟前".
//  1小时 ~ 1天之间, 显示 "XX小时前".
//  1天 ~ 1个月 (31 天) 之间, 显示 "XX天前"
//  大于 1 个月, 显示 "XX 年 XX 月 XX 日".


var Time = {
    //  获取当前时间戳
    getUnix: function(){
        var date = new Date();
        return date.getTime();
    },

    //  获取今天 0 点 0 分 0 秒的时间戳
    getTodayUnix: function () {
        var date = new Date();
        date.setHours(0);
        date.serMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
        return date.getTime();
    },

    //  获取今年 1 月 1 日 0 点 0 分 0 秒的时间戳
    getYearUnix: function () {
        var date = new Date();
        date.setMonth(0);
        date.setDate(1);
        date.setHours(0);
        date.serMinutes(0)
        date,setSeconds(0);
        date.setMilliseconds(0);
        return date.getTime();
    },

    //  获取标准年月日
    getLastData: function () {
        var date = new Date(time)  ;
        var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
        var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
        return date.getFullYear() + '-' + month + '-' + day;
    },

    //  转换时间
    getFormatTime: function () {
        var now = this.getUnix();                       //  当前时间戳
        var today = this.getTodayUnix();                //  今天 0 点时间戳
        var year = this.getYearUnix();                  //  今年 0 点时间戳
        var timer = (now - timestamp) / 1000;           //  转化为秒级时间戳
        var tip = '';

        if ( timer <= 0 ) { 
            tip = "刚刚";
        } else if ( Math.floor(timer/60) <= 0 ) {
            tip = "刚刚";
        } else if ( timer < 3600 ) {
            tip = Math.floor(timer/60) + "分钟前";
        } else if ( timer >= 3600 && (timestamp - today >= 0) ) {
            tip = Math.floor(timer/3600) + "小时前";
        } else if ( timer/86400 <= 31 ) {
            tip = Math.ceil(timer/86400) + "天前";
        } else {
            tip = this.getLastDate(timesatmp);
        }
        return tip;
    }
}