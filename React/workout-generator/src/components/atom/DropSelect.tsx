import * as React from "react";
import _ from "lodash";

interface DropSelectProps {
  options: Array<number>;
  unit: string;
  // onChange: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const DropSelect: React.FC<DropSelectProps> = ({ options, unit }) => {
  const getOptions = () => {
    return options.map((option) => {
      return (
        <option key={_.uniqueId("option_")}>
          {option} {unit}
        </option>
      );
    });
  };
  return <select onChange={(e) => console.log(e)}>{getOptions()}</select>;
};

export default DropSelect;
