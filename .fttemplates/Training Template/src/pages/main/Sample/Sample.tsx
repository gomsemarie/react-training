/*------------------------------------------------------------------------------------------------------------------------------------------
 * Sample.tsx
 * WRITER : <FTName | camelcase>
 * DATE : 2023-xx-xx
 * DISCRIPTION : Sample 페이지
 * TYPE : Component
 * 개정이력 :
--------------------------------------------------------------------------------------------------------------------------------------------*/
import React from "react";
import "./Sample.scss";
import { StyledText } from "@/components/StyledText/StyledText";

interface SampleProps {}

function Sample(props: SampleProps) {
  /* ――――――――――――――― Variable ――――――――――――――― */
  /* Props ――――― */
  const {} = props;
  /* State ――――― */
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
        <p className="recoil-data">
          여기에 Textarea와 연동된 Recoil state의 값을 출력해 주세요
        </p>
      </div>
    </div>
  );
}

namespace Sample {}

export default Sample;
