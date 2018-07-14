
function detail(){
	this.id=location.href.split("?")[1];
	this.all=$("#bigbox_wrap");
}

$.extend(detail.prototype,{
	init:function(){
		$(window).on("load",$.proxy(this.get,this));	
	},
	get:function(){
		var _this=this;
		$.ajax({
			url:"../json/list.json",
			dataType:'json',
			data:{},
			success:function(data){
				this.data=data;
				var str="";
		for(var i=0;i<this.data[0].first.length;i++){
			if(this.data[0].first[i].id==_this.id){
				str+=`<div class="bigbox content">
				<div class="head">
					<a href="homepage.html">首页></a>
					<span>${this.data[0].first[i].content}</span>
				</div>
				<div class="box">
					<div class="left">
						<ul class="img_left">
							<img src="${this.data[0].first[i].img}" data-id="${this.data[0].first[i].img}" class="color"/>
							<img src="../image/img2.png" data-id="../image/img6.png"/>
							<img src="../image/img3.png" data-id="../image/img7.png"/>
							<img src="../image/img4.png" data-id="../image/img8.png"/>
						</ul>
						<div class="out">
							<div class="o_box">
								<img src="${this.data[0].first[i].img}" />
								<div class="filter"></div>
							</div>
							<div class="b_img">
								<img src="${this.data[0].first[i].img}" />
							</div>
						</div>
					</div>
					<div class="right">
						<div class="top">
							<span>${this.data[0].first[i].effect}</span><br />
							<span>${this.data[0].first[i].content}</span>
						</div>
						<div class="star"></div>
						<div class="price">
							<p>${this.data[0].first[i].name}</p>
							<span>${this.data[0].first[i].price}</span>
						</div>
						<div class="buy">
							<span class="span">${this.data[0].first[i].price}</span>
							<div class="choose">
									<span>1</span><i></i>
									<ul>
										<li>1</li>
										<li>2</li>
										<li>3</li>
										<li>4</li>
										<li>5</li>
									</ul>
								</div>
							<a href="##" class="in">加入购物车</a>
							<a href="##">立即购买</a>
						</div>
						<div class="content">
							<h4>商品简介</h4>
							<p>*因数量有限，同一个收货地址或者同一个手机号码限购5件，敬请谅解。</p>
							<a href="##"><i></i>添加到我的收藏夹</a>
						</div>
						<ul class="show">
							<li>
								<img src="../image/del1.jpg" />
								<p>活动惊喜</p>
							</li>
							<li>
								<img src="../image/del2.jpg" />
								<p>全场免运费</p>
							</li>
							<li>
								<img src="../image/del3.jpg" />
								<p>正品保证</p>
							</li>
						</ul>
					</div>
				</div>
			</div>`
			}
			
		}		
		$("#bigbox_wrap").html(str);
			new glass().init();
			new cook(_this.id).init();
			}	
			
		})
		
	}
});
new detail().init()
