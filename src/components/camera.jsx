import React, { Component } from "react";
import PropTypes from "prop-types";

class Camera extends Component {

     

    canvas = React.createRef();
    //image = React.createRef();
    video = React.createRef();

    setupCamera = () => {
        const constraints = { video: true };
        const setVideoSource = stream => {
            //this.video.current.src = window.URL.createObjectURL(stream);
            this.video.current.srcObject = stream;
            this.video.current.play();
        };

        navigator.mediaDevices.getUserMedia(constraints)
            .then(setVideoSource)
            .catch(error => console.error(error));
    }

    takePhoto = () => {
        const { onImageCapture } = this.props;

        const width = this.video.current.videoWidth;
        const height = this.video.current.videoHeight;

        const context = this.canvas.current.getContext("2d");

        this.canvas.current.width = width;
        this.canvas.current.height = height;

        context.drawImage(this.video.current, 0, 0, width, height);

        const imageDataURL = this.canvas.current.toDataURL('image/png');

        onImageCapture(imageDataURL);

        // Set the dataURL as source of an image element, showing the captured photo.
        //this.image.current.setAttribute('src', imageDataURL); 
    
    }

    /*pause = () => {
        this.video.current.pause();
    }*/

    render() {
       return (
           <div>
               <button onClick={this.setupCamera}>Start Camera</button>
               <button onClick={this.takePhoto}>Take Photo</button>
               {/*<button onClick={this.pause}>Pause</button>*/}
               {/*<img ref={this.image}></img>*/}
               <video ref={this.video}></video>
               <canvas ref={this.canvas} style={{display:"none"}}></canvas>
           </div>  
       );
   }
}

Camera.propTypes = {
    onImageCapture: PropTypes.func.isRequired
};

export default Camera;