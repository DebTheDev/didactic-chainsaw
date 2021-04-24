import React from 'react';
const ContentHandler = ({type, content}) => {
    return (type === "Text") ? <p>{content}</p> : <img src={content} />;
};
export default ContentHandler;
