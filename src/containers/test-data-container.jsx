import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div``;

const Title = styled.h1``;

const ItemContainer = styled.div``;

const Item = styled.div``;

class TestData extends Component {
    render() {
        return (
            <Container>
                <Title>Gluten</Title>
                <ItemContainer>
                    <Item>Gluten 1</Item>
                    <Item>Gluten 2</Item>
                    <Item>Gluten 3</Item>
                </ItemContainer>
                <Title>Gluten-Free</Title>
                <ItemContainer>
                    <Item>Gluten-Free 1</Item>
                    <Item>Gluten-Free 2</Item>
                    <Item>Gluten-Free 3</Item>
                </ItemContainer>
            </Container>
        );
    }
}

export default TestData;