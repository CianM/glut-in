import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Container from "./container";

const ErrorContainer = styled(Container)`
    position: fixed;
    top: 0;
    color: var(--color-alabaster);
    display: flex;
    flex-flow: column;
    align-items: center;
    padding-top: 10rem;
`;

const ErrorHeader = styled.h1`
    font-size: 3rem;
    font-family: var(--font-family-title);
    margin-bottom: 0;
`;

const ErrorBody = styled.p`
	font-size: 1.2rem;
	text-align: center;
	padding: 0 1rem;
`;

const Error = ({ error, title }) => (
	<ErrorContainer>
		<ErrorHeader>{title}</ErrorHeader>
		<ErrorBody>{error}</ErrorBody>
	</ErrorContainer>
);

Error.propTypes = {
	error: PropTypes.string,
	title: PropTypes.string
};

Error.defaultProps = {
	error: "An error occurred",
	title: "Uh Oh!"
};

export default Error;