import React, { useContext } from "react";
import { UserProgress } from "../Store/UserProgress";
import GetInfo from "./GetInfo";
import QuizChild from "./QuizChild";
import { AnimatePresence } from "framer-motion";
import { Heading } from "@chakra-ui/react";
import { useSelector } from "react-redux";
const Quiz = () => {
  const { user } = useContext(UserProgress);
  const { score, Data, stdnPro, complete } = useSelector(
    (item) => item.quizreducer
  );
  return (
    <>
      <div className="container-lg p-0">
        <div className="row fixed-top">
          {user ? (
            complete ? (
              ""
            ) : (
              <div className="d-flex justify-content-evenly align-items-center">
                <Heading as="h2" size="xl">
                  {user.name}
                </Heading>
                <div className="d-flex align-items-center justify-content-center">
                  <Heading className="mx-3" as="h2" size="md">
                    Q/ {stdnPro.length}/{Data.length}
                  </Heading>
                  <Heading as="h2" size="lg">
                    S/ {score}
                  </Heading>
                </div>
              </div>
            )
          ) : (
            ""
          )}
        </div>
        <div className="row quiz-div-row pt-5">
          <div className="col-lg-6 col-md-7 col-sm-10 mx-auto text-center">
            <div className="quiz-div">
              <div className="quiz-form-div">
                <AnimatePresence>
                  {user ? <QuizChild /> : <GetInfo />}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quiz;
