const initState = {
  messages: [
    {
      id: "user1",
      content: "Hello"
    }
  ]
};

const reducer = (state = initState, action) => {
  let newMessages = [...state.messages];
  switch (action.type) {
    case "ADD_MESSAGE":
      newMessages.push({
        id: 8,
        content: action.message
      });
    // if (newMessages.length > 6) newMessages.shift(1);
  }
  return {
    ...state,
    messages: newMessages
  };
};

export default reducer;
