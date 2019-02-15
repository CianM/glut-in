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

const Progress = styled.span`
    color: var(--color-white);
    position: fixed;
    top: 1rem;
    left: 1rem;
    font-size: 3rem;
    z-index: 3;
`;

class ResultsContainer extends Component {

    recognitionJob;

    state = {
        inProgress: false,
        progress: 0
    };

    componentDidMount() {
        this.startDetection();
    }

    startDetection() {
        const { location: { state: { image } } } = this.props;
        
        this.recognitionJob = recognitionService.startDetection(image);
        
        this.recognitionJob.progress(this.onProgressUpdate);
        this.recognitionJob.then(this.onJobComplete);
    }

    onProgressUpdate = progress => {
        this.setState({ inProgress: true });
    }

    onJobComplete = result => {
        this.setState({ inProgress: false, progress: 0 });
    }

    render() {
        const { location: { state: { image } } } = this.props;
        const { inProgress, progress } = this.state; 

        return (
            <ResultBackground background={image}>
                { inProgress && (<Progress>{progress}</Progress>) }
            </ResultBackground>
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