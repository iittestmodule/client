import React from 'react';
import FlashMessagesList from './flash/FlashMessagesList';
import TestInstructions from './test/TestInstructions';

class Home extends React.Component {
  render() {
    console.log(this.props.children, '<<<<<<<<<<<<<<<<<<< ');
    return (
      <div className="container">
        <FlashMessagesList />
        <TestInstructions />
      </div>
    );
  }
}

export default Home;
