import styled from "@emotion/styled";
import Footer from "./All/Footer";

const ShoppingContainer = styled.div`
display:flex;
flex-direction:column;

`

function Cart(){
    return(
        <ShoppingContainer>
            <div className="cart-header">Cart</div>
            <div className="cart-body"></div>
            <div className="cart-amount"></div>
            <Footer/>
        </ShoppingContainer>

    )
}

export default Cart;
