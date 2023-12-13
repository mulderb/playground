import React from "react";

import FilterForm from "../molecule/FilterForm";
import ExersiseChoiceList from "../molecule/ExersiseChoiceList";

// import ExersiseChoice from "../atom/ExcersiseChoice";

interface ExersiseComponentProps {
  choices: Array<object>;
  filters: Array<any>;
  filterButton: any;
}

const ExersiseComponent: React.FC<ExersiseComponentProps> = (props) => {
  return (
    <>
      <ExersiseChoiceList choices={props.choices} />
      <FilterForm filters={props.filters} button={props.filterButton} />
    </>
  );
};

export default ExersiseComponent;
