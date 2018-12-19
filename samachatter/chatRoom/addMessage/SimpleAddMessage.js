const addMessage = message => {
  return (dispatch, getState) => {
    dispatch({
      type: "ADD_MESSAGE",
      message
    });
  };
};

export default addMessage;
