import styled from "@emotion/styled";
import ButtonGenerals from "../../components/Button";

const ContainerHeader = styled.div`
width: 465px;
height: 64px;
display:flex;
gap:16px;
border:1px solid black;
justify-content:space-between;
align-items:center;
`

const vegetables = ["veg1","veg2","veg3","veg4","veg5"];
function Header(){
    return(
        <ContainerHeader>
            {vegetables.map((v)=><ButtonGenerals size = "24" children = {v}/>)}
        </ContainerHeader>
    )    
}

export default Header;
