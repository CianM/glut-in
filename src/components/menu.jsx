import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import onClickOutside from "react-onclickoutside";
import { Link } from "react-router-dom";

import CloseIcon from "../images/close.svg";

import { ROUTES } from "../utils/constants";

const MenuContainer = styled.div`
    display: ${({ visible }) => visible ? "flex" : "none"};
    flex-flow: column nowrap;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: var(--color-white);
    padding: 1rem;
    height: 100%;
    width: 60%;
    z-index: var(--z-index-menu);
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
`;

Header.CloseButton = styled.img`
    height: 2rem;
    width: 2rem;
`;

const Item = styled(Link)`
    display: flex;
    align-items: center;
    height: 3rem;
    cursor: pointer;
`;

class Menu extends Component {

    handleClickOutside = event => this.props.closeFn();

    render() {
        const { closeFn, open } = this.props;

        return (
            <MenuContainer visible={open}>
                <Header>
                    <Header.CloseButton src={CloseIcon} alt="Close" onClick={closeFn} />
                </Header>
                <Item to={ROUTES.TEST}>Test Data</Item>
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