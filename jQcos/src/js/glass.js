
function glass(){
	this.ul=$(".img_left");
	this.x_box=$(".o_box");
	this.b_box=$(".b_img");
	this.x_img=this.x_box.children("img");
	this.b_img=this.b_box.children("img");
	this.filter=this.x_box.children(".filter");
	this.out=$(".out");
}

$.extend(glass.prototype,{
	init:function(){
		this.ul.on("click",$.proxy(this.btn,this));
		this.x_box.on("mouseover",$.proxy(this.over,this));
	},
	btn:function(e){
		var target=$(e.target);
		if(target.is("img")){
			let src=target.attr("data-id");
			this.x_img.attr("src",src);
			this.b_img.attr("src",src);
			target.addClass("color").siblings().removeClass("color");
		}
	},
	over:function(){
		this.filter.css("display","block");
		this.b_box.css("display","block");
		$(document).on("mousemove",$.proxy(this.move,this));
		this.out.on("mouseout",$.proxy(this._out,this));
	},
	move:function(e){
		let _left=e.pageX-this.out.offset().left-this.filter.width()/2;
		let _top=e.pageY-this.out.offset().top-this.filter.height()/2;
		if(_left<0){
			_left=0;
		}
		if(_left>this.out.width()-this.filter.width()){
			_left=this.out.width()-this.filter.width();
		}
		if(_top<0){
			_top=0;
		}
		if(_top>this.out.height()-this.filter.height()){
			_top=this.out.height()-this.filter.height()
		}
		this.filter.css({
			"left":_left,
			"top":_top
		})
		this.b_img.css({
			"left":-2*_left,
			"top":-2*_top
		})
	},
	_out:function(){
		$(document).off("mousemove");
		this.filter.css("display","none");
		this.b_box.css("display","none");
	}
});

