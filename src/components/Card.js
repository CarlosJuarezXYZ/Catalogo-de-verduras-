import styled from "@emotion/styled";
import { css } from "@emotion/react";
import {RiShoppingCart2Fill} from "react-icons/ri";

const Container = styled.div`
width: 142px;
height: 182px;
border-radius: 8px;
padding: 8px;
display: flex;
flex-direction: column;
background: #FFFFFF;
box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
border:1px solid black;
& .card-img{
    width:126px;
    height:90px;
    background: #F5F5F5;
    border-radius: 8px;
}
& .card-products{
    display:flex;
    justify-content:space-between;
    color:#000000;
    width:126px;
    align-items:center;
}
& .card-category{
    width: 71.25px;
    height: 20px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    color: #595959;
    background-color:none;
}
& button{
    background-color:transparent;
    border:none;
    cursor:pointer;
    width:auto;
    display:flex;
    flex:start;
}
`
function Card({price,category,product}){
    return(
        <Container>
            <div className="card-img"></div>
            <div className="card-products"><p>{product}</p><p>{price}</p></div>
            <div className="card-category">{category}</div>
            <button><RiShoppingCart2Fill/></button>
        </Container>
    )
}

export default Card;