import React from 'react';
import { Table } from 'antd-mobile';
import moment from "moment";

let height_temp = document.body.clientHeight*0.95-200;
class Demo extends React.Component {
  state = {
            dataSource:[
                {
                    id:'sdjsadajkkjfkfal',
                    typename:'基因检测',
                    typedetailname:'地中海基因检测',
                    ticketnum:'123456',
                    money:'230',
                    mothername:'张一',
                    motherID:'362425197809010232',
                    fathername:'周一',
                    fatherID:'362425197809010231',
                    ticketstatu:'0',
                    posttime:'2018-04-01--2018-05-01',
                    userlife:'自领用起30天'
                },
                {
                    id:'sgfskahfkhasfhahfsalfas',
                    typename:'基因检测',
                    typedetailname:'地中海基因检测',
                    ticketnum:'123456',
                    money:'230',
                    mothername:'张尔',
                    motherID:'362425197809010232',
                    fathername:'周一',
                    fatherID:'362425197809010231',
                    ticketstatu:'0',
                    posttime:'2018-04-01--2018-05-01',
                    userlife:'自领用起30天'
                }
            ],
            pageNo:"1",
            totalPages:"",   //数据总页数
            totalCount:"",     //数据总条数
            pageSize:2
  }
  render() {
        let pageNo=this.state.pageNo;
        let totalPages=this.state.totalPages;
        let totalCount=this.state.totalCount;
        const pagination={
            total:totalCount,
            onChange: (current) => {
                console.log(current)
            },
            showTotal:(total)=>{ return "共"+total+"条记录"+" "+"第"+pageNo+"/"+totalPages+"页"},
            pageSize:this.state.pageSize,
            showQuickJumper:true,
            defaultCurrent:1,
            current:parseInt(this.state.pageNo)
        };
    return (
          <Table size="small"
             scroll={{ y:height_temp*0.95-45,x:1970  }}
             style={{height:height_temp}}
             dataSource={this.state.dataSource}
             pagination={pagination}/>
    );
  }
}




export default Demo

// ReactDOM.render(<Demo />, mountNode);