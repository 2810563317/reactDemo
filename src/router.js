import React from 'react';
import { Provider } from 'react-redux';
import {Route,HashRouter} from 'react-router-dom';
import List from './components/List';
import AddNew from './components/AddNew';
import Test from './components/Test';
import Test3 from './components/test3';
import store from './redux/store.js';
class MyRouter extends React.Component{
  render(){
    return (  
         <Provider store={store}>
            <HashRouter>  
                <div>  
                    <Route exact path="/" component={List}/>  
                    <Route path="/add" component={AddNew}/>
                    <Route path="/test" component={Test}/>
                     <Route path="/test3" component={Test3}/>
                </div>  
            </HashRouter>  
        </Provider>
    )
  }
}
export default MyRouter;