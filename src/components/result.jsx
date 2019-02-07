import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Container from "./container";

import { recognitionService } from "../services/recognition.service";

const ResultContainer = styled(Container)`
    background-image: ${({ background }) => `url(${background})`};
    background-position: center center;
    background-size: cover;
`;

ResultContainer.propTypes = {
    background: PropTypes.string.isRequired
};


class Result extends Component {

    componentDidMount() {
        this.startDetection();
    }

    startDetection() {
        const { image } = this.props;
        recognitionService.startDetection(image);
    }

    render() {
        const { image } = this.props;

        return (
            <ResultContainer background={image}></ResultContainer>
        );
    }
}

Result.propTypes = {
    image: PropTypes.string.isRequired
};

export default Result;