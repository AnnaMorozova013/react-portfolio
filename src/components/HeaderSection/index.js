import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import {
  HeaderContainer,
  HeaderBg,
  VideoBg,
  HeaderContent,
  HeaderH1,
  HeaderP,
  HeaderBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeaderSectionElements";
import { Button } from "../Buttons";

const HeaderSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeaderContainer id="home">
      <HeaderBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeaderBg>
      <HeaderContent>
        <HeaderH1>Hi! I'm Anna.</HeaderH1>
        <HeaderP>
          With background in travel and event business, project management and newly-found passion for frontend development, I am looking forward to bring my career to the next level.
        </HeaderP>
        <HeaderBtnWrapper>
          <Button
            to="projects"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            See my projects {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeaderBtnWrapper>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default HeaderSection;
