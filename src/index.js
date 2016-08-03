import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Post from './components/Post';
import Form from './components/Form';

class App extends Component {
	constructor(props) {
    super(props);

    this.state = {
      posts: [{
        title: 'Test Title',
        link : 'http://google.com'
      }, {
        title: 'Test Title 2',
        link: 'http://google.com'
      }]
    };

    this.submitPost = this.submitPost.bind(this);
  }

  submitPost(title, link) {
    let post = this.state.posts.slice();
    post.push({title, link})
    this.setState({
      posts: post
    });
  }

  render() {
		return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">
                Reddit React
              </a>
            </div>
          </div>
        </nav>
       <Form onSubmitPost={this.submitPost}/>
       <Post posts={this.state.posts}/>
      </div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('container'));
