
function cook(id){
	this.sele=$("#bigbox_wrap").find(".choose");
	this.num=this.sele.find("span");
	this.ul=this.sele.find("ul");
	this.li=this.ul.children();
	this.money=$("#bigbox_wrap").find(".buy").find(".span");
	this.price=$("#bigbox_wrap").find(".price").find("span");
	this.much=$("#bigbox_wrap").find(".price").find("p");
	this.add=$("#bigbox_wrap").find(".buy").find(".in");
	this.effect=$("#bigbox_wrap").find(".head").find("span");
	this.content=$("#bigbox_wrap").find(".top").find("span");
	this.img=$("#bigbox_wrap").find(".o_box").find("img");
	this.id=id;
}

$.extend(cook.prototype,{
	init:function(){
		this.cout();
		this.add.on("click",$.proxy(this._add,this));
	},
	cout:function(){
		var _this=this;
		this.sele.on('click',function(e){	
			var e=event;
			e.stopPropagation?e.stopPropagation():e.cancelBubble=true;
			var cou=Number(_this.price.text().slice(1));
			_this.ul.css("display","block");
			//
			$(document).on("click",function(){
				_this.ul.css("display","none");
			})
			//点击数量选择
			_this.li.on("click",function(e){
				var e=event;
				e.stopPropagation?e.stopPropagation():e.cancelBubble=true;
				_this.num.text($(this).text());
				_this.money.text("￥"+_this.num.text()*cou)
				_this.ul.css("display","none");
			})
			
		})
	},
	_add:function(){
		var question=confirm("是否加入购物车");
		var obj={"name":this.much.text(),"img":this.img.attr("src"),"id":this.id,"money":this.money.text(),"price":this.price.text(),"content":this.effect.text(),"effect":this.content.eq(0).text(),"num":this.num.text()};
		if(question){
			var local=window.localStorage;
			if(local.length==0){
				var y=[];
				y.push(obj);
				localStorage.data=JSON.stringify(y);
			}else{
				var local2=JSON.parse(local.data);
				var judge=true;
				for(var i=0;i<local2.length;i++){
					if(local2[i].id==obj.id){
						local2[i].money="￥"+(Number(obj.money.slice(1))+Number(local2[i].money.slice(1)));
						local2[i].num=Number(obj.num)+Number(local2[i].num);
						judge=false;
						
					}
				}
				if(judge){
					local2.push(obj);
				}				
				localStorage.data=JSON.stringify(local2);
			}
		}
	}
})