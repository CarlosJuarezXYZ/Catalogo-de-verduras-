import styled from "@emotion/styled";
import ButtonGenerals from "../../components/Button";
import Icon from "../../components/Icon";

const ContainerFooter = styled.div`
display:flex;
justify-content:space-between;
height:73px;
border. 1px solid black;
width:465px;
`
function Footer(){
    return(
        <ContainerFooter>
            <Icon type="home" fill="#595959" size="40"/>
            <Icon type="shopping" fill="#595959" size="40"/>
        </ContainerFooter>
    )
}

export default Footer;
