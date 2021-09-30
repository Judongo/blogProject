let index = {
	init: function(){
		$("#btn-git1").on("click",()=>{ 
			this.git1();
		});
		
		$("#btn-git2").on("click",()=>{ 
			this.git2();
		});
		
		$("#btn-git3").on("click",()=>{ 
			this.git3();
		});
		
		$("#btn-git4").on("click",()=>{ 
			this.git4();
		});
		
	
	},
	
	
	git1: function(){
		window.location.href = "/index.jsp";
	}
	
}

index.init();