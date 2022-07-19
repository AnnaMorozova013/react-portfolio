import React from "react";
import {
  SliderWrapper,
  SlidePrev,
  SlideNext,
  InfoContainerAbout,
  InfoWrapperAbout,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Heading2,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
  GitIcon,
  ExtIcon,
} from "./InfoElements";
import { Button, ButtonExt } from "../Buttons";

const AboutMe = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  darkText,
  description,
  headline,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
  projectsSliderNext,
  projectsSliderPrev,
  educationSliderNext,
  educationSliderPrev,
  github,
  githubLink,
  deploy,
  deployLink,
  certificate,
  certificateLink,
}) => {
  return (
    <>
      <InfoContainerAbout lightBg={lightBg} id={id}>
          <InfoWrapperAbout>
            <InfoRow imgStart={imgStart}>
              <Column1>
                <TextWrapper>
                  <TopLine>{topLine}</TopLine>
                  <Heading lightText={lightText}>{headline}</Heading>
                  <Subtitle darkText={darkText}>{description}</Subtitle>
                  <Heading2 lightText={lightText}>Work objectives</Heading2>
                  <Subtitle darkText={darkText}>I would be very motivated to work in a company that:<br/><br/>

<li>secures a <b>good onboarding</b> and has experience with juniors and career changers </li><br/>
<li>provides <b>space for growth</b> and support of individual talent</li><br/>
<li>has <b>meaningful</b> projects</li><br/>
<li>has a healthy <b>company culture</b> and flexible working hours with possibility for remote work</li><br/>
                  </Subtitle>
                </TextWrapper>
                <BtnWrap>
                </BtnWrap>
              </Column1>
              <Column2>
                <ImgWrap>
                  <Img src={img} alt={alt} imgStart={imgStart} />
                </ImgWrap>
              </Column2>
            </InfoRow>
          </InfoWrapperAbout>
      </InfoContainerAbout>
    </>
  );
};

export default AboutMe;
