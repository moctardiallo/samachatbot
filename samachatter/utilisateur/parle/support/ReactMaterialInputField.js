import React from "react";

const Support = ({ transmet }) => {
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          let target = document.getElementById("support");
          const message = {
            text: target.value
          };
          transmet(message);
          target.value = "";
        }}
      >
        <input type="text" placeholder="say something" id="support" />
      </form>
    </div>
  );
};

export default Support;
