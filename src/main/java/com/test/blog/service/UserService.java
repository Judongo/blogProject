package com.test.blog.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.test.blog.model.RoleType;
import com.test.blog.model.User;
import com.test.blog.repository.UserRepository;

@Service // 스프링이 컴포넌트 스캔을 통해서 bean에 등록을 해줌. Ioc를 해줌.
public class UserService {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private BCryptPasswordEncoder encoder;

	@Transactional(readOnly = true)
	public User 회원찾기(String username) {
		User user = userRepository.findByUsername(username).orElseGet(() -> {
			return new User();
		});

		return user;
	}

	@Transactional
	public void 회원가입(User user) {
		String rawPassword = user.getPassword(); // 원본
		String encPassword = encoder.encode(rawPassword); // 해쉬
		user.setPassword(encPassword);
		user.setRole(RoleType.USER);
		user.setRank(10);
		userRepository.save(user);

	}

	@Transactional
	public void 회원수정(User user) {
		User persistence = userRepository.findById(user.getId()).orElseThrow(() -> {
			return new IllegalArgumentException("회원 찾기 실패");
		});

		if (persistence.getOauth() == null || persistence.getOauth().equals("")) {
			String rawPassword = user.getPassword();
			String encPassword = encoder.encode(rawPassword);
			persistence.setPassword(encPassword);
			persistence.setEmail(user.getEmail());
		}

		

	}

//	@Transactional(readOnly = true) //select 할때 트랜잭션 시작, 서비스 종료시에 트랜잭션 종료(정합성 유지)
//	public User 로그인(User user) {
//		
//		return userRepository.findByUsernameAndPassword(user.getUsername(), user.getPassword());
//
//	}
//	
}
