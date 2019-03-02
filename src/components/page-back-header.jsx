import React from "react";
import styled from "styled-components";

import BackButton from "./back-button";

import { withAppContext } from "../hoc/withAppContext";

import { ROUTES } from "../utils/constants";

import BackArrowDark from "../images/back-arrow-dark.png";

const Header = styled.div`
    display: flex;
    align-items: center;
    height: 2rem;
    padding: 0.5rem 1rem;
    margin: -1rem -1rem 0 -1rem;
    box-shadow: 0 0rem 2rem -0.5rem var(--color-mine-shaft);
`;

const PageBackHeader = ({ context: { setScreen } }) => (
    <Header>
        <BackButton src={BackArrowDark} onClick={() => setScreen(ROUTES.HOME)} />
    </Header>
);

export default withAppContext(PageBackHeader);
