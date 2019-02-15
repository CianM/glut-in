import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

import Container from "../components/container";
import Spinner from "../components/spinner";

import { recognitionService } from "../services/recognition.service";

const ProgressSpinner = styled(Spinner)`
    position: fixed;
    top: 1rem;
    left: 1rem;
`;

const ResultBackground = styled(Container)`
    background-image: ${({ background }) => `url(${background})`};
    background-position: center center;
	background-size: cover;
	filter: grayscale(100%);
`;

const ResultText = styled.h1`
    position: fixed;
    top: 50%;
    left: 50%;
    color: blue;
`;

ResultBackground.propTypes = {
    background: PropTypes.string.isRequired
};

class ResultsContainer extends Component {

    recognitionJob;

    state = {
        inProgress: false,
        completed: false,
        detected: null
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
        const updateProgress = ({ inProgress: prevInProgress }) => !prevInProgress ? ({ inProgress: true }) : null;
        this.setState(updateProgress);
    }

    onJobComplete = result => {
        this.setState({ inProgress: false });

        const detectionJob = recognitionService.detect(result.text);
        detectionJob.then(this.detectedHandler, this.notDetectedHandler);
    }

    detectedHandler = () => {
        this.setState({ completed: true, detected: true });
    }

    notDetectedHandler = () => {
        this.setState({ completed: true, detected: false });
    }

    render() {
        const { location: { state: { image } } } = this.props;
        const { inProgress, completed, detected } = this.state; 

        return (
            <Fragment>
                <ResultBackground background={image} />
                { inProgress && (<ProgressSpinner />) }
                { 
                    completed && (
                        <ResultText>{detected ? "Contains Gluten" : "Gluten-Free"}</ResultText>
                    ) 
                }
            </Fragment>
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