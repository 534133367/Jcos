
function count(){
	this.smallmoney=$("#count_wrap").find(".money");
	this.money=$("#count_wrap").find(".price");
	this.box=$("#count_wrap").find("._box");
	this.small_ul=this.box.find("ul");
	this.small_num=this.box.find("span");
	this.small_price=$("#count_wrap").find(".pri");
	this.samll_li=this.small_ul.children();
	this.list=$("#count_wrap").find(".list");
	this.check=this.list.find(".int");
	this.head=$("#shop_header").find("h1").find("i");
	this.bigcheck=$("._head").find("input");
	this.local=JSON.parse(localStorage.data);
}

$.extend(count.prototype,{
	init:function(){
		this.change();	
		$(window).on("load",$.proxy(this.start,this));
		this._check();
		this._tcheck();
	},
	start:function(){
		this.num();
		this.count();
	},
	change:function(){
		var _this=this;
		this.box.on('click',function(e){
			var e=e||event;
			var target=$(e.target||e.srcElement);			
			if(target.is(".choose")){
				target.find("ul").css("display","block");
			}else{
				e.stopPropagation?e.stopPropagation():e.cancelBubble=true;
				target.find("ul").css("display","none");
			}
			if(target.is("span")){
				target.next().next().css("display","block");
			}
			if(target.is("i")){
				target.next().css("display","block");
			}
			if(target.is("li")){
				e.stopPropagation?e.stopPropagation():e.cancelBubble=true;
				target.parent().prev().prev().text(target.text());
				target.parent().css("display","none");
				var _pri=Number(target.parent().parent().prev().text().slice(1))
				target.parent().parent().next().text("￥"+target.text()*_pri);
				_this.count();
				_this.num();
				_this.last();
			}
			if(target.is(".del")&&target.is("a")){
				target.parent().parent().parent().parent().parent().remove();
				_this.count();
				_this.num();
				for(var i=0;i<_this.local.length;i++){
					if(_this.local[i].id==target.attr("data-id")){
						_this.local.splice(i,1);
					}
					
				}
				
				localStorage.data=JSON.stringify(_this.local);
			}
		})
	},
	count:function(){
		var n=$(".int:checked");
		var price=0;
		for(var i=0;i<n.length;i++){
			price+=Number(n.eq(i).next().next().children().eq(3).text().slice(1))
		}
		this.smallmoney.eq(0).text("￥"+price);
		
	},
	num:function(){
		var n=$(".int:checked");
		var num=0;
		for(var i=0;i<n.length;i++){
			num+=Number(n.eq(i).next().next().children().eq(2).children().eq(0).text());
		}
		this.money.text(num);
		this.head.text(num);
	},
	_check:function(){
		var _this=this;
		this.bigcheck.on("click",function(){
			if($(this).prop("checked")){
				 $(".int").prop("checked", true);
				 _this.count();
				_this.num();
			}else{
				$(".int").prop("checked", false);
				_this.count();
				_this.num();
			}
		})
	},
	_tcheck:function(){
		var _this=this;		
		this.check.on("click",function(){
			var judge=true;
			for(var i=0;i<_this.check.length;i++){
				if(!_this.check.eq(i).prop("checked")){				
					judge=false;
				}
			}
			console.log(judge)
			if(judge){
				_this.bigcheck.prop("checked",true);
				_this.count();
				_this.num();
			}else{
				_this.bigcheck.prop("checked",false);
				_this.count();
				_this.num();
			}
		})
	},
	last:function(){	
		for(var i=0;i<this.list.length;i++){
			this.local[i].num=this.list.eq(i).find(".choose>span").text();
			this.local[i].money=this.list.eq(i).find(".money").text();
		}
		localStorage.data=JSON.stringify(this.local);
	}
	
})
new count().init();