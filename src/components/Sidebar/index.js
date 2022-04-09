import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarLinkExt, SideBtnWrap, SidebarRoute  } from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="projects" onClick={toggle}>
                    Projects
                </SidebarLink>
                <SidebarLink to="education" onClick={toggle}>
                    Education
                </SidebarLink>
                <SidebarLink to="about" onClick={toggle}>
                    About Me
                </SidebarLink>
                <SidebarLinkExt href="https://drive.google.com/file/d/10ZnsILqjE2oHoNv0FXdOTmx7TuFqqvcj/view?usp=sharing"
                  target="_blank">
                    CV
                </SidebarLinkExt>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="contact" onClick={toggle}>
                    Contact
                </SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>

    </SidebarContainer>
  )
}

export default Sidebar
