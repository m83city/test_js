import React from "react";
import {Button, Drawer} from 'antd'

export default function Main() {

    const someText  = 'SomeText'

    return(
        <div>
        <Button danger = 'true' title=" Some title" >

            Open Drawer
            {someText}

        </Button>
        </div>
    )
}