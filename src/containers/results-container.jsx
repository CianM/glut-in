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

ResultBackground.propTypes = {
    background: PropTypes.string.isRequired
};

class ResultsContainer extends Component {

    recognitionJob;

    state = {
        inProgress: false
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
        this.setState({ inProgress: false });
    }

    render() {
        const { location: { state: { image } } } = this.props;
        const { inProgress } = this.state; 

        return (
            <Fragment>
                <ResultBackground background={image} />
                { inProgress && (<ProgressSpinner />) }
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