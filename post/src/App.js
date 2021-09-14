
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch }
        from 'react-router-dom';
import PostForm from './component/postform/PostForm';
import AllPost from './component/allpost/AllPost';

const App=()=>{
  return (
    <div className="App">
    <BrowserRouter>
      <Switch>
        <Route exact path ='/' render=
          {props => <PostForm {...props} />}>
        </Route>
        <Route exact path='/gallery' render=
          {props => <AllPost {...props} />}>
        </Route>
      </Switch>
    </BrowserRouter>
  </div>
  );
}
export default App;