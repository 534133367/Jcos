
function shop(){
	this.local=JSON.parse(localStorage.data);
	this.box=$("#count_wrap").find("._box");
	this.rightbox=$("#count_wrap").find(".count_right");
	this.top=$("#count_wrap");
	this.timer=null;
}

$.extend(shop.prototype,{
	init:function(){
		this.jax();
		this.scroll();
	},
	scroll:function(){
//		var _this=this;
//		$(window).on("scroll",function(){
//			var iTarget=$(this).scrollTop();
//			if(iTarget<283){
//				iTarget=283;
//			}
//			clearInterval(this.timer);
//			_this.timer = setInterval(function(){
//				var speed = (iTarget-_this.rightbox.position().top-283)/8;
//				speed = speed>0?Math.ceil(speed):Math.floor(speed);
//	
//				if(_this.rightbox.position().top+283 == iTarget){
//					clearInterval(_this.timer);
//				}else{
//					_this.rightbox.css("top",_this.rightbox.position().top+283+speed);
//				}
//			},30)
//		})
	},
	jax:function(){
		var str="";
		for(var i=0;i<this.local.length;i++){
			str+=`<div class="list">
							<input type="checkbox" checked="checked" class="int"/>
							<img src="${this.local[i].img}" class="img"/>
							<div class="mation">
								<div class="s_box">
									<p>${this.local[i].content}</p>
									<p>${this.local[i].name}</p>
									<ul class="operation">
										<li>
											<a href="##">修改</a>
											<span>·</span>
										</li>
										<li>
											<a href="##">+ 收藏夹</a>
											<span>·</span>
										</li>
										<li>
											<a href="##" class="del" data-id="${this.local[i].id}">删除</a>
										</li>
									</ul>
								</div>
								<span class="pri">${this.local[i].price}</span>
								<div class="choose">
									<span>${this.local[i].num}</span><i></i>
									<ul>
										<li>1</li>
										<li>2</li>
										<li>3</li>
										<li>4</li>
										<li>5</li>
									</ul>
								</div>
								<span class="money">${this.local[i].money}</span>
							</div>
						</div>`
		}
		this.box.html(str);
		
	}
})
new shop().init();