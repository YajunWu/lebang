var basic = {
	headerHover: function headerHover() {
		var nav = document.getElementById('nav');
		nav.onclick = function(e) {
			var event = e || window.event;
			var target = e.srcElement || e.target;
			var curActiveLi = nav.getElementsByClassName('active');
			var lis = nav.childNodes;
			if(curActiveLi.length > 0)
				curActiveLi[0].className = '';
			target.className = 'active';
			switch(target.innerHTML) {
				case '首页':
					console.log('首页');
					break;
				case '详细':
					console.log('详细');
					break;
				case '问题反馈':
					console.log('问题反馈');
					break;
				case '帮助':
					console.log('帮助');
					break;
				default: 
					console.log('换页咯！');
			}
		}
	}
}