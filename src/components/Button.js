import styled from "@emotion/styled";
import { css } from "@emotion/react";

const Button = styled.button`
width:auto;
height:${(props) => props.size}px;
border-radius:50%;
color: #262626;
border:1px solid #595959;
display:flex;
align-items: center;
justify-content:center;
background-color:none;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 24px;
cursor:pointer;
&:hover{
    color:#fff;
    background-color: #595959;
    border:none;
}
&:focus{
    outline:none;
}
`

function ButtonGenerals({size,children}){
    return(
        <Button size={size}>{children}</Button>
    )
}

export default ButtonGenerals;