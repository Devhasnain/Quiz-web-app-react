import { Heading, Input } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useContext, useState } from "react";
import { UserProgress } from "../Store/UserProgress";
import { InfoForm } from "../JS/Animation";

const GetInfo = () => {
  const { setUser } = useContext(UserProgress);
  const [info, setInfo] = useState({ name: "", email: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo((pre) => {
      return { ...pre, [name]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(info);
  };
  return (
    <motion.div
      variants={InfoForm}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="d-flex align-items-center justify-content-center"
      style={{ height: "90%" }}
    >
      <div>
        <div>
          <Heading as="h2" size="2xl">
            Before starting let us know you!
          </Heading>
        </div>
        <br />
        <br />
        <form onSubmit={handleSubmit}>
          <Input
            size="lg"
            width="60%"
            name="name"
            value={info.name}
            onChange={handleChange}
            borderColor="#00d0ff"
            focusBorderColor="#00d0ff"
            mx="auto"
            placeholder="Full Name *"
            type="text"
            required
            minLength={3}
          />
          <br />
          <br />
          <Input
            size="lg"
            width="60%"
            name="email"
            value={info.email}
            onChange={handleChange}
            borderColor="#00d0ff"
            focusBorderColor="#00d0ff"
            mx="auto"
            placeholder="Your Email*"
            type="email"
            required
          />
          <br />
          <br />
          <br />
          <motion.button
            initial={{ scale: 1 }}
            whileTap={{ scale: 0.8 }}
            type="text"
            className="form-submite"
          >
            Submit
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
};

export default GetInfo;
