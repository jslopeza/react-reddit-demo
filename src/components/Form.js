import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title : '',
      link: ''
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeLink(link) {
    this.setState({link});
  }

  onChangeTitle(title) {
    this.setState({title});
  }

  onSubmit() {
    this.props.onSubmitPost(this.state.title, this.state.link);
  }

  render() {
    return (
      <div>
        <div className="form-group">
          <input className="form-control" value={this.state.title} onChange={(event) => this.onChangeTitle(event.target.value)} placeholder="Title"/>
        </div>
        <div className="form-group">
          <input className="form-control" value={this.state.link} onChange={(event) => this.onChangeLink(event.target.value)} placeholder="Link"/>
        </div>
          <button className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
      </div>
    )
  }
}
