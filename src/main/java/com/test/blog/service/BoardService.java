package com.test.blog.service;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.test.blog.model.Board;
import com.test.blog.model.User;
import com.test.blog.repository.BoardRepository;

@Service // 스프링이 컴포넌트 스캔을 통해서 bean에 등록을 해줌. Ioc를 해줌.
public class BoardService {

	@Autowired
	private BoardRepository boardRepository;

	
	@Transactional
	public void 글쓰기(Board board, User user) { // title content
		board.setCount(0);
		board.setUser(user);
		boardRepository.save(board);
		//사용자가 게시글을 쓸때마다 포인트 +10
		
		int rank = user.getRank();
		rank += 10;
		user.setRank(rank);
		boardRepository.save(user);
		
	}


	@Transactional(readOnly = true)
	public Page<Board> 글목록(Pageable pageable){
		return boardRepository.findAll(pageable);
	}
	
	
	@Transactional(readOnly = true)
	public Board 글상세보기(int id) {
		return boardRepository.findById(id)
				.orElseThrow(()->{
					return new IllegalArgumentException("글 상세보기 실패: 아이디를 찾을 수 없습니다.");
				});
	}
	
	@Transactional
	public void 글삭제하기(int id) {
		boardRepository.deleteById(id);
	}
	
	@Transactional
	public void 글수정하기(int id, Board requestBoard) {
		Board board = boardRepository.findById(id)
				.orElseThrow(()->{
					return new IllegalArgumentException("글 찾기 실패: 아이디를 찾을 수 없습니다.");
				});
		board.setTitle(requestBoard.getTitle());
		board.setContent(requestBoard.getContent());
	}
}
