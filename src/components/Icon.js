/** @jsxImportSource @emotion/react */

 import { css } from "@emotion/react";
 import {RiHome2Fill,RiShoppingCart2Fill} from "react-icons/ri";

 const iconSet = {
     home: RiHome2Fill,
     shopping: RiShoppingCart2Fill
 };

 function Icon({type,fill,size}){
     const IconComponent = iconSet[type];
     return(
         <IconComponent
            css={css`
            fill:${fill};
            font-size:${size}px;
            cursor:pointer;
            `}
         />
     )
     
 }

export default Icon