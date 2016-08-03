import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class PostList extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.link}</p>
      </div>
    );
  }
}
