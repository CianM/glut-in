import styled, { keyframes } from "styled-components";

const spin = keyframes`
	0% { 
		transform: rotate(0deg); 
	}

	100% { 
		transform: rotate(360deg); 
	}
`;

const Spinner = styled.div`
	border: 0.75rem solid #f3f3f3; /* Light grey */
	border-top: 0.75rem solid #3498db; /* Blue */
	border-radius: 50%;
	width: 3rem;
	height: 3rem;
	animation: ${spin} 2s linear infinite;
`;

export default Spinner;
