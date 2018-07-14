
function country(){
	this.head=$("#head_wrap>.head");
	this.ul=this.head.find(".home");
	this.str="";
	
}

$.extend(country.prototype,{
	init:function(){
		$(window).on("load",$.proxy(this._ajax,this));
	},
	_ajax:function(){
		var _this=this;
		$.ajax({
			url:"../json/country.json",
			data:{},
			dataType:"json",
			success:function(data){
				for(var i=0;i<data.length;i++){
					_this.str+=`<li>
									<a href="##">${data[i].country}</a>
								</li>`	
				}
				_this.ul.append(_this.str);
			}		
		})
	}
})
new country().init();