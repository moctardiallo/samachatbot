const initState = {
  messages: [
    {
      id: 1,
      content: "Hello"
    },
    {
      id: 2,
      content: "Hi"
    },
    {
      id: 3,
      content: "Hello"
    },
    {
      id: 4,
      content: "Hi"
    },
    {
      id: 5,
      content: "Hello"
    },
    {
      id: 6,
      content: "hi"
    },
    {
      id: 7,
      content: "Hey"
    }
  ]
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_MESSAGE":
      console.log("message added", action.message);
  }
  return state;
};

export default reducer;
