import React from "react";
import Support from "./support/ReactMaterialInputField";
import Transmet from "./transmet/AxiosPostRequest";

const Parle = ({ au }) => {
  return (
    <div>
      <Support transmet={Transmet} au={au} />
    </div>
  );
};

export default Parle;
