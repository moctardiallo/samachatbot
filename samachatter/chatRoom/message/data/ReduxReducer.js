import Image from "../data/image/profile.jpg";

const initState = {
  messages: [
    {
      id: "user",
      content: "Hello",
      image: Image
    }
  ]
};

const messageData = (state = initState, action) => {
  let newMessages = [...state.messages];
  switch (action.type) {
    case "ADD_MESSAGE":
      newMessages.push(action.message);
    // if (newMessages.length > 6) newMessages.shift(1);
  }
  return {
    ...state,
    messages: newMessages
  };
};

export default messageData;
