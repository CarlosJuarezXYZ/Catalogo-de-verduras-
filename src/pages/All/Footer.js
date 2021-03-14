import styled from "@emotion/styled";
import ButtonGenerals from "../../components/Button";
import Icon from "../../components/Icon";
import { useHistory } from "react-router-dom";

const ContainerFooter = styled.div`
display:flex;
justify-content:space-between;
height:73px;
border. 1px solid black;
width:465px;
& button{
    background-color:transparent;
    border:none;
    outline:none;
}
`

function Footer(){
    let history = useHistory();
   
    return(
        <ContainerFooter>
            <button onClick={()=>history.push("/")}><Icon type="home" fill="#595959" size="40"/></button>
            <button onClick={()=>history.push("/cart")}><Icon type="shopping" fill="#595959" size="40"/></button>
        </ContainerFooter>
    )
}

export default Footer;
