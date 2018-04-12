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
						<span className='new-form-label-span'>采血卡条码</span>
						<input className='new-form-label-input' name='barCode' type="text" onChange={this.inputChange}/>
					</label>
					<label className='new-form-label'>
						<span className='new-form-label-span'>婴儿出生日期</span>
						<div className="displayBox inline">
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
				        <div className="displayBox inline">
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
						<span className='new-form-label-span'>孕周</span>
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
						<span className='new-form-label-span'>婴儿体重</span>
				        <div className="displayBox block">
							<input className='new-form-label-input' name='babyWeight' type="text" onChange={this.inputChange}/>
							<span className='icon iconfont'>g</span>
						</div>
						
					</label>
				</form>