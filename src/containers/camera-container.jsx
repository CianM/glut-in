import React, { Component } from "react";
import styled from "styled-components";

import Camera from "../components/camera";
import Container from "../components/container";
import Menu from "../components/menu";
import Result from "../components/result";

import HamburgerIcon from "../images/hamburger.svg";

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
        imageData: null,
        menuOpen: false
    };

    setImageData = imageData => this.setState({ imageData });

    openMenu = () => this.setState({ menuOpen: true });
    closeMenu = () => this.setState({ menuOpen: false });

    render() {
        const { imageData, menuOpen } = this.state;

        return (
            <Container>
                { !imageData && (<Camera onImageCapture={this.setImageData} />) }
                { imageData && (<Result image={imageData} />) }
                { 
                    !menuOpen && (
                        <HamburgerButton src={HamburgerIcon} alt="Menu" onClick={this.openMenu} />
                    ) 
                }
                <Menu open={menuOpen} closeFn={this.closeMenu}/>
            </Container>
        );
    }
}

export default CameraContainer;