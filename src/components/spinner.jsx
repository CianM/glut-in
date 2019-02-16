import styled from "styled-components";

import { spin } from "../styles/keyframes";

const Spinner = styled.div`
	border: 0.75rem solid #E0E0E0; 
	border-top: 0.75rem solid var(--color-sea-buckthorn);
	border-radius: 50%;
	width: 3rem;
	height: 3rem;
	animation: ${spin} 2s linear infinite;
`;

export default Spinner;
