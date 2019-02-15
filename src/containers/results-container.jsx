import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

import Container from "../components/container";

import { recognitionService } from "../services/recognition.service";

const ResultBackground = styled(Container)`
    background-image: ${({ background }) => `url(${background})`};
    background-position: center center;
	background-size: cover;
	filter: grayscale(100%);
`;

ResultBackground.propTypes = {
    background: PropTypes.string.isRequired
};


class ResultsContainer extends Component {

    componentDidMount() {
        this.startDetection();
    }

    startDetection() {
		const { location: { state: { image } } } = this.props;
		recognitionService.startDetection(image);
    }

    render() {
        const { location: { state: { image } } } = this.props;

        return (
            <ResultBackground background={image} />
        );
    }
}

ResultsContainer.propTypes = {
    location: PropTypes.shape({
		state: PropTypes.shape({
			image: PropTypes.string
		})
	})
};

export default withRouter(ResultsContainer);