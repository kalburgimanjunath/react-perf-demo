import { Component } from 'react';

class LoadFile extends Component {
  state = {
    file: null
  }

  componentDidMount() {
    fetch(this.props.url)
      .then(res => res.text())
      .then(file => {
        this.setState({ file })
      })
  }

  render() {
    const { file } = this.state;

    return (
      file && this.props.children(file)
    );
  }
}

export default LoadFile;