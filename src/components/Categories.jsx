import React from "react";
import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";
import { mobile } from "../responsive";
const Container = styled.div`
    display: flex;
    padding: 20px;
    ${mobile({ flexDirection:"column" })}
`;
const Categories = () => {
  return <Container>
    {
        categories.map((item ,i) => <CategoryItem key={i} item={item}></CategoryItem>)
    }
  </Container>;
};

export default Categories;
