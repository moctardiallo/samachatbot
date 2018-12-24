import axios from "axios";

import Image from "../data/image/profile.jpg";

const addMessage = message => {
  return (dispatch, getState) => {
    axios.post("http://localhost:5000/message", message).then(response => {
      {
        let message = response.data;
        message.image = Image; // how to query images from flask-restful?
        dispatch({
          type: "ADD_MESSAGE",
          message
        });
      }
    });
  };
};

export default addMessage;
