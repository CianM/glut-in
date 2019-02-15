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
	border: 0.75rem solid #E0E0E0; 
	border-top: 0.75rem solid var(--color-sea-buckthorn);
	border-radius: 50%;
	width: 3rem;
	height: 3rem;
	animation: ${spin} 2s linear infinite;
`;

export default Spinner;
