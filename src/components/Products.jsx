import {popularProducts} from '../data'
import styled from 'styled-components';
import Product from './Product';
const Container = styled.div`
    display: flex;
    padding: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
`
const Products = () => {
    return (
        <Container>
            {
                popularProducts.map(product => <Product product={product}></Product>)
            }
        </Container>
    );
};

export default Products;