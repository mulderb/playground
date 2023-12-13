import * as React from "react";

interface TextInputProps {
  PlaceholderText: string;
}

const TextInput: React.FC<TextInputProps> = ({ PlaceholderText }) => (
  <input type="text" placeholder={PlaceholderText} />
);

export default TextInput;
