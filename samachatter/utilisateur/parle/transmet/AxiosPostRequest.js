import axios from "axios";

const Transmet = message => {
  axios
    .post("http://localhost:5000/destinataire/" + message.au, message)
    .then(response => {
      let message = response.data;
      console.log(message);
    });
};

export default Transmet;
