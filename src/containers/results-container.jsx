import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import BackButton from "../components/back-button";
import Container from "../components/container";
import Spinner from "../components/spinner";

import { recognitionService } from "../services/recognition.service";

import DetectedIcon from "../images/detected-logo.png";
import NotDetectedIcon from "../images/not-detected-logo.png";

import { ROUTES } from "../utils/constants";
import { AppContext } from "../utils/context";

const CameraBackButton = styled(BackButton)`
    position: fixed;
    top: 1rem;
    left: 1rem;
    color: var(--color-white);
    height: 1.5rem;
    width: 1.5rem;
`;

const ProgressSpinner = styled(Spinner)`
    position: fixed;
    top: 1rem;
    right: 1rem;
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
    color: var(--color-alabaster);
    font-size: 2.5rem;
    font-family: var(--font-family-title);
    font-weight: lighter;
    text-shadow: ${({ detected }) => detected ? "5px 5px 0.25rem var(--color-bright-red)" : "5px 5px 0.25rem var(--color-olive-drab)"};
`;

Result.Text.propTypes = {
    detected: PropTypes.bool.isRequired
};

class ResultsContainer extends Component {

    static contextType = AppContext;

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
        const { imageData: image } = this.context;
        
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

    navigateToHomeScreen = () => this.context.setScreen(ROUTES.HOME);

    render() {
        const { imageData: image } = this.context;
        const { inProgress, completed, detected } = this.state; 

        return (
            <Fragment>
                <ResultBackground background={image} />
                <CameraBackButton onClick={this.navigateToHomeScreen} />
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

export default ResultsContainer;