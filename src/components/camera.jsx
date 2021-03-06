import React, { Component } from "react";
import styled from "styled-components";

import CaptureButton from "./capture-button";
import Container from "./container";
import Error from "./error";

import CameraButtonIcon from "../images/camera-button.png";

import { ROUTES } from "../utils/constants";
import { AppContext } from "../utils/context";

import errorMessages from "../data/errors.json";

const Video = styled.video`
    color: var(--color-alabaster);
    background-color: var(--color-tundora);
    height: 100vh;
    width: 100vw;
    object-fit: cover;
`;

const Canvas = styled.canvas`
    display: none;
    height: 100vh;
    width: 100vw;
`;

class Camera extends Component {

    static contextType = AppContext;

    stream;

    canvasRef = React.createRef();
    videoRef = React.createRef();

    state = {
        cameraSet: false,
        error: null
    };

    componentDidMount() {
        this.setupCamera();
    }

    componentWillUnmount() {
        this.takedownCamera();
    }

    setupCamera = () => {
        const constraints = { video: { facingMode: { ideal: "environment" } } };
        const saveStream = stream => this.stream = stream;
        const setVideoSource = () => {
            this.videoRef.current.srcObject = this.stream;
            this.videoRef.current.play();
        };
        const finishSetup = () => this.setState({ cameraSet: true });

        navigator.mediaDevices.getUserMedia(constraints)
            .then(saveStream)
            .then(setVideoSource)
            .catch(this.errorHandler)
            .finally(finishSetup);
    }

    errorHandler = error => {
        const { name: errorName } = error;
        const { camera: cameraErrors } = errorMessages;

        this.setState({ error: cameraErrors[errorName] });
        this.takedownCamera();
    }

    takedownCamera = () => {
        if(this.stream) {
            const [track] = this.stream.getTracks(); 
            track.stop();
        }
    }

    takePhoto = () => {
        const { setImageData, setScreen } = this.context;
        const { videoHeight: height, videoWidth: width } = this.videoRef.current;
        
        const context = this.canvasRef.current.getContext("2d");

        this.canvasRef.current.width = width;
        this.canvasRef.current.height = height;

        context.drawImage(this.videoRef.current, 0, 0, width, height);

        const imageDataURL = this.canvasRef.current.toDataURL("image/png");
        
        setImageData(imageDataURL);
        setScreen(ROUTES.RESULTS);
    }

    render() {
        const { cameraSet, error } = this.state;

        const showButton = Boolean(this.stream);
        const showError = cameraSet && !Boolean(this.stream);

        return (
            <Container>
                {showButton && <CaptureButton src={CameraButtonIcon} alt="Take Photo" onClick={this.takePhoto} />}
                <Video ref={this.videoRef}></Video>
                <Canvas ref={this.canvasRef}></Canvas>

                {showError && (<Error error={error} />)}
           </Container>  
       );
   }
}

export default Camera;
