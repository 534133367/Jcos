var p1=new Promise(function(resolve,reject){
	$.ajax({
		url:"../json/list.json",
		dataType:'json',
		success:function(data){
			resolve(data)		
		}	
})
})

p1.then(function(data){
	new list(data).init();
})