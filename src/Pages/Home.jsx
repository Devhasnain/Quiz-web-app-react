import { Heading, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [isSmallScreen] = useMediaQuery("(max-width:576px)");
  console.log(isSmallScreen);
  return (
    <div className="container-lg p-0">
      <div className="row hero-row">
        <div className="col-9  text-center">
          <Heading as="h1" size="4xl" color="#00d0ff">
            Get a Quiz {":)"}
          </Heading>
          <br />
          <Text fontSize="19px" color="#00d0ff">
            These guides provide instructions for performing a static deployment
            of your Vite site. Vite also supports Server Side Rendering. SSR
            refers to front-end frameworks that support running the same
            application in Node.js,
            {isSmallScreen ? (
              ""
            ) : (
              <span>
                pre-rendering it to HTML, and finally hydrating it on the
                client. Check out the SSR Guide to learn about this feature. On
                the other hand.
              </span>
            )}
          </Text>
          <br />
          <br />
          <NavLink to="/quiz" className="get-started-btn">
            Get Started
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
