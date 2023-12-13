import * as React from "react";

import CheckInput from "./CheckInput";

interface ExersiseChoiceProps {
  label: string;
  //   labelPosition: string;
}

const ExersiseChoice: React.FC<ExersiseChoiceProps> = ({ label }) => (
  <CheckInput label={label} />
);

export default ExersiseChoice;
