import React, { Component } from "react";

class PostForm extends Component {

    changeHandler=e=>{
        this.setState({[e.targret.name]:e.target.value})
    }

    submitHandler=e=>{
        e.preventDefault()
        console.log(this.state)
    }
  render() {
    const { userId, title, body } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}> 
          <div>
            <input
              type="text"
              name="userId"
              value={userId}
              onChange={this.changeHandler}
            ></input>
          </div>
          <div>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.changeHandler}
            ></input>
          </div>
          <div>
            <input
              type="text"
              name="body"
              value={body}
              onChange={this.changeHandler}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default PostForm;
