import Icon from "../components/Icon"
import styled from "@emotion/styled";

const SuccesContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
height:100vh;
& p {
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 30px;
line-height: 38px;
}
`

function Succes(){
    return(
        <SuccesContainer>
            <Icon type="check" fill="green" size="70"></Icon>
            <p>your order has been submit</p>
        </SuccesContainer>
    )
}

export default Succes;
