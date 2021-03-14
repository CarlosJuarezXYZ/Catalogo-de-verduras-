import styled from "@emotion/styled";
import ButtonGenerals from "../../components/Button";
import Card from "../../components/Card";

const ContainerBody = styled.div`
display:flex;
flex-direction:column;
gap:16px;
border:1px solid black;
width:465px;
& .body-first{
    display:flex;
    flex:start;
    padding:8px;
}
& .body-second{
    display:grid;
    grid-template-columns: 142px 142px;
    grid-template-rows: 182px 182px;
    padding:8px;
    gap: 40px;
    justify-content:center;
    align-items:center;
}
& .body-third{
    border:1px solid black;
    display:flex;
    gap:4px;
    justify-content: flex-end;
    padding-right:8px;
}
`
const products = [{product:"carrots",price:"$2",category:"carrots"},
{product:"carrots",price:"$2",category:"carrots"},
{product:"carrots",price:"$2",category:"carrots"},
{product:"carrots",price:"$2",category:"carrots"}
]

function Body(){
    return (<ContainerBody>
        <div className="body-first">veg1</div>
        <div className="body-second">{products.map((p)=><Card product={p.product} price={p.price} category={p.category}/>)}</div>
        <div className="body-third">
            <ButtonGenerals size = "16" width = "20" height = "20" children="<"/>
            <ButtonGenerals size = "16" width = "20" height = "20" children="1"/>
            <ButtonGenerals size = "16" width = "20" height = "20"  children="2"/>
            <ButtonGenerals size = "16" width = "20" height = "20" children="3"/>
            <ButtonGenerals size = "16" width = "20" height = "20" children=">"/>
        </div>
    </ContainerBody>)
}

export default Body;