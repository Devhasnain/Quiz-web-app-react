import { configureStore } from "@reduxjs/toolkit";
import QuizRed from "./reducers";
export default configureStore({
  reducer: {
    quizreducer: QuizRed,
  },
});
