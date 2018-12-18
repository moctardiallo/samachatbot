import React from "react";

import { Chip } from "react-materialize";
import Image from "./image/profile.jpg";

const Message = ({ message }) => {
  return (
    <div className="section">
      <Chip>
        <img src={Image} />
        {message}
      </Chip>
    </div>
  );
};

export default Message;
