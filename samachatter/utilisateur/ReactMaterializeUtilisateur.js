import React from "react";

import Ecoute from "./ecoute/ReactMaterialChip";
import Parle from "./parle/ReactAxios";

function Utilisateur({ ecoute, parle }) {
  return (
    <div>
      {ecoute}
      {parle}
    </div>
  );
}

export default Utilisateur;
