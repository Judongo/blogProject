let index = {
	init: function(){
		$("#btn-save").on("click",()=>{ //this 바인딩 위해
			this.save();
		});
		
		$("#btn-delete").on("click",()=>{ //this 바인딩 위해
			this.deleteById();
		});
		
		$("#btn-update").on("click",()=>{ //this 바인딩 위해
			this.update();
		});
		
	},
	
	save: function(){
		//alert('user의 save함수 호출됨');
		let data = {
			title: $("#title").val(),
			content: $("#content").val()
		};
		
		$.ajax({
			type: "POST",
			url: "/api/board",
			data: JSON.stringify(data), 
			contentType: "application/json; charset=utf-8", 
			dataType: "json"
			
		}).done(function(resp){
			alert("글쓰기가 완료 되었습니다.");
			console.log(resp);
			location.href = "/";
		}).fail(function(error){
			alert(JSON.stringify(error));
		}); 
	},
    deleteById: function(){
		let id= $("#id").text();
		
			
		$.ajax({
			type: "DELETE",
			url: "/api/board/"+id,
			dataType: "json"
		}).done(function(resp){
			alert("삭제가 완료 되었습니다.");
			location.href = "/";
		}).fail(function(error){
			alert(JSON.stringify(error));
		}); 
	},
	
	update: function(){
		let id = $("#id").val();
		
		
		let data = {
			title: $("#title").val(),
			content: $("#content").val()
		};
		
		$.ajax({
			type: "PUT",
			url: "/api/board/"+id,
			data: JSON.stringify(data), 
			contentType: "application/json; charset=utf-8", 
			dataType: "json"
			
		}).done(function(resp){
			alert("수정이 완료 되었습니다.");
			console.log(resp);
			location.href = "/";
		}).fail(function(error){
			alert(JSON.stringify(error));
		}); 
	}
	
}

index.init();