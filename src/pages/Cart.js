import styled from "@emotion/styled";
import ButtonGenerals from "../components/Button";
import Footer from "./All/Footer";
import CartShopping from "./Cart/CartShopping";

const ShoppingContainer = styled.div`
display:flex;
flex-direction:column;
& .cart-header{
    display:flex;
    flex:start;
    padding:8px;
} 
& .cart-amount{
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    padding:8px;
    gap:8px;
}
`
const shoppinData = [
    {product:"carrots",price:"$2",category:"carrots",amount:"1"},
    {product:"carrots",price:"$2",category:"carrots",amount:"1"},
    {product:"carrots",price:"$2",category:"carrots",amount:"1"}
] 

function Cart(){
    return(
        <ShoppingContainer>
            <div className="cart-header">Cart</div>
            <div className="cart-body">
                {shoppinData.map((sho)=> <CartShopping product={sho.product} price={sho.price} category = {sho.category} amount = {sho.amount}/>)}
            </div>
            <div className="cart-amount">
                <p>{`total amount : `}</p>
                <div>
                    <ButtonGenerals width = "100" height="100" size="18">Create your order</ButtonGenerals>
                </div>
            </div>
            <Footer/>
        </ShoppingContainer>

    )
}

export default Cart;
