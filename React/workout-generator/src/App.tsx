import React from "react";
import ExersiseComponent from "./components/organism/ExersiseComponent";
import WorkoutContext, { workoutData } from "./context/WorkoutContext";

function App() {
  return (
    <div className="App">
      <WorkoutContext.Provider value={workoutData}>
        <ExersiseComponent {...workoutData} />
      </WorkoutContext.Provider>
    </div>
  );
}

export const calculateExersise = (duration: number, multiplier: number) => {
  console.log(duration * multiplier);
};

export default App;
