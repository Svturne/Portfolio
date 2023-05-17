import React from "react";
import {
  PaddingContainer,
  FlexContainer,
  Heading,
  BlueText,
  ParaText,
  Particle,
} from "./styled-components/Global.styled";
import {
  ShowcaseImageCard,
  ShowcaseParticleContainer,
  IconContainer,
} from "./styled-components/Showcase.styles";
import ShowcaseImg from "../assets/showcase-img.png";
import BackgroundImg from "../assets/particle.png";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeInLeftVariant, fadeInRightVariant } from "../utils/Variants";

const Showcase = () => {
  return (
    <PaddingContainer
      left="3%"
      right="10%"
      top="10%"
      bottom="10%"
      responsiveLeft="1rem"
      responsiveRight="1rem"
    >
      <FlexContainer align="center" fullWidthChild>
        <motion.div
          variants={fadeInLeftVariant}
          initial="hidden"
          whileInView="visible"
        >
          <Heading as="h4" size="h4">
            Hello!
          </Heading>

          <Heading as="h1" size="h1" top="0.5rem" bottom="1rem">
            I'm <BlueText>Mehdi</BlueText>
          </Heading>

          <Heading as="h3" size="h3">
            I'm a <BlueText>Fullstack Mobile Developer</BlueText>
          </Heading>

          <ParaText as="p" top="2rem" bottom="4rem">
            Hello, my name is Mehdi and I am a Fullstack Mobile Developer with 6
            months of experience in creating and designing user-friendly react
            native applications.
          </ParaText>

          <FlexContainer gap="20px" responsiveFlex>
            <IconContainer>
              <BsLinkedin
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/mehdi-badsi-949977267/",
                    "_blank"
                  );
                }}
              />
            </IconContainer>

            <IconContainer>
              <BsGithub
                onClick={() => {
                  window.open("https://github.com/Svturne", "_blank");
                }}
              />
            </IconContainer>
          </FlexContainer>
        </motion.div>

        <FlexContainer justify="flex-end">
          <ShowcaseParticleContainer
            as={motion.div}
            variants={fadeInRightVariant}
            initial="hidden"
            whileInView="visible"
          >
            <ShowcaseImageCard background={BackgroundImg}>
              <img src={ShowcaseImg} alt="showcase" />
            </ShowcaseImageCard>

            <Particle
              src={BackgroundImg}
              initialTop="-80px"
              initialLeft="20px"
              rotate="60deg"
            />
            <Particle
              src={BackgroundImg}
              initialTop="50px"
              initialRight="-70px"
              rotate="0deg"
            />
            <Particle
              src={BackgroundImg}
              initialBottom="10px"
              initialLeft="-70px"
              rotate="50deg"
            />
          </ShowcaseParticleContainer>
        </FlexContainer>
      </FlexContainer>
    </PaddingContainer>
  );
};

export default Showcase;
