import React, { Component } from "react";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePostChange = this.handlePostChange.bind(this);
  }

  handlePostChange(e) {
    const content = e.target.value;

    this.setState(() => {
      return { content };
    });
  }

  handleSubmit() {
    console.log(this.state);
    alert(this.state.content);
  }

  render() {
    return (
      <div>
        <textarea
           value={this.state.content}
          onChange={this.handlePostChange}
          placeholder="What`s on your mind?"
        />{" "}
        <p>
          {" "}
          <button onClick={this.handleSubmit}>Post</button>
        </p>
      </div>
    );
  }
}

export default Content;
