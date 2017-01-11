var btnOne=document.getElementById('btn-one');
var btnTwo=document.getElementById('btn-two');
     btnOne.onclick=function() {
	var count=document.getElementById('count').value;
	var password=document.getElementById('password').value;
	if (count=='') {
		alert("请输入完整账号");
		return false;
	};
	if (password=='') {
		alert('请输入密码');
		return false;
	}
}
 btnTwo.onclick=function(){
	confirm('是否确认退出');	
}

