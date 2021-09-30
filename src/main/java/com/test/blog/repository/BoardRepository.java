package com.test.blog.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.test.blog.model.Board;
import com.test.blog.model.User;

//@Repository
public interface BoardRepository  extends JpaRepository<Board, Integer>{

	void save(User user);
	


}
