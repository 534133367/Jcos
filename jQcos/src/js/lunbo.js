
function lunbo(){
	this.banner=$("#banner>.banner_top");
	this.all=$("#banner");
	this.box=this.banner.find(".box_top");
	this.li=this.box.children();
	this.Next=1;
	this.timer=null;
	this._li=$("#banner>.banner_bottom>.box_bottom").find("li");
	var _this=this;
}

$.extend(lunbo.prototype,{
	init:function(){
		this.autoplay();
		this.start();
		this.stop();
		this.box.on("mousedown",$.proxy(this._down,this));
		this.color();
	},
	start(){
		this.all.on('mouseout',()=>{this.autoplay()})
	},
	stop(){
		this.all.on('mouseover',()=>{clearInterval(this.timer)})
	},
	autoplay:function(){
		this.timer=setInterval($.proxy(this.handplay,this),4000);
	},
	handplay:function(){
		if(this.Next==5){
			this.Next=2;
			this.box.animate({
				"left":-this.banner.width()
			},0)	
		}else{
			this.Next++;
		}
		this.toimg();
	},
	toimg:function(){
		var width=this.banner.width();
		var num=-this.Next*width;
		this.box.animate({
			"left":num
		},200);
		this._li.eq(this.Next-1==4?0:this.Next-1).addClass("pink").siblings().removeClass("pink");
	},
	_down:function(e){
		var _this=this;
		var e=event;
		var left=e.offsetX;
		var ul_left=this.box.offset().left;
		$(document).on("mousemove",function(e){
			var e=event;
			var l=e.clientX-left+ul_left;
			_this.box.animate({
				"left":l
			},0);
		})
		$(document).on("mouseup",function(e){
			var e=event;
			var up=e.clientX;
			$(document).off("mousemove");
			$(document).off("mouseup");
			_this.lool=up-left;
			if(left>up){
				_this.right();
			}
			if(left<up){
				_this.left();
			}
			
		})
	},
	right:function(){
		if(this.Next==4){
			this.Next=1;
			this.box.animate({
				"left":this.lool
			},0);
		}else{
			this.Next++;
		}
		this.toimg();
	},
	left:function(){	
		if(this.Next==1){
			this.Next=4;
			this.box.animate({
				"left":-this.banner.width()*(this.li.length-1)+this.lool
			},0);
		}else{
			this.Next--;
		}
		this.toimg();
	},
	color:function(){
		var _this=this;
		this._li.on("click",function(){
			$(this).addClass("pink").siblings().removeClass("pink");
			$("#banner").find(".box_top").animate({
				"left":-($(this).index()+1)*1519
			},500)
			_this.Next=$(this).index()+1;
		})
		
	}
	
})
new lunbo().init();
