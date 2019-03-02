import styled from "styled-components";

import BackArrowLight from "../images/back-arrow-light.png";

const attributes = {
    alt: "Back",
    src: BackArrowLight
};

const BackButton = styled.img.attrs(attributes)`
    height: 1rem;
    width: 1rem;
    cursor: pointer;
`;

export default BackButton;
