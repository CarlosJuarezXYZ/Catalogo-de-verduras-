import styled from "@emotion/styled";
import ButtonGenerals from "../../components/Button";

const ContainerShopping = styled.div`
display:flex;
padding:8px;
justify-content : space-between;
align-items: center;
margin : 8px 0px;
& .shopping1  p {
    font-size:12px;
    color: #595959;
}
& .shopping2{
    display:flex;
    justify-content: space-between;
    align-items:center;
    width:108px;
}
`

function CartShopping({price,category,product,amount}){
    return(
        <ContainerShopping>
           <div className="shopping1">
               <p>{product}</p>
               <p>{category}</p>
               <p>{price}</p>
           </div>

           <div className="shopping2">
               <ButtonGenerals width = {20} height = {20} size={14}>-</ButtonGenerals>
               <p>{amount}</p>
               <ButtonGenerals width = {20} height = {20} size={14}>+</ButtonGenerals>
           </div>

           <div className="shopping3">{price}</div>
        </ContainerShopping>
    
    )
}

export default CartShopping;
