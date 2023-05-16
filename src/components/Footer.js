import React from "react";
import {
  PaddingContainer,
  Heading,
  BlueText,
  FlexContainer,
  Button,
} from "./styled-components/Global.styled";

import {
  ContactForm,
  FormLabel,
  FormInput,
} from "./styled-components/Footer.styled";
import { motion } from "framer-motion";
import { fadeInBottomVariant } from "../utils/Variants";
import { IconContainer } from "./styled-components/Showcase.styles";
import { BsMailbox, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <PaddingContainer top="5%" bottom="10%">
      <Heading
        as={motion.h4}
        variants={fadeInBottomVariant}
        initial="hidden"
        whileInView="visible"
        size="h4"
        align="center"
      >
        MY CONTACT
      </Heading>

      <Heading
        as={motion.h4}
        variants={fadeInBottomVariant}
        initial="hidden"
        whileInView="visible"
        size="h2"
        align="center"
        top="0.5rem"
      >
        Contact <BlueText>Me Here</BlueText>
      </Heading>

      <PaddingContainer top="3rem">
        <FlexContainer justify="center">
          <IconContainer>
            <BsMailbox
              onClick={() => {
                var email = "mehdi.bad@outlook.com";
                var mailto_link = "mailto:" + email;
                window = window.open(mailto_link, "emailWindow");
                if (window && window.open && !window.closed) window.close();
              }}
            />
          </IconContainer>
        </FlexContainer>
      </PaddingContainer>
    </PaddingContainer>
  );
};

export default Footer;
