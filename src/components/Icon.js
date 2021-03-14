/** @jsxImportSource @emotion/react */

 import { css } from "@emotion/react";
 import {RiHome2Fill,RiShoppingCart2Fill} from "react-icons/ri";
 import { BiCheckCircle } from "react-icons/bi";

 const iconSet = {
     home: RiHome2Fill,
     shopping: RiShoppingCart2Fill,
     check:BiCheckCircle
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