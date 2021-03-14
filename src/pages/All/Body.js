import styled from "@emotion/styled";
import ButtonGenerals from "../../components/Button";
import Card from "../../components/Card";

const ContainerBody = styled.div`
display:flex;
flex-direction:column;
gap:16px;
border:1px solid black;
width:465px;
`
const products = [{product:"carrots",price:"$2",category:"carrots"},
{product:"carrots",price:"$2",category:"carrots"},
{product:"carrots",price:"$2",category:"carrots"},
{product:"carrots",price:"$2",category:"carrots"}
]

function Body(){
    return (<ContainerBody>
        <div className="body-first">All</div>
        <div>{products.map((p)=><Card product={p.product} price={p.price} category={p.category}/>)}</div>
        <div></div>
    </ContainerBody>)
}

export default Body;