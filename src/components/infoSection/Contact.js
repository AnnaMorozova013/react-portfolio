import React from "react";
import {
  InfoContainerContact,
  InfoWrapperContact,
  TextWrapper,
  TopLine,
  Heading,
  Heading2,
  Subtitle,
} from "./InfoElements";

const Contact = ({
  lightBg,
  id,
  topLine,
  topLine2,
  lightText,
  darkText,
  description,
  headline,
  headline2,
}) => {
  return (
    <>
      <InfoContainerContact lightBg={lightBg} id={id}>
          <InfoWrapperContact>
                <TextWrapper>
                  <TopLine>{topLine}</TopLine>
                  <Heading lightText={lightText}>{headline}</Heading>
                  <TopLine>{topLine2}</TopLine>
                  <Heading lightText={lightText}>{headline2}</Heading>
                  <Subtitle darkText={darkText}>{description}</Subtitle>
                </TextWrapper>
          </InfoWrapperContact>
      </InfoContainerContact>
    </>
  );
};

export default Contact;
