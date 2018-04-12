import React from 'react'
import createHistory from 'history/createHashHistory'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import store from '../redux/store.js';
import {deletePlanDispatch,updatePlanDispatch} from '../redux/action.js';
import moment from "moment";
const history = createHistory()

//container
class Container extends React.Component{
  addNewRecord(){
    history.push('/add')
  }
  toTest(){
     history.push('/test')
  }
  SpanLabel(hasIncrease){  //增补标签
    let flag=hasIncrease ==='false'?false:true;
    if(flag){
      return (
        <span className='spanLabel hasIncrease'>已增补</span>
      )
    }else{
      return (
        <span className='spanLabel notIncrease'>增补</span>
      )
    }  
  }
  setStatusName(statu){
      let statusName=''
      switch(statu){
        case 0:
          statusName='等待采血点人员扫描';
          break;
        case 1:
          statusName='退款中';
          break;
        case 2:
          statusName='报销审核失败';
          break; 
        case 3:
          statusName='待支付';
          break;
      }
      return statusName
  }
  setButton(statu,id){
     if(statu===2){
        return (
          <p className="StatusBtnBox">
              <button className="statuBtn" onClick={()=>this.resect(id)}>报销修改</button>
          </p>
        )
      }else if(statu===3){
          return(
            <p className="StatusBtnBox">
              <button className="statuBtn" onClick={()=>this.deleteOrder(id)}>删除订单</button>
              <button className="statuBtn payBtn" onClick={()=>this.payOrder(id)}>支付</button>
            </p>
          )
      }else{
        return null
      }
  }
   resect(id){
    this.props.updatePlanDispatch(id)
    console.log(id)
    console.log('修改')
  }
  deleteOrder(id){
    this.props.deletePlanDispatch(id);
    console.log(id)
    console.log('删除')
  }
  payOrder(id){
    this.props.updatePlanDispatch(id)
    console.log(id)
    console.log('支付')
  }
  render(){
     const datas=this.props.planlist.planlist;
     console.log(datas)
     const containers=datas.map((obj,index)=>
        <div className='containerItem' key={index}>
          {this.SpanLabel(obj.hasIncrease)}
          <span className='overSpan iconfont icon-more'></span>
          <ul className='item-ul'>
            <li className="item-li">
              <span className='item-span1 createTime'>订单时间：{moment(obj.createTime).format('YYYY-MM-DD HH:mm:ss')}</span>
            </li>
            <li className="item-li">
                <span>项目名称：</span>
                <span className='item-float-right'>{obj.selectedType==1?'40病筛查':'基础4病筛查'}</span>
            </li>
             <li className="item-li">
                <span>婴儿出生日期：</span>
                <span className='item-float-right'>{obj.birthdayString}</span>
            </li>
             <li className="item-li">
                <span>采血卡条码：</span>
                <span className='item-float-right'>{obj.barCode}</span>
            </li>
             <div>
              <p className="item-li status-p">
                <span>当前进度：</span>
                <span className='item-float-right statusColor'>{this.setStatusName(obj.status)}</span>
              </p>
              {this.setButton(obj.status,obj.id)}
            </div>
          </ul>
        </div>
     )
     
     return (
      <div className='container'>
        <div className="pageTop">
          <p className="app-p" onClick={this.addNewRecord}>
            <span className="iconfont icon-icontd"></span>
            <span>新增新筛登记</span>
          </p>
          <span className="iconfont icon-yiwen" onClick={this.toTest}></span>
        </div>
        {containers}
      </div>
     )
  }
}
const mapStateToProps = function(store) {
  return {
    planlist: store.planlist
  };
};
function mapDispatchToProps(dispatch) {
  return {
    deletePlanDispatch: bindActionCreators(deletePlanDispatch, dispatch),
    updatePlanDispatch: bindActionCreators(updatePlanDispatch, dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Container);