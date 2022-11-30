import { Heading } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineDownloadDone } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Retake } from "../redux/reducers";
const StnPerformance = () => {
  const dispatct = useDispatch();
  const { stdnPro, score } = useSelector((item) => item.quizreducer);
  return (
    <div className="container">
      <div className="row p-4 align-items-center fixed-top performance-div-header">
        <div className="col p-0 text-start">
          <Heading as="h2" size="lg">
            Score: {score}
          </Heading>
        </div>
        <div className="col text-end">
          <NavLink
            className="retake-test-link"
            to="/quiz"
            onClick={() => {
              dispatct(Retake());
            }}
          >
            Retake Test
          </NavLink>
        </div>
      </div>
      <div className="row pt-5">
        <div className="col-12 my-3 col-sm-10 col-md-9 col-lg-7 mx-auto">
          {stdnPro.map((item) => {
            return (
              <div className="row performance-row my-5 p-2" key={item.id}>
                <div className="col ">
                  <div className="">
                    <Heading as="h2" size="lg">
                      {item.question}
                    </Heading>
                  </div>
                  <br />
                  <div className="">
                    <Heading
                      as="h4"
                      className="justify-content-between d-flex align-items-center"
                      size={"md"}
                    >
                      <spna>Your Choice: {item.answer}</spna>
                      <span>{item.correct ? "Correct" : "Incorrect"}</span>
                    </Heading>
                  </div>
                  <br />
                  <div className="ans-div fs-4 text-bold d-flex justify-content-between align-items-center">
                    {item.correctAnswer}
                    <MdOutlineDownloadDone color="#00d0ff" />
                  </div>
                  <br />
                  {item.incorrectAnswers.map((ans, index) => {
                    return (
                      <>
                        <div className="fs-5 ans-div" key={index}>
                          {ans}
                        </div>
                        <br />
                      </>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StnPerformance;
