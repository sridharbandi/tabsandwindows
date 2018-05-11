import React from 'react';
import Content from '../Content/Content';

const newwindow = (props) => {
    const title = props.location.pathname.toString().includes('window') ? 'Window' : 'Tab';
    return <Content name={title} id={props.match.params.id} />
}

export default newwindow;