import React from 'react';

const styles = {
    position: 'absolute',
    right: '0',
    bottom: '0',
    left: '0',
    padding: '1rem',
    backgroundColor: '#efefef',
    textAlign: 'center',
};

const Footer = () => (
    <div styles={{...styles}}>&copy; DrawingBox</div>
);

export default Footer;
