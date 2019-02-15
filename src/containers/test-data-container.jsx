import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

import { glutenImageData, glutenFreeImageData } from "../images/test-data";

import { ROUTES } from "../utils/constants";

const Container = styled.div`
    padding: 1rem;
`;

const Title = styled.h1``;

const ItemContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: 1fr;
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    align-items: stretch;
`;

const Item = styled.img`
    width: 100%;
    max-height: 5rem;
    object-fit: cover;
    cursor: pointer;
`;

class TestData extends Component {

    // TODO: Convert to Link component
    sendDataForTest = image => {
        const { history: { push } } = this.props;
        const data = { image };

        push(ROUTES.RESULTS, data);
    }

    render() {
        return (
            <Container>
                <Title>Gluten</Title>
                <ItemContainer>
                    { 
                        glutenImageData.map(
                            (image, index) => (
                                <Item key={index} src={image} onClick={() => this.sendDataForTest(image)} />
                            )
                        ) 
                    }
                </ItemContainer>
                <Title>Gluten-Free</Title>
                <ItemContainer>
                    { 
                        glutenFreeImageData.map(
                            (image, index) => (
                                <Item key={index} src={image} onClick={() => this.sendDataForTest(image)} />
                            )
                        ) 
                    }
                </ItemContainer>
            </Container>
        );
    }
}

TestData.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func
    })
};

export default withRouter(TestData);