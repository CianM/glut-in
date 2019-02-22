import styled from "styled-components";

const CaptureButton = styled.img`
	position: fixed;
	left: calc(50% - 2.5rem);
	bottom: 2rem;
	color: var(--color-alabaster);
	background-color: var(--color-sea-buckthorn);
	font-weight: bold;
	height: 5rem;
	width: 5rem;
	border-radius: 50%;
	text-align: center;
	cursor: pointer;
	z-index: var(--z-index-capture-button);
	text-shadow: 1px 2px 0.5rem var(--color-tundora);
`;

export default CaptureButton;
