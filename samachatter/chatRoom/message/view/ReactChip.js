import React from "react";

import { Chip } from "react-materialize";

const MessageView = ({ text, image }) => {
  return (
    <div className="section">
      <Chip>
        <img src={image} />
        {text}
      </Chip>
    </div>
  );
};

export default MessageView;
