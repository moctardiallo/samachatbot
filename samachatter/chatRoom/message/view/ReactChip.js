import React from "react";

import { Chip } from "react-materialize";

const Message = ({ text, image }) => {
  return (
    <div className="section">
      <Chip>
        <img src={image} />
        {text}
      </Chip>
    </div>
  );
};

export default Message;
