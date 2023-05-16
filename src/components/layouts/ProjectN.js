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

import Project3 from "../../assets/Project3.png";
import { motion } from "framer-motion";
import { fadeInLeftVariant, fadeInRightVariant } from "../../utils/Variants";

const ProjectN = ({ rowReverse }) => {
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
            DoIt App
          </Heading>
          <IconContainer color="blue" size="2rem">
            <FaGithub />
          </IconContainer>
        </FlexContainer>

        <PaddingContainer top="1rem">
          <FlexContainer gap="1.5rem">
            <TechStackCard>React Native</TechStackCard>
            <TechStackCard>React Native Gesture</TechStackCard>
            <TechStackCard>Async Storage</TechStackCard>
          </FlexContainer>
        </PaddingContainer>

        <ParaText top="1.5rem" bottom="2rem">
          Introducing DoIt, the ultimate productivity app designed to help you
          stay organized and never forget a task again. With DoIt, you can
          easily add notes to capture important information, ensuring that
          nothing slips through the cracks. The app provides a user-friendly
          interface where you can effortlessly create and manage your notes.
          Simply enter your desired text and save it with a single tap. But
          that's not all - we've made it even more convenient for you. By
          swiping right or left on a note, you can quickly modify or delete it,
          allowing for seamless editing and organization. What sets DoIt apart
          is the ability to add descriptions to each note. By simply tapping on
          a note, you can provide additional context or details to enhance your
          productivity. This feature ensures that you have all the necessary
          information at your fingertips, empowering you to tackle tasks
          efficiently and effectively. Experience the power of DoIt and take
          control of your tasks with ease and convenience.
        </ParaText>

        <Button
          onClick={() => {
            window.open("https://github.com/Svturne/DoIt", "_blank");
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
        <ProjectImage src={Project3} alt="project" />
      </ProjectImageContainer>
    </FlexContainer>
  );
};

export default ProjectN;
