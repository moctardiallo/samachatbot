import React from "react";

import { Chip } from "react-materialize";

const Ecoute = ({ message }) => {
  return (
    <div className="section">
      <Chip>
        <img src={message.auteur.image} />
        {message.text}
      </Chip>
    </div>
  );
};

export default Ecoute;
