import { Heading } from "@chakra-ui/react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { SetStudnAns, GetQues } from "../redux/reducers";
import Completed from "./Completed";
import { motion } from "framer-motion";
import { QuizForm } from "../JS/Animation";

const QuizChild = () => {
  const Questions = useSelector((item) => item.quizreducer.Data);
  const {pre, current, studnAns, complete } =
    useSelector((item) => item.quizreducer);
  const dispatch = useDispatch();
  return (
    <>
      {complete ? (
        <Completed />
      ) : (
        Questions.slice(pre, current).map((item) => {
          return (
            <motion.div
              variants={QuizForm}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="text-start p-3"
              key={item.id}
            >
              <Heading as="h1" size="md">
                {item.question}
              </Heading>
              <div className="d-flex align-items-center justify-content-between my-3">
                <div>
                  {item.category ? (
                    <>
                      <span>Cetagory: </span>
                      <strong>{item.category}</strong>
                    </>
                  ) : (
                    ""
                  )}
                </div>
                <div>
                  {item.difficulty ? (
                    <>
                      <span>Difficulty: </span>
                      <strong>{item.difficulty}</strong>
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="my-3">
                <div
                  onClick={() => dispatch(SetStudnAns(item.correctAnswer))}
                  className="fs-5 ans-option p-2 my-2"
                >
                  {item.correctAnswer}
                </div>
                {item.incorrectAnswers.map((ans, index) => {
                  return (
                    <div
                      className="fs-5 ans-option p-2 my-2"
                      onClick={() => dispatch(SetStudnAns(ans))}
                      key={index}
                    >
                      {ans}
                    </div>
                  );
                })}
              </div>
              <div className="d-flex justify-content-between align-items-center pt-2">
                <span>{studnAns ? `Your Choice: ${studnAns}` : ""}</span>
                <button
                  className="submit-ans"
                  onClick={() => dispatch(GetQues(item))}
                >
                  Done
                </button>
              </div>
            </motion.div>
          );
        })
      )}
    </>
  );
};

export default QuizChild;
