import React from "react";
import { Card } from "../../theme/GlobalComponents";
const GameCard = (props) => {
  const { label, x, y, showLabel, hide, sideLength } = props;
  const fontSize = (1 / 5) * sideLength;
  return (
    <>
      {!hide && (
        <Card
          {...props}
          style={{
            position: "absolute",
            bottom: y,
            left: x,
            border: 0,
            height: sideLength,
            width: sideLength,
            fontSize: fontSize,
          }}
        >
          <h2
            style={{
              fontSize: { fontSize },
            }}
          >
            {showLabel ? label : "?"}
          </h2>
        </Card>
      )}
    </>
  );
};

export default GameCard;
