import { keyframes } from "styled-components";

const bounce = keyframes`
	89% {
		transform: rotate(0);
	}

	90% {
		transform: rotate(-2deg);
	}

	100% {
		transform: rotate(0);
	}
`;

const dropIn = keyframes`
	0% { 
		opacity: 0;
		transform: scale(10);
	}

	20% {
		opacity: 1;
	}

	90% {
		transform: scale(1);
	}

	95% {
		transform: scale(1.25);
	}

	100% { 
		transform: scale(1);
	}
`;

const spin = keyframes`
	0% { 
		transform: rotate(0deg); 
	}

	100% { 
		transform: rotate(360deg); 
	}
`;

export {
	bounce,
	dropIn,
	spin
};
