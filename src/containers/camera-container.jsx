import React, { Component } from "react";

import Camera from "../components/camera";
import Container from "../components/container";
import Result from "../components/result";

class CameraContainer extends Component {

    state = {
        imageData: null
    };

    setImageData = imageData => this.setState({ imageData });

    render() {
        const { imageData } = this.state;
        console.log({imageData})
        return (
            <Container>
                { !imageData && (<Camera onImageCapture={this.setImageData} />) }
                { imageData && (<Result image={imageData} />) }
            </Container>
        );
    }
}

export default CameraContainer;