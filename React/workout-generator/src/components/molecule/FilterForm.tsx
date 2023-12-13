import React, { useState } from "react";
import _ from "lodash";

import DropSelect from "../atom/DropSelect";
import Button from "../atom/Button";

import { calculateExersise } from "../../App";

interface FilterFormProps {
  filters: Array<FiltersProps>;
  button: FilterButtonProps;
}
interface FiltersProps {
  label: string;
  options: Array<number>;
  unit: string;
}
interface FilterButtonProps {
  label: string;
  type: string;
}

const FilterForm: React.FC<FilterFormProps> = ({ filters, button }) => {
  const [time, setTime] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log("time", time);
    console.log("e", e);
  };

  const getFilters = () => {
    return filters.map((filter) => {
      return (
        <div key={_.uniqueId("filter_")}>
          <p>{filter.label}</p>
          <DropSelect
            options={filter.options}
            unit={filter.unit}
            // onChange={(e) => console.log(e)}
          />
        </div>
      );
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      {getFilters()}
      <Button
        label={button.label}
        type="submit"
        action={() => calculateExersise(45, 1.3)}
      />
    </form>
  );
};

export default FilterForm;
