import React, {useContext} from "react";
import {Button, Drawer} from 'antd'
import { drawerContext } from "../App";


export const But  = () =>{

    const func = useContext(drawerContext)
    
   

    return (
        <Button  danger = 'true' onClick={func.openDrawer} >
            someText
        </Button>
    )
}