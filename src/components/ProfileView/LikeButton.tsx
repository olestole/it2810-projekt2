import React, { Component } from 'react';

interface Likefunction {
  like: () => void;
}

export default class LikeButton extends Component<Likefunction> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return <button onClick={this.props.like}>Like</button>;
  }
}
