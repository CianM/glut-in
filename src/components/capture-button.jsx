import styled from "styled-components";

const CaptureButton = styled.button`
	position: fixed;
	left: calc(50% - 2.5rem);
	bottom: 2rem;
	background-color: rgba(254, 254, 254, 0.6);
	height: 5rem;
	width: 5rem;
	border: 0.25rem solid lightgray;
	border-radius: 50%;
	text-align: center;
	cursor: pointer;
	z-index: var(--z-index-capture-button);
`;

export default CaptureButton;
