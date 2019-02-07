import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Container from "./container";

const ResultContainer = styled(Container)`
    background-image: ${({ background }) => `url(${background})`};
    background-position: center center;
    background-size: cover;
`;

ResultContainer.propTypes = {
    background: PropTypes.string.isRequired
};


class Result extends Component {
    render() {
        const { background } = this.props;

        return (
            <ResultContainer background={background}></ResultContainer>
        );
    }
}

Result.propTypes = {
    background: PropTypes.string.isRequired
};

export default Result;