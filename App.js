import React, { Component } from "react";

import Navigation from "./src/Navigation";

class App extends Component {
  render() {
    const navigationPersistenceKey = null; //__DEV__ ? "eraeasdf" : null;
    return <Navigation persistenceKey={navigationPersistenceKey} />;
  }
}

export default App;
