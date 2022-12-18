function updateClock() {
        var now = new Date();
        var hour = now.getHours();
        var minute = now.getMinutes();
        var second = now.getSeconds();
        if ( hour < 10 ) hour = "0" + hour;
        if ( minute < 10 ) minute = "0" + minute;
        if ( second < 10 ) second = "0" + second;
        document.getElementById('myClock').innerHTML = hour+":"+minute+":"+second;
      }
      function start() {
        setInterval("updateClock();", 500);
        updateClock();
      }

    function akarm_select(){
        location = "alarm_make.html";
    }

//jquery使用
