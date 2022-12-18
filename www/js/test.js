
//どの処理なのか記述する

var jsalarm={   //恐らく連想配列

	padfield:function(f){  //ラベル処理がなぜ必要？
		return (f<10)? "0"+f : f //三項演算子を使った０を付加する処理
	},

	showcurrenttime:function(){
		var dateobj=new Date()
		var ct=this.padfield(dateobj.getHours())+":"+this.padfield(dateobj.getMinutes())+":"+this.padfield(dateobj.getSeconds())//現在時刻をpadfieldで０付加しながら割り出し
		this.ctref.innerHTML=ct//Cureent TimerにinnerHTMLで時間を出してる
        //消した場合でもinnerHTMLが表示されないだけで動作可能(消す予定)
        //上を消した場合CurentTimeのID部分htmlも消しておく
		this.ctref.setAttribute("title", ct)//属性値の設定,titleにct(時間)処理がわからない
		if (typeof this.hourwake!="undefined"){ //時間が設定されている
			if (this.ctref.title==(this.hourwake+":"+this.minutewake+":"+this.secondwake)){ //おそらく時間が一致しているかの処理
				clearInterval(jsalarm.timer)//setInterval()でセットしたタイマーを解除
				window.location=document.getElementById("musicloc").value
                //設定したアラームに関する処理locationだから画面遷移あり

			}
		}
	},

    
	init:function(){
		var dateobj=new Date()
		this.ctref=document.getElementById("jsalarm_ct")//どこのIDか記述
		this.submitref=document.getElementById("submitbutton")//どこのIDか記述
		this.submitref.onclick=function(){//おそらくクリックされたとき
			jsalarm.setalarm()//連想配列のラベル呼び出し
			this.value="Alarm Set"//どこのvalue??
			this.disabled=true
			return false //trueでも普通に動いた？？
		}
		this.resetref=document.getElementById("resetbutton")//どこのIDか記述
		this.resetref.onclick=function(){//resetボタンがクリックされた時のリセット処理
		jsalarm.submitref.disabled=false
		jsalarm.hourwake=undefined
		jsalarm.hourselect.disabled=false
		jsalarm.minuteselect.disabled=false
		jsalarm.secondselect.disabled=false
		return false //真理値はあんまり関係ないかも(動作異常なし)
		}
		var selections=document.getElementsByTagName("select")//どこのIDか記述
		this.hourselect=selections[0]
		this.minuteselect=selections[1]
		this.secondselect=selections[2]
		for (var i=0; i<60; i++){
			if (i<24) //まだ時間の範囲内である場合 フィールド：0-23
            //何の処理かわからない
			this.hourselect[i]=new Option(this.padfield(i), this.padfield(i), false, dateobj.getHours()==i)
			this.minuteselect[i]=new Option(this.padfield(i), this.padfield(i), false, dateobj.getMinutes()==i)
			this.secondselect[i]=new Option(this.padfield(i), this.padfield(i), false, dateobj.getSeconds()==i)

		}
		jsalarm.showcurrenttime()
		jsalarm.timer=setInterval(function(){jsalarm.showcurrenttime()}, 1000)
	},
    
	setalarm:function(){
		this.hourwake=this.hourselect.options[this.hourselect.selectedIndex].value
		this.minutewake=this.minuteselect.options[this.minuteselect.selectedIndex].value
		this.secondwake=this.secondselect.options[this.secondselect.selectedIndex].value
		this.hourselect.disabled=true
		this.minuteselect.disabled=true
		this.secondselect.disabled=true
	}
}



