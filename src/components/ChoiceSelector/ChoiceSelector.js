import React from "react";
import { Wrapper, Choice } from "./styles";
//Choices is an array with objects of the form
/*
    choices = [
        {
            name: "Choice A",
            idx: "0"
        }
    ]
*/
export const ChoiceSelector = ({ choices, choice, setChoice }) => {
  const content = [];

  for (const [key, value] of Object.entries(choices)) {
    content.push(
      <Choice
        key={value.id}
        selected={choice === value}
        onClick={() => {
          setChoice(value);
        }}
      >
        <h5>{value.label}</h5>
      </Choice>
    );
  }
  return <Wrapper>{content}</Wrapper>;
};
