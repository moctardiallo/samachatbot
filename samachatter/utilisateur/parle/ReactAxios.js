import React from "react";
import Support from "./support/ReactMaterialInputField";
import Transmet from "./transmet/AxiosPostRequest";

const Parle = () => {
  return (
    <div>
      <Support transmet={Transmet} />
    </div>
  );
};

export default Parle;
