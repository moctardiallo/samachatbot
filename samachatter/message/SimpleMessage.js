import React, { Component } from "react";

import { Chip } from "react-materialize";
import Image from "./image/profile.jpg";

export default class Message extends Component {
  render() {
    return (
      <div>
        <Chip>
          <img src={Image} />
          Hello
        </Chip>
      </div>
    );
  }
}
