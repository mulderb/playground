import React from "react";

const WorkoutContext = React.createContext({});

export let workoutData = {
  filters: [
    {
      label: "Training duur",
      options: [15, 30, 45, 60],
      unit: "minuten",
    },
  ],
  filterButton: {
    label: "Go!",
    type: "primary",
  },
  choices: [
    {
      id: 1,
      label: "Plank",
      muscleGroup: ["Core", "Buik"],
      multiplier: 2,
    },
    {
      id: 2,
      label: "Shoulder press",
      muscleGroup: ["Schouders"],
      multiplier: 1,
    },
    {
      id: 3,
      label: "Push-up",
      muscleGroup: ["Borst"],
      multiplier: 1,
    },
  ],
  exersises: [{}],
  updateExersises: (exersiseArr: Array<any>) => {
    workoutData.exersises = exersiseArr;
  },
};

export default WorkoutContext;
