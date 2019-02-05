import React, { Component } from "react";

import Camera from "../components/camera";
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
            <div>
                { !imageData && (<Camera onImageCapture={this.setImageData} />) }
                { imageData && (<Result background={imageData} />) }
            </div>
        );
    }
}

export default CameraContainer;