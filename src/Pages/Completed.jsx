import { Heading } from "@chakra-ui/react";
import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Retake } from "../redux/reducers";
import { UserProgress } from "../Store/UserProgress";

const Completed = () => {
  const { user } = useContext(UserProgress);
  const { score } = useSelector((item) => item.quizreducer);
  const CheckScore = (score) => {
    if (score >= 100 && score <= 150) {
      return "You are Awsome ";
    } else if (score >= 50 && score <= 99) {
      return "You Performed Good ";
    } else {
      return "You can make it better";
    }
  };
  const dispatch = useDispatch();
  return (
    <div
      className="p-2 d-flex justify-content-center align-items-center"
      style={{ height: "100%" }}
    >
      <div>
        <Heading as="h1" size="2xl" color="#00d0ff">
          {user.name}
        </Heading>
        <br />
        <Heading as="h3" size="md">
          {CheckScore(score)}
        </Heading>
        <br />
        <Heading as="h3" size="xl">
          Score
        </Heading>
        <Heading as="h3" size="lg">
          {score}
        </Heading>
        <br />
        <NavLink to="/yourperformance" className="performance-link">
          Check you performence
        </NavLink>
        <br />
        <br />
        <br />
        <button
          className="retake-test-btn"
          onClick={() => {
            dispatch(Retake());
          }}
        >
          Retake Test
        </button>
        <br />
      </div>
    </div>
  );
};

export default Completed;
