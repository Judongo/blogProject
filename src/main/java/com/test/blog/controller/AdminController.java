package com.test.blog.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import com.test.blog.service.BoardService;

@Controller
public class AdminController {
	
	
	@Autowired
	private BoardService boardService;

	@GetMapping("/admin/index")
	public String adminIndex() {
	
		return"admin/index";
	}
	
	@GetMapping("/admin/user")
	public String adminUser() {
	
		return"admin/user";
	}
	
	@GetMapping("/admin/board")
	public String adminBoard() {
	
		return"admin/board";
	}
	
	@GetMapping("/admin/data")
	public String adminData() {
	
		return"admin/data";
	}
}
