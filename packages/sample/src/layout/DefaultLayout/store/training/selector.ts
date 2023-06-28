import { selector } from "recoil";
import { trainingState, ITrainingState } from "./atom";

export namespace TrainingSelector {
  export const nowStageSelector = selector<ITrainingState["nowStage"]>({
    key: "trainingSelector.nowStageSelector",
    get: ({ get }) => {
      const data = get(trainingState);
      return data.nowStage;
    },
    set: ({ set }, newValue) => {
      set(trainingState, (s) => {
        if ((newValue as number) < 0) {
          newValue = 0;
        }

        return {
          ...s,
          nowStage: newValue as number,
        };
      });
    },
  });
}
