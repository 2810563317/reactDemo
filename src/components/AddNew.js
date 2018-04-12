import React from 'react';
import { DatePicker,Toast } from 'antd-mobile';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import moment from "moment";
import createHistory from 'history/createHashHistory';
import {addPlanDispatch} from '../redux/action.js';
const history = createHistory()
//message
class Message extends React.Component{
	constructor(){
		super();
		this.state={
			showMsg:true
		}
		this.isHidden=this.isHidden.bind(this)
	}
	isHidden=()=>{
		this.setState({showMsg:false})
	}
	render(){
		if(this.state.showMsg){
			return(
				<p className='new-msg'>
					<span className='new-msg-span iconfont icon-jinggao'></span>
					<span className='new-msg-span msg'>请选择筛查项目并线上支付，如您为本地户籍，支付成功后可线上提交户籍证明材料，申请报销。</span>
					<span className='new-msg-span iconfont icon-delete' onClick={this.isHidden}></span>
				</p>	
			)
		}else{
			return null
		}
		
	}
}

class Add extends React.Component{
	constructor(){
		super();
		let createTime=new Date().getTime();
		this.state={
			id:'',
			motherName:'',
			motherId:'',
			motherRegistration:'',
			address:'',
			barCode:'',
			birthday:'',
			birthdayString:'',
			birthhour:'',
			birthhourString:'',
			babySex:'',
			pregnancyWeek:'',
			pregnancyDay:'',
			babyWeight:'',
			selectedType:'1',
			status:3,
			hasIncrease:'false',
			createTime:createTime
		};
		this.inputChange=this.inputChange.bind(this)
		this.selectCheckType=this.selectCheckType.bind(this)
		this.birthdayChangeType=this.birthdayChangeType.bind(this)
		this.birthhourChangeType=this.birthhourChangeType.bind(this)
		this.submitInfo=this.submitInfo.bind(this)
	}
	inputChange(e){
		const target = e.target;
		const value = target.value;
		const name = target.name;
		this.setState({
			id: Math.ceil(Math.random()*10000),
			[name]: value
		});
	}
	selectCheckType(e){
		let selected=e.target.dataset.selected;
		this.setState({selectedType: selected});
	}
	birthdayChangeType(date){
		let birthdayString=moment(date).format('YYYY-MM-DD');
		this.setState({
			birthday:date,
			birthdayString: birthdayString
		});
	}
	birthhourChangeType(date){
		let birthhourString=moment(date).format('HH:mm:ss');
		this.setState({
			birthhour:date,
			birthhourString: birthhourString
		});
	}
	submitInfo(){
		let data=this.state;
		if(data.barCode && data.birthday && data.birthhour && data.pregnancyWeek && data.pregnancyDay && data.babyWeight){
			this.props.addPlanDispatch(this.state);
			history.push('/')
		}else{
			Toast.info('请输入完整信息', 1);
		}
	}
	render(){
		return(
			<div>
				<Message/>
				<form className='new-form'>
					<label className='new-form-label'>
						<span className='new-form-label-span'>母亲姓名</span>
						<input className='new-form-label-input' name='motherName' type="text" onChange={this.inputChange}/>
					</label>
					<label className='new-form-label'>
						<span className='new-form-label-span'>母亲身份证号</span>
						<input className='new-form-label-input' name='motherId' type="text" onChange={this.inputChange}/>
					</label>
					<label className='new-form-label'>
						<span className='new-form-label-span'>母亲户籍信息</span>
						<input className='new-form-label-input' name='motherRegistration' type="text" onChange={this.inputChange}/>
					</label>
					<label className='new-form-label'>
						<span className='new-form-label-span'>居住地址</span>
						<input className='new-form-label-input' name='address' type="text" onChange={this.inputChange}/>
					</label>
					<label className='new-form-label'>
						<p className='new-form-label-span'>
							<span className='mustWrite iconfont icon-xinghao'></span>
							<span>采血卡条码</span>
						</p>
						<input className='new-form-label-input' name='barCode' type="text" onChange={this.inputChange}/>
					</label>
					<label className='new-form-label'>
						<p className='new-form-label-span'>
							<span className='mustWrite iconfont icon-xinghao'></span>
							<span>婴儿出生日期</span>
						</p>
						<div className="displayBox inline-day">
							<DatePicker
					          mode="date"
					          title="婴儿出生日期"
					          value={this.state.birthday}
					          onChange={this.birthdayChangeType}
					        >
					          <input className='new-form-label-input-inline' name='birthday' value={this.state.birthdayString} type="text"/>
					        </DatePicker>
					        <span className='icon iconfont icon-riqi'></span>
				        </div>
				        <div className="displayBox inline-clock">
							<DatePicker
					          mode="time"
					          title="婴儿出生时间"
					          value={this.state.birthhour}
					          onChange={this.birthhourChangeType}
					        >
							<input className='new-form-label-input-inline' name='birthhour' value={this.state.birthhourString}  type="text"/>
					        </DatePicker>
					        <span className='icon iconfont icon-clock'></span>
				        </div>
					</label>				
					<label className='new-form-label'>
						<span className='new-form-label-span'>婴儿性别</span>
						<input className='new-form-label-check-inline' name='babySex' type="radio" value='1' onChange={this.inputChange}/>男
						<input className='new-form-label-check-inline' name='babySex' type="radio" value='2' onChange={this.inputChange}/>女
						<input className='new-form-label-check-inline' name='babySex' type="radio" value='3' onChange={this.inputChange}/>未知
					</label>
					<label className='new-form-label'>
						<p className='new-form-label-span'>
							<span className='mustWrite iconfont icon-xinghao'></span>
							<span>孕周</span>
						</p>
				        <div className="displayBox inline">
				        	<input className='new-form-label-input-inline' name='pregnancyWeek' type="text" onChange={this.inputChange}/>
				        	<span className='icon iconfont'>周</span>
						</div>
				        <div className="displayBox inline">
							<input className='new-form-label-input-inline' name='pregnancyDay' type="text" onChange={this.inputChange}/>
							<span className='icon iconfont'>天</span>
						</div>
					</label>	
					<label className='new-form-label'>
						<p className='new-form-label-span'>
							<span className='mustWrite iconfont icon-xinghao'></span>
							<span>婴儿体重</span>
						</p>
				        <div className="displayBox block">
							<input className='new-form-label-input' name='babyWeight' type="text" onChange={this.inputChange}/>
							<span className='icon iconfont'>g</span>
						</div>
						
					</label>
				</form>
				<p className="littleTitle">新生儿筛查项目筛选</p>
				<div className='select-check-type'>
					<p className={this.state.selectedType==1?'select-check-btn select-check-btn-selected':'select-check-btn'} data-selected='1' onClick={this.selectCheckType}>
						40病筛查（包括4病，430元
						<span className='select-check-tip'>推荐</span>
					</p>
					<p className={this.state.selectedType==2?'select-check-btn select-check-btn-selected':'select-check-btn'} data-selected='2' onClick={this.selectCheckType}>基础4病筛查（150元）</p>
					<p className='select-check-submit' onClick={this.submitInfo}>{this.state.selectedType===1?'支付430元':'支付150元'}</p>
				</div>
				<div className='new-project-info'>
					<p>济南新筛项目简介:</p>
					<ul>
						<li>基础4病筛查：苯丙酮尿症（PKU）、先天性甲状腺功能低下（CH）、先天性肾上腺皮质增生症（CKH）和葡萄糖-6-磷酸脱氢酶缺乏症（G-6-PD）;</li>
						<li>40病筛查：包含以上4病筛查，另外还采用串联质谱术，筛查其他37种代谢性遗传疾病，详见“常见问题”。</li>
					</ul>
				</div>
				<span className='iconfont icon-qunfengkefujingli'></span>
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
    addPlanDispatch: bindActionCreators(addPlanDispatch, dispatch)
  }
}
// export default Add
export default connect(mapStateToProps,mapDispatchToProps)(Add);