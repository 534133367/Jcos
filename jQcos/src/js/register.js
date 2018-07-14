
function _register(){
	this.user=$("#register").find(".phone");
	this.tir1=$("#register").find("form").eq(0).find(".one_o");
	this.tir2=$("#register").find(".tir1");
	this.tir3=$("#register").find(".tir2");
	this.pass1=$("#register").find(".pass1");
	this.pass2=$("#register").find(".pass2");
	this.str=$(".safety").find(".s1");
	this.str2=$(".safety").find(".s2");
	this.get=$("#register").find("form").find(".get");
	this._number=$("#register").find("form").find(".number");
	this.n=$("#register").find("form").find(".num1")
	this.last=$("#register").find(".bottom").find(".a");
	this.judge=false;
}

$.extend(_register.prototype,{
	init:function(){
		this.user.on("change",$.proxy(this.use,this));
		this.pass1.on("change",$.proxy(this._pass1,this));
		this.pass2.on("change",$.proxy(this._pass2,this));
		this.get.on("click",$.proxy(this.num,this))
		this.num();
		this.n.on("change",$.proxy(this.yan,this))
		this.last.on("click",$.proxy(this._last,this))
	},
	use:function(){
		var usename=this.user.val();
		var res1=/[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)/;
		var res2=/^1\d{10}$/;
		if(res1.test(usename)||res2.test(usename)){
			this.user.css("border","1px solid #dadada");
			this.tir1.css("opacity",0);
			this.judge=true;
		}else{
			this.user.css("border","1px solid red");
			this.tir1.css("opacity",1);
			this.judge=false;
		}
	},
	_pass1:function(){
		var res1=/^\w{8,12}/;
		var res2=/^\w{0,7}/;
		var res3=/^\w{13,20}/;
		var pass=this.pass1.val();
		if(res2.test(pass)){
			this.pass1.css("border","1px solid red");
			this.tir2.css("opacity",1);
			this.str.animate({
				"width":100
			},0)
			this.str.text("弱");
			this.str.css("background","red")
			this.judge=false;
		}
		if(res1.test(pass)){
			this.pass1.css("border","1px solid #dadada");
			this.tir2.css("opacity",0);
			this.str.animate({
				"width":200
			},0)
			this.str.text("中等");
			this.str.css("background","blue")
			this.judge=true;
		}
		if(res3.test(pass)){
			this.pass1.css("border","1px solid #dadada");
			this.tir2.css("opacity",0);
			this.str.animate({
				"width":330
			},0)
			this.str.text("强");
			this.str.css("background","blue")
			this.judge=true;
		}
	},
	_pass2:function(){
		var res1=/^\w{8,12}/;
		var res2=/^\w{0,7}/;
		var res3=/^\w{13,20}/;
		var pass=this.pass2.val();
		var pass2=this.pass1.val();
		if(pass==pass2){
			if(res2.test(pass)){
			this.pass2.css("border","1px solid #dadada");
			this.tir3.css("opacity",0);
			this.str2.animate({
				"width":100
			},0)
			this.str2.text("弱");
			this.str2.css("background","red")
			}
			if(res1.test(pass)){
				this.pass2.css("border","1px solid #dadada");
				this.tir3.css("opacity",0);
				this.str2.animate({
					"width":200
				},0)
				this.str2.text("中等");
				this.str2.css("background","blue")
				this.judge=true;
			}
			if(res3.test(pass)){
				this.pass2.css("border","1px solid #dadada");
				this.tir3.css("opacity",0);
				this.str2.animate({
					"width":330
				},0)
				this.str2.text("强");
				this.str2.css("background","blue")
				this.judge=true;
			}
		}else{
			this.pass2.css("border","1px solid red");
			this.tir3.css("opacity",1);
			this.judge=false;
		}
		
	},
	num:function(){
		var st="";
		for(var i=0;i<4;i++){
			st+=parseInt(Math.random()*10);
		}
		this._number.text(st)
	},
	yan:function(){
		var a=this._number.text();
		var b=this.n.val();
		if(a!=b){
			alert("验证码错误");
			this.n.val("");
			this.judge=false;
		}else{
			this.judge=true;
		}
	},
	
	_last:function(){
		var _this=this;
		var user=this.user.val();
		var pass1=this.pass1.val();
		if(!_this.judge){
			alert("注册失败");
		}else{
			$.ajax({
				type:"get",
				url:"../php/register.php",
				dataType:'json',
				data:{username:user,_password:pass1},
				success:function(data){
					console.log(data)
					if(data.status==1){
						console.log("suc")
						alert("注册成功");
						location.href="homepage.html";
					}
					if(data.status==0){
						console.log("fail")
						alert("后台失败");
					}
				}
				
			});
				
			
		}
	
	}
})

new _register().init();
