import axios from 'axios'
import React, { Component } from 'react'

class PostList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts:[],
             errorMsg:''
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            console.log(response)
        })
        .catch(error=>{
            console.log(error)
            this.setState({errorMsg :'error retriving data'})
        })
    }
    
    render() {
        const {posts,errorMsg}= this.state  
         posts=this.state
        return (
            <div>
                List of post{
                    posts.lenght ?
                    posts.map(post=><div key={post.id}>{post.title}</div>) :
                    null
                }
                {
                    errorMsg ?<div>{errorMsg}</div> : null             
                       }
            </div>
        )
    }
}

export default PostList
