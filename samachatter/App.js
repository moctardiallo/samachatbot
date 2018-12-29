import React, { Component } from "react";
import Ecoute from "./utilisateur/ecoute/ReactMaterialChip";

import ImageUtilisateur from "./utilisateur/image/profile.jpg";
import Support from "./utilisateur/parle/support/ReactMaterialInputField";
import Parle from "./utilisateur/parle/ReactAxios";

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
            {/* L'Utilisateur */}
            <Ecoute message={this.state.message} />
            <Parle au="bot" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
