/*------------------------------------------------------------------------------------------------------------------------------------------
 * Sample.tsx
 * WRITER : 최정근
 * DATE : 2023-06-25
 * DISCRIPTION : Sample 페이지
 * TYPE : Component
 * 개정이력 :
--------------------------------------------------------------------------------------------------------------------------------------------*/
import React from "react";
import "./Sample.scss";
import { StyledText } from "@/components/StyledText/StyledText";
import { useRecoilValue } from "recoil";
import { MainTextSelector } from "../Q4/store/main-text/selector";

interface SampleProps {}

function Sample(props: SampleProps) {
  /* ――――――――――――――― Variable ――――――――――――――― */
  /* Props ――――― */
  const {} = props;
  /* State ――――― */
  const text = useRecoilValue(MainTextSelector.textSelector);
  /* Const ――――― */
  /* API ――――――― */

  /* ―――――――――――――――― Method ―――――――――――――――― */

  /* ―――――――――――――― Use Effect ―――――――――――――― */

  /* ―――――――――――――――― Return ―――――――――――――――― */
  return (
    <div data-component="sample">
      <div className="title-box">
        <StyledText text={["Sample", "Page"]} />
      </div>
      <div className="content-box">
        <p className="recoil-data">{text}</p>
      </div>
    </div>
  );
}

namespace Sample {}

export default Sample;
