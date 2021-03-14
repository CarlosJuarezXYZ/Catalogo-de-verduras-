import styled from "@emotion/styled";
import ButtonGenerals from "../../components/Button";

const ContainerShopping = styled.div`
display:flex;
padding:8px;
border:1px solid black;
`

function CartShopping(){
    return(
        <ContainerShopping>
           <div className="shopping1">
               <p>Carrots</p>
               <p>Vegetables1</p>
               <p>$3</p>
           </div>

           <div>
               <ButtonGenerals width = {14} height = {14} size={14}>-</ButtonGenerals>
               <p>1</p>
               <ButtonGenerals width = {14} height = {14} size={14}>+</ButtonGenerals>
           </div>
           <div></div>
        </ContainerShopping>
    
    )
}

export default CartShopping;
