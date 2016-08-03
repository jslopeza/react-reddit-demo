import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import PostList from './PostList';

export default class Post extends Component {
	constructor(props) {
		super(props);
	}

	render() {
    const postItems = this.props.posts.map((post, i) => {
      return (
        <div>
          <PostList title={post.title} link={post.link} key={i} />
        </div>
      )
    });
		return (
			<div>
        {postItems}
			</div>
		);
	}
}
