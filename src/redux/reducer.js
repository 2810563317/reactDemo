import * as types from './action-type.js';
import data from '../data/db.js'

const initialState = {
  planlist: data ,// 初始的计划表
};

const planReducer = function(state = initialState, action) {
     let list = state.planlist;
  switch(action.type) {
    // 添加
    case types.ADD:
        list.unshift(action.item);
      return Object.assign({}, state, { planlist: list });
     // 删除
    case types.DELECT:
      let newstate = list.filter((item) => item.id !== action.id);
      return Object.assign({}, state, { planlist: newstate });
    //修改
    case types.UPDATE:
      for(let[i,v] of list.entries()){ if(v.id === action.id){v.status=0}};
      return Object.assign({}, state, { planlist: list });
    default:
        return state
  }
  return state;

}

export default planReducer;