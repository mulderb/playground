import React from "react";

import Button from "./components/Button/Button";

const MyContext = React.createContext({});

function App() {
  const everythingPurplePleaseee = {
    style: {
      backgroundColor: "purple"
    },
    label: "Purpleeeeeee"
  };
  const everythingGreenPleaseee = {
    style: {
      backgroundColor: "green"
    },
    label: "Greeeeeeen"
  };
  return (
    <div className="App">
      <MyContext.Provider value={everythingPurplePleaseee}>
        <Button />
      </MyContext.Provider>
    </div>
  );
}

export { MyContext };
export default App;
