import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import PropTypes from 'prop-types';
class Post extends Component {
   	 
	   componentDidMount(){
       this.props.fetchPosts();
     }

    render() {
    	const postItems = this.props.posts.map(post=> (
    		<div className="jumbotron" key={post.id}>
    			<h3>{post.title}</h3>
    			<p>{post.body}</p>
    		</div>
    	));
        return (
            <div className="container">
            	<h1>Posts</h1>
            	{ postItems}
            </div>
        )
    }
}

Post.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  posts: state.posts.items
});
export default connect (mapStateToProps, {fetchPosts})(Post);
