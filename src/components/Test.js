import React from 'react';
import { DatePicker, List } from 'antd-mobile';
import moment from "moment";

const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);


class Demo extends React.Component {
  state = {
    date: now,
    time: now,
  }
  changeType(date){
    console.log(date)
    let newdate=moment(date).format('YYYY-MM-DD')
    this.setState({
      date:newdate
    })
  }
  render() {
    console.log(this.state)
    return (
      <List className="date-picker-list" style={{ backgroundColor: 'white' }}>
       
        <DatePicker
          mode="date"
          title="Select Date"
          extra="Optional"
          value={this.state.date}
          onChange={this.changeType.bind(this)}
        >
          <List.Item arrow="horizontal">Date</List.Item>
        </DatePicker>

        <DatePicker
          mode="time"
          minuteStep={2}
          use12Hours
          value={this.state.time}
          onChange={time => this.setState({ time })}
        >
          <List.Item arrow="horizontal">Time (am/pm)</List.Item>
        </DatePicker>
      </List>
    );
  }
}




export default Demo

// ReactDOM.render(<Demo />, mountNode);