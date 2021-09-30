let index = {
	init: function(){
		$("#btn-save").on("click",()=>{ //this 바인딩 위해
			this.save();
		});
		
		$("#btn-update").on("click",()=>{ //this 바인딩 위해
			this.update();
		});
		
	},
	
	update: function(){
		//alert('user의 save함수 호출됨');
		let data = {
			id: $("#id").val(),
			username: $("#username").val(),
			password: $("#password").val(),
			email: $("#email").val()
		};
		
		$.ajax({
			type: "PUT",
			url: "/user",
			data: JSON.stringify(data), 
			contentType: "application/json; charset=utf-8", //body데이터가 어떤 타입인지(MIME)
			dataType: "json" // 요청을 서버로해서 응답이 왔을 때 모든 것이 문자열(생긴게 JSON이라면 => javascript 오브젝트로 변경)
			
		}).done(function(resp){
			alert("수정이 완료 되었습니다.");
			console.log(resp);
			location.href = "/";
		}).fail(function(error){
			alert(JSON.stringify(error));
		}); //ajax 통신을 이용해 3개의 데이터를 json으로 변경하여 insert 요청을 함 
	},
	
	save: function(){
		//alert('user의 save함수 호출됨');
		let data = {
			username: $("#username").val(),
			password: $("#password").val(),
			email: $("#email").val()
		};
		
		//console.log(data);
		
		
		//ajax 호출시 default가 비동기 호출
		$.ajax({
			//회원가입 수행 요청
			type: "POST",
			url: "/auth/joinProc",
			data: JSON.stringify(data), //http body데이터
			contentType: "application/json; charset=utf-8", //body데이터가 어떤 타입인지(MIME)
			dataType: "json" // 요청을 서버로해서 응답이 왔을 때 모든 것이 문자열(생긴게 JSON이라면 => javascript 오브젝트로 변경)
			
		}).done(function(resp){
			alert("회원 가입이 완료 되었습니다.");
			console.log(resp);
			location.href = "/";
		}).fail(function(error){
			alert(JSON.stringify(error));
		}); //ajax 통신을 이용해 3개의 데이터를 json으로 변경하여 insert 요청을 함 
	}
	
	/*login: function(){
		//alert('user의 save함수 호출됨');
		let data = {
			username: $("#username").val(),
			password: $("#password").val()
		};
		
		//console.log(data);
		
		
		//ajax 호출시 default가 비동기 호출
		$.ajax({
			//회원가입 수행 요청
			type: "POST",
			url: "/api/user/login",
			data: JSON.stringify(data), //http body데이터
			contentType: "application/json; charset=utf-8", //body데이터가 어떤 타입인지(MIME)
			dataType: "json" // 요청을 서버로해서 응답이 왔을 때 모든 것이 문자열(생긴게 JSON이라면 => javascript 오브젝트로 변경)
			
		}).done(function(resp){
			alert("로그인이 완료 되었습니다.");
			location.href = "/";
		}).fail(function(error){
			alert(JSON.stringify(error));
		}); //ajax 통신을 이용해 3개의 데이터를 json으로 변경하여 insert 요청을 함 
		*/
		
}

index.init();