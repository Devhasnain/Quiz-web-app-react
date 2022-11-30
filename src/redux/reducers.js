import { createSlice } from "@reduxjs/toolkit";
import Data from "../Data.json";
export const QuizRed = createSlice({
  name: "quizreducer",
  initialState: {
    score: 0,
    current: 1,
    pre: 0,
    studnAns: "",
    checkAns: "",
    stdnPro: [],
    complete: false,
    Data,
    alert: false,
  },
  reducers: {
    SetStudnAns: (state, action) => {
      state.studnAns = action.payload;
    },
    GetQues: (state, action) => {
      if (state.studnAns == "") {
        state.alert = true;
      } else {
        state.alert = false;
        if (
          action.payload.correctAnswer.toLowerCase() ==
          state.studnAns.toLowerCase()
        ) {
          state.stdnPro.push({
            ...action.payload,
            correct: true,
            answer: state.studnAns,
          });
          state.score = state.score + 5;
          if (state.current < state.Data.length - 1) {
            state.current = state.current + 1;
            state.pre = state.pre + 1;
            state.complete = false;
          } else {
            state.current = 1;
            state.pre = 0;
            state.complete = true;
          }
        } else {
          state.stdnPro.push({
            ...action.payload,
            correct: false,
            answer: state.studnAns,
          });
          if (state.current < state.Data.length - 1) {
            state.current = state.current + 1;
            state.pre = state.pre + 1;
            state.complete = false;
          } else {
            state.current = 1;
            state.pre = 0;
            state.complete = true;
          }
        }
        state.studnAns = "";
      }
      state.checkAns = action.payload;
    },
    Retake: (state) => {
      state.score = 0;
      state.current = 1;
      state.pre = 0;
      state.studnAns = "";
      state.checkAns = "";
      state.stdnPro = [];
      state.complete = false;
    },
  },
});
export const { Retake, SetStudnAns, GetQues } = QuizRed.actions;
export default QuizRed.reducer;
