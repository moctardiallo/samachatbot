const initState = {
  messages: [
    {
      id: "user",
      content: "Hello"
    }
  ]
};

const reducer = (state = initState, action) => {
  let newMessages = [...state.messages];
  switch (action.type) {
    case "ADD_MESSAGE":
      newMessages.push(action.message);
    // if (newMessages.length > 6) newMessages.shift(1);
  }
  console.log(newMessages);
  return {
    ...state,
    messages: newMessages
  };
};

export default reducer;
