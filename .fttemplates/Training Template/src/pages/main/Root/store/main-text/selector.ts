import { selector } from "recoil";
import { mainTextState, IMainTextState } from "./atom";

export namespace MainTextSelector {
  export const anyKeySelector = selector<IMainTextState["anyKey"]>({
    key: "mainTextSelector.anyKeySelector",
    get: ({ get }) => {
      const data = get(mainTextState);
      return data.anyKey;
    },
    set: ({ set }, newValue) => {
      set(mainTextState, (s) => {
        return {
          ...s,
          anyKey: newValue as string,
        };
      });
    },
  });
}
