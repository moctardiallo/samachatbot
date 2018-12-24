import axios from "axios";

const addMessage = message => {
  return (dispatch, getState) => {
    axios.post("http://localhost:5000/messages", message).then(response =>
      dispatch({
        type: "ADD_MESSAGE",
        message: response.data
      })
    );
  };
};

export default addMessage;
