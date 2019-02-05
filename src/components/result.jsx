import React, { Component } from "react";
import PropTypes from "prop-types";

class Result extends Component {
    render() {
        const { background } = this.props;

        return (
            <div style={{backgroundImage: `url(${background})`, height: "100vh", width: "100vw"}}></div>
        );
    }
}

Result.propTypes = {
    background: PropTypes.string.isRequired
};

export default Result;