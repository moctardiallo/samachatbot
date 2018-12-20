const initState = {
  messages: [
    {
      id: 1,
      content: "Hello"
    },
    {
      id: 2,
      content: "Hi"
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
  }
  return {
    ...state,
    messages: newMessages
  };
};

export default reducer;
