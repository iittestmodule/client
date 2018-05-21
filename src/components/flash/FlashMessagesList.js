import React from 'react';
import FlashMessage from './FlashMessage';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteFlashMessage } from '../../actions/flashMessages';

class FlashMessagesList extends React.Component {
  render() {
    const { messages, deleteFlashMessage } = this.props;

    if (!messages.length) {
      return null;
    }

    const flashMessages = messages.map(message =>
      <FlashMessage key={message.id} message={message} deleteFlashMessage={deleteFlashMessage} />
    );
    return (
      <div>{flashMessages}</div>
    );
  }
}

FlashMessagesList.propTypes = {
  messages: PropTypes.array.isRequired,
  deleteFlashMessage: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    messages: state.flashMessages
  }
}

export default connect(mapStateToProps, { deleteFlashMessage })(FlashMessagesList);
