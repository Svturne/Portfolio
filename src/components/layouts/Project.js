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

import Project1 from "../../assets/Project1.png";
import { motion } from "framer-motion";
import { fadeInLeftVariant, fadeInRightVariant } from "../../utils/Variants";

const Project = ({ rowReverse }) => {
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
            Medical App
          </Heading>
          <IconContainer color="blue" size="2rem">
            <FaGithub />
          </IconContainer>
        </FlexContainer>

        <PaddingContainer top="1rem">
          <FlexContainer gap="1.5rem">
            <TechStackCard>React Native</TechStackCard>
            <TechStackCard>Redux</TechStackCard>
            <TechStackCard>Async storage</TechStackCard>
            <TechStackCard>MongoDB</TechStackCard>
          </FlexContainer>
        </PaddingContainer>

        <ParaText top="1.5rem" bottom="2rem">
          My groundbreaking medical application aims to simplify patient
          management for doctors by providing a comprehensive platform to
          consolidate all important information. The application will allow
          doctors to easily create detailed patient profiles, encompassing all
          their personal and medical information. Furthermore, my application
          will enable doctors to record each disease and visit associated with
          the patient, accompanied by photos for each visit, in order to
          facilitate ongoing disease monitoring.
        </ParaText>

        <Button
          onClick={() => {
            window.open("https://github.com/Svturne/Med", "_blank");
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
        <ProjectImage src={Project1} alt="project" />
      </ProjectImageContainer>
    </FlexContainer>
  );
};

export default Project;
