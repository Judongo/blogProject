<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%@ include file="../layout/header.jsp"%>

<div class="container">
	<form>
		<input type="hidden" id="id" value="${principal.user.id}" />
		<div class="form-group">
			<label for="email">username :</label> <input type="text"
				value="${principal.user.username}" class="form-control"
				placeholder="Enter username" id="username" readonly>
		</div>

		<c:if test="${empty principal.user.oauth}">
			<div class="form-group">
				<label for="email">password :</label> <input type="text"
					class="form-control" placeholder="Enter password" id="password">
			</div>
		</c:if>


		<div class="form-group">
			<label for="email">email :</label> <input type="email" readonly
				value="${principal.user.email}" class="form-control"
				placeholder="Enter email" id="email">
		</div>

		<div class="form-group">
			<label for="email"> 현재 등급 점수 :</label> 
			<input type="text" readonly
				value="${principal.user.rank}" 
				class="form-control"
				placeholder="Enter email" id="rank">
		</div>

	</form>
	<button id="btn-update" class="btn btn-primary">회원 수정 완료</button>
</div>

<script src="/js/user.js"></script>
<%@ include file="../layout/footer.jsp"%>
