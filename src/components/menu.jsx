import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import onClickOutside from "react-onclickoutside";

import CloseIcon from "../images/close.svg";

import { ROUTES } from "../utils/constants";
import { AppContext } from "../utils/context";

const MenuContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    position: fixed;
    top: 0;
    right: 0;
    background-color: var(--color-alabaster);
    padding: 1rem 0;
    height: 100%;
    width: ${({ visible }) => visible ? "60%" : "0" };
    visibility: ${({ visible }) => visible ? "visible" : "hidden"};
    overflow-x: hidden;
    transition: 0.5s;
    z-index: var(--z-index-menu);
    white-space: nowrap;
    box-shadow: 0 0 5rem 0.5rem var(--color-mine-shaft);
`;

MenuContainer.propTypes = {
    visible: PropTypes.bool
};

MenuContainer.defaultProps = {
    visible: false
};

const Header = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 1rem;
`;

Header.CloseButton = styled.img`
    height: 2rem;
    width: 2rem;
`;

const Item = styled.p`
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 3rem;
    cursor: pointer;
`;

class Menu extends Component {

    static contextType = AppContext;

    prompt = null;

    handleClickOutside = () => this.props.closeFn();

    navigateToTestPage = () => this.context.setScreen(ROUTES.TEST);

    downloadPWA = () => {
        const openPrompt = e => {
            e.preventDefault();

            this.prompt = e;
            this.prompt.prompt();

            this.prompt.userChoice.then(this.savePWAPromptChoice);
        };

        window.addEventListener("beforeinstallprompt", openPrompt);
    }

    savePWAPromptChoice = choiceResult => {
        console.log({ choiceResult })
        if (choiceResult.outcome === "accepted") {
            console.log("User accepted the A2HS prompt");
        } 
        else {
            console.log("User dismissed the A2HS prompt");
        }
          
        this.prompt = null;
    }

    render() {
        const { closeFn, open } = this.props;

        return (
            <MenuContainer visible={open}>
                <Header>
                    <Header.CloseButton src={CloseIcon} alt="Close" onClick={closeFn} />
                </Header>
                <Item onClick={this.navigateToTestPage}>Test Data</Item>
                <Item onClick={this.downloadPWA}>Save for Offline</Item>
            </MenuContainer>
        );
    }
}

Menu.propTypes = {
    closeFn: PropTypes.func,
    open: PropTypes.bool
};

Menu.defaultProps = {
    closeFn: () => {},
    open: false
};

export default onClickOutside(Menu);
