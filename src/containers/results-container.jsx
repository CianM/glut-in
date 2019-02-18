import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

import Container from "../components/container";
import Spinner from "../components/spinner";

import { recognitionService } from "../services/recognition.service";

import DetectedIcon from "../images/detected-logo.png";
import NotDetectedIcon from "../images/not-detected-logo.png";

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

ResultBackground.propTypes = {
    background: PropTypes.string.isRequired
};

const Result = styled.div`
    position: fixed;
    top: 0;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
`;

Result.Icon = styled.img`
    height: 30vh;
    width: 30vh;
    border-radius: 50%;
    box-shadow: 0 5px 2rem var(--color-alabaster);
`;

Result.Text = styled.h1`
    color: ${({ detected }) => detected ? "var(--color-bright-red)" : " var(--color-olive-drab)"};
    font-size: 2.5rem;
    font-family: var(--font-family-title);
    font-weight: lighter;
`;

Result.Text.propTypes = {
    detected: PropTypes.bool.isRequired
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
                        <Result>
                            <Result.Icon src={detected ? DetectedIcon : NotDetectedIcon} />
                            <Result.Text detected={detected}>{detected ? "Contains Gluten" : "Gluten-Free"}</Result.Text>
                        </Result>
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