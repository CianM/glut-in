import React, { Component } from "react";
import styled from "styled-components";

import CaptureButton from "./capture-button";
import Container from "./container";

import { ROUTES } from "../utils/constants";
import { AppContext } from "../utils/context";

const Video = styled.video`
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

        navigator.mediaDevices.getUserMedia(constraints)
            .then(saveStream)
            .then(setVideoSource)
            .catch(error => console.error(error));
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
       return (
           <Container>
               <CaptureButton onClick={this.takePhoto}>Take Photo</CaptureButton>
               <Video ref={this.videoRef}></Video>
               <Canvas ref={this.canvasRef}></Canvas>
           </Container>  
       );
   }
}

export default Camera;
