const addMessage = message => {
  return (dispatch, getState) => {
    fetch("http://localhost:5000/messages")
      .then(response => {
        return response.json();
      })
      .then(json => {
        console.log(JSON.stringify(json));
      });
    dispatch({
      type: "ADD_MESSAGE",
      message
    });
  };
};

export default addMessage;
