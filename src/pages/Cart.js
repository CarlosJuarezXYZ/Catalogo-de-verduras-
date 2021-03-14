import styled from "@emotion/styled";
import ButtonGenerals from "../components/Button";
import Footer from "./All/Footer";
import CartShopping from "./Cart/CartShopping";
import {useHistory} from "react-router-dom";

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
& button{
    background-color:transparent;
    outline:none;
    border:none;
}
`
const shoppinData = [
    {product:"carrots",price:"$2",category:"carrots"},
    {product:"carrots",price:"$2",category:"carrots"},
    {product:"carrots",price:"$2",category:"carrots"}
] 

function Cart(){
    let history = useHistory();
    return(
        <ShoppingContainer>
            <div className="cart-header">Cart</div>
            <div className="cart-body">
                {shoppinData.map((sho)=> <CartShopping product={sho.product} price={sho.price} category = {sho.category}/>)}
            </div>
            <div className="cart-amount">
                <p>{`total amount : `}</p>
                <div>
                    <button onClick={()=>history.push("/succes")}><ButtonGenerals  width = "100" height="100" size="18">Create your order</ButtonGenerals></button>
                </div>
            </div>
            <Footer/>
        </ShoppingContainer>

    )
}

export default Cart;
