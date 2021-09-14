
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import'./PostForm.css';

class PostForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const title = this.getTitle.value;
    const message = this.getMessage.value;
    const image = this.getImage.value;
    localStorage.setItem('title', title);
    localStorage.setItem('message', message);
    localStorage.setItem('image', image);
    this.getTitle.value='';
    this.getMessage.value = '';
    this.getImage.value = '';
  }
render() {
  return (
    <div className="Divstytle">
    <h1 style={{color:'#8A2482'}}>Post
      <span style={{color:'#248A6E'}}>creation</span>
    </h1>

<p>create new post</p>

    <hr></hr>
      <h3>Create a new Post</h3>
      <form onSubmit={this.handleSubmit} className='formStyle'>
         <input className='inputFields' required type="text" 
         placeholder="Enter Post Title" 
          ref={(input)=> this.getTitle = input }
         /><br /><br />
         <input className='inputFields' required type="text" 
         placeholder="Paste your image url here"
         ref={(input) => this.getImage = input}
         /><br></br>
         <br></br>
         <textarea  className='inputFields'
           required rows="5" cols="28"
  
         placeholder="Enter Comment"
           ref={(input)=>this.getMessage = input}/>
         <br /><br />
         <button className='BtnStyle'>Post</button>
      </form>
      <Link to='/gallery'>
        <button className='gallerylook'>
          View Gallery
        </button>
      </Link>
    </div>
   );
}
}
export default PostForm;
