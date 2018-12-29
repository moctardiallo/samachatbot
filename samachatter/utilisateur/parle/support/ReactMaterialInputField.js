import React from "react";

const Support = ({ transmet, au }) => {
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          let target = document.getElementById("support");
          const message = {
            tu_as_dit: target.value,
            au: au
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
