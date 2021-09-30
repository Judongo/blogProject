<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%@ include file="../layout/header.jsp"%>

<div class="container">
	<form>
		<div class="form-group">
			<label for="email">username :</label> <input type="text"
				class="form-control" placeholder="Enter username" id="username">
		</div>

		<div class="form-group">
			<label for="email">password :</label> <input type="text"
				class="form-control" placeholder="Enter password" id="password">
		</div>

		<div class="form-group">
			<label for="email">email :</label> <input type="email"
				class="form-control" placeholder="Enter email" id="email">
		</div>

		

	</form>
	<button id="btn-save" class="btn btn-primary" >회원 가입 완료</button>
</div>

<script src="/js/user.js"></script>
<%@ include file="../layout/footer.jsp"%>
