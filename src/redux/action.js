import * as types from './action-type.js';

const addPlan=(item)=> {
  return {
    type: types.ADD,
    item
  };
}
// 删除计划
const deletePlan=(id)=> {
  return {
    type:types.DELECT,
    id
  };
}
//修改
const updatePlan=(id)=> {
  return {
    type:types.UPDATE,
    id
  };
}


export const addPlanDispatch = (item) => {
    return dispatch => {dispatch(addPlan(item)) }
}
export const deletePlanDispatch = (id) => {
    return dispatch=>{dispatch(deletePlan(id))};
}
export const updatePlanDispatch = (id) => {
    return dispatch=>{dispatch(updatePlan(id))};
}