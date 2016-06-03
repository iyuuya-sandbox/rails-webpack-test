var React = require('react');
var ReactDom = require('react-dom');

class Comment extends React.Component {
  render() {
    return (
      <div>Hello, I am comment.</div>
    );
  }
}

ReactDom.render(
  <Comment />,
  document.getElementById('comment-container')
);
