import React, { Component, StatusBar } from "react";

import Navigation from "./src/Navigation";
import Store from "./src/undux/store";

class App extends Component {
  render() {
    const navigationPersistenceKey = null; //__DEV__ ? "eraeasdf" : null;
    return (
      <Store.Container>
        <Navigation persistenceKey={navigationPersistenceKey} />
      </Store.Container>
    );
  }
}

export default App;
