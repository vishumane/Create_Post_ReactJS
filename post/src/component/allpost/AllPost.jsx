
import React from 'react';
import Post from './Post';
  
const style = {
  align: 'center',
  margin: '0px auto auto auto',
  textAlign: 'center',
}

    const AllPost=()=>{

    return (
    <div style={style}>
     <h1 style={{color:'#8A2482'}}>Post <span 
       style={{color: '#248A6E'}}>Creation</span>
     </h1>
      
    <p>simple application using localstorage </p>
  
    <hr></hr>
      <h1>All Posts </h1>
      <Post/>
    </div>
    );
}
  
export default AllPost;