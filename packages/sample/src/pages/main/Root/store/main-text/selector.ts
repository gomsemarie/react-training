import { selector } from "recoil";
import { mainTextState, IMainTextState } from "./atom";

export namespace MainTextSelector {
  export const textSelector = selector<IMainTextState["text"]>({
    key: "mainTextSelector.textSelector",
    get: ({ get }) => {
      const data = get(mainTextState);
      return data.text;
    },
    set: ({ set }, newValue) => {
      set(mainTextState, (s) => {
        return {
          ...s,
          text: newValue as string,
        };
      });
    },
  });
}
