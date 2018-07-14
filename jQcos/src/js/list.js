
function list(data){
	this.li=$("#shop_wrap>.shop>.kind>li");
	this.ul=$("#shop_wrap").find(".list");
	this.data=data;
}

$.extend(list.prototype,{
	init:function(){
		this.change();
		this.wind();
	},
	wind:function(){
		this.page(0);
	},
	change:function(){
		var _this=this;
		
		this.li.on("click",function(){
			$(this).addClass("color").siblings().removeClass("color");
			_this.page($(this).index());
		})	
	},
	page:function(n){
					var str="";
					for(let i=4*n;i<(n+1)*4;i++){
						str+=`<li>
						<div class="cur">
							<img src="${this.data[0].first[i].img}" />
							<div class="a">
								<a href="##" class="buy">立即购买</a>
								<a href="detail.html?${this.data[0].first[i].id}" class="learn">了解详情</a>
							</div>
						</div>
						<p>${this.data[0].first[i].name}<br/>${this.data[0].first[i].content}</p>
						<a class="top">${this.data[0].first[i].effect}</a>
						<div class="btom">
							<i></i>
							<span></span>
							<span>${this.data[0].first[i].price}</span>
						</div>
					</li>`
					}
					this.ul.html(str);
	}
});

