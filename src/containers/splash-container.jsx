import React from "react";
import styled from "styled-components";

import Container from "../components/container";

import LogoIcon from "../images/logo.png";

import { bounce, dropIn } from "../styles/keyframes";

const SplashBackground = styled(Container)`
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	background-color: var(--color-sea-buckthorn);
`;

const Logo = styled.img`
	height: 12rem;
	width: 12rem;
	border-radius: 50%;
	box-shadow: 0 5px 2rem var(--color-mine-shaft);
`;

const TitleContainer = styled.div``;

const Title = styled.h1`
	display: inline-block;
	color: var(--color-alabaster);
	font-size: 4rem;
	font-family: var(--font-family-title);
	text-shadow: 1px 2px 0.5rem var(--color-tundora);
	animation: ${bounce} 1s linear;
`;

const QuestionMark = styled(Title)`
	animation: ${dropIn} 1s linear;
`;

const SplashContainer = () => (
	<SplashBackground>
		<Logo src={LogoIcon} />
		<TitleContainer>
			<Title>Glut-in</Title>
			<QuestionMark>?</QuestionMark>
		</TitleContainer>
	</SplashBackground>
);

export default SplashContainer;