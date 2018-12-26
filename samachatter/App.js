import React, { Component } from "react";
import Ecoute from "./utilisateur/ecoute/ReactMaterialChip";

import ImageUtilisateur from "./utilisateur/image/profile.jpg";

class App extends Component {
  state = {
    message: {
      text: "Je vous recois!",
      auteur: {
        image: ImageUtilisateur
      }
    }
  };

  render() {
    return (
      <div className="App container">
        <div className="row">
          <div className="col l8">
            <Ecoute message={this.state.message} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
