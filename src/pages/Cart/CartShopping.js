import styled from "@emotion/styled";
import ButtonGenerals from "../../components/Button";
import {useState} from "react"

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
function CartShopping({price,category,product}){
    const [cant, setCant] = useState(0);

function increment(){
    setCant(cant+1);
}

function decrement(){
    setCant(cant-1);
}

    return(
        <ContainerShopping>
           <div className="shopping1">
               <p>{product}</p>
               <p>{category}</p>
               <p>{price}</p>
           </div>

           <div className="shopping2">
               <button onClick={()=>decrement()}><ButtonGenerals width = {20} height = {20} size={14}>-</ButtonGenerals></button>
               <p>{cant}</p>
               <button onClick={()=>increment()}><ButtonGenerals width = {20} height = {20} size={14}>+</ButtonGenerals></button>
           </div>

           <div className="shopping3">{price}</div>
        </ContainerShopping>
    
    )
}

export default CartShopping;
