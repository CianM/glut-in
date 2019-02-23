import React, { Component } from "react";
import styled from "styled-components";

import Camera from "../components/camera";
import Container from "../components/container";
import Menu from "../components/menu";
import InstallPWA from "../components/install-pwa";

import HamburgerIcon from "../images/hamburger.png";

const HamburgerButton = styled.img`
    color: var(--color-white);
    position: fixed;
    top: 1rem;
    right: 1rem;
    z-index: var(--z-index-menu-button);
    cursor: pointer;
`;

class CameraContainer extends Component {

    state = {
        menuOpen: false
    };

    openMenu = () => this.setState({ menuOpen: true });
    closeMenu = () => this.setState({ menuOpen: false });

    render() {
        const { menuOpen } = this.state;

        return (
            <Container>
                <Camera />
                { 
                    !menuOpen && (
                        <HamburgerButton src={HamburgerIcon} alt="Menu" onClick={this.openMenu} />
                    ) 
                }
                <Menu open={menuOpen} closeFn={this.closeMenu}/>
                <InstallPWA />
            </Container>
        );
    }
}

export default CameraContainer;