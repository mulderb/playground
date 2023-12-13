import * as React from "react";
import _ from "lodash";

import ExersiseChoice from "../atom/ExcersiseChoice";

interface ExersiseChoiceListProps {
  choices: Array<any>;
}

const ExersiseChoiceList: React.FC<ExersiseChoiceListProps> = ({ choices }) => {
  const getChoices = () => {
    return choices.map((option) => {
      console.log(option.label);
      return (
        <ExersiseChoice label={option.label} key={_.uniqueId("choice_")} />
      );
    });
  };
  return <div>{getChoices()}</div>;
};

export default ExersiseChoiceList;
