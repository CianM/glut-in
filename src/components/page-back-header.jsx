import React from "react";
import styled from "styled-components";

import { withAppContext } from "../hoc/withAppContext";

import BackArrow from "../images/back.png";

import { ROUTES } from "../utils/constants";

const Header = styled.div`
    display: flex;
    align-items: center;
    height: 2rem;
    padding: 0.5rem 1rem;
    margin: -1rem -1rem 0 -1rem;
    box-shadow: 0 0rem 2rem -0.5rem var(--color-mine-shaft);
`;

const Back = styled.img`
    height: 1rem;
    width: 1rem;
`;

const PageBackHeader = ({ context: { setScreen } }) => (
    <Header>
        <Back src={BackArrow} alt="Back" onClick={() => setScreen(ROUTES.HOME)} />
    </Header>
);

export default withAppContext(PageBackHeader);
