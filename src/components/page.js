import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Link as RouterLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease, setDiff } from '../redux/modules/counter';

export default function Blog() {

	  // useSelector는 리덕스 스토어의 상태를 조회하는 Hook입니다.
	  // state의 값은 store.getState() 함수를 호출했을 때 나타나는 결과물과 동일합니다.
	  const { number, diff } = useSelector(state => ({
		number: state.counter.number,
		diff: state.counter.diff
	  }));

	  // useDispatch 는 리덕스 스토어의 dispatch 를 함수에서 사용 할 수 있게 해주는 Hook 입니다.
	  const dispatch = useDispatch();
	  // 각 액션들을 디스패치하는 함수들을 만드세요
	  const onIncrease = () => {console.log("clicked!!"); dispatch(increase())};
	  const onDecrease = () => dispatch(decrease());
	  const onSetDiff = diff => dispatch(setDiff(diff));
		
	  const onChange = e => {
		// e.target.value 의 타입은 문자열이기 때문에 숫자로 변환해주어야 합니다.
		onSetDiff(parseInt(e.target.value, 10));
	  };
		
	
	return (
			<div title="Dashboard: Library">
				Home<br></br>
				  <input type="number" value={diff} min="1" onChange={onChange} />
				<RouterLink to="/dashboard">데시보드 가기</RouterLink>

			</div>
		);
}


	

