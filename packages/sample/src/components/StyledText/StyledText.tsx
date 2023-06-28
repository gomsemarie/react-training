/*------------------------------------------------------------------------------------------------------------------------------------------
 * StyledText.tsx
 * WRITER : 최정근
 * DATE : 2022-06-26
 * DISCRIPTION : 
 * TYPE : Component
 * 개정이력 :
--------------------------------------------------------------------------------------------------------------------------------------------*/
import React from "react";
import "./StyledText.scss";

interface StyledTextProps {
  text: string[];
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
export function StyledText(props: StyledTextProps) {
  const { text, style } = props;
  return (
    <div data-component="styledText">
      <h1 style={style}>
        {text.map((t, i) => {
          return (
            <span
              key={`styled-text-${i}`}
              className={i % 2 ? "dark" : "light"}
            >{`${t} `}</span>
          );
        })}
      </h1>
    </div>
  );
}

namespace StyledText {}

export default StyledText;
