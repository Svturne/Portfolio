import React from "react";

import {
  PaddingContainer,
  Heading,
  FlexContainer,
  ParaText,
  IconContainer,
  Button,
} from "../styled-components/Global.styled";

import {
  ProjectContentContainer,
  ProjectImageContainer,
  TechStackCard,
  ProjectImage,
} from "../styled-components/MyProjects.styled";

import { FaGithub } from "react-icons/fa";

import Project2 from "../../assets/Project2.png";
import { motion } from "framer-motion";
import { fadeInLeftVariant, fadeInRightVariant } from "../../utils/Variants";

const ProjectF = ({ rowReverse }) => {
  return (
    <FlexContainer rowReverse={rowReverse ? true : false} fullWidthChild>
      <ProjectContentContainer
        as={motion.div}
        variants={rowReverse ? fadeInRightVariant : fadeInLeftVariant}
        initial="hidden"
        whileInView="visible"
      >
        <FlexContainer align="center" gap="1rem">
          <Heading as="h3" size="h3" bottom="1rem">
            FlashLight App
          </Heading>
          <IconContainer color="blue" size="2rem">
            <FaGithub />
          </IconContainer>
        </FlexContainer>

        <PaddingContainer top="1rem">
          <FlexContainer gap="1.5rem">
            <TechStackCard>React Native</TechStackCard>
          </FlexContainer>
        </PaddingContainer>

        <ParaText top="1.5rem" bottom="2rem">
          My flashlight application is designed to provide a convenient and
          reliable solution for your lighting needs. With just a simple tap on
          the central button, you can easily turn on and off the flashlight
          feature of your phone's camera, instantly illuminating your
          surroundings. In addition to the basic flashlight functionality, my
          application offers an extra feature to ensure your safety. With the
          dedicated SOS button, you can send visual distress signals by
          activating a series of quick and powerful light pulses. This can be
          incredibly useful in emergency situations where you need to attract
          attention or communicate a distress signal. Experience the convenience
          and added safety of our flashlight application, making it your go-to
          solution for all your lighting needs.
        </ParaText>

        <Button
          onClick={() => {
            window.open("https://github.com/Svturne/FlashLight", "_blank");
          }}
        >
          Visit Repo
        </Button>
      </ProjectContentContainer>
      <ProjectImageContainer
        justify={rowReverse ? "flex-start" : "flex-end"}
        as={motion.div}
        variants={rowReverse ? fadeInLeftVariant : fadeInRightVariant}
        initial="hidden"
        whileInView="visible"
      >
        <ProjectImage src={Project2} alt="project" />
      </ProjectImageContainer>
    </FlexContainer>
  );
};

export default ProjectF;
