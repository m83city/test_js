import logo from './logo.svg';
import './App.css';
import { But } from './component/But';
import Main  from "../src/app/Main"
import 'antd/dist/antd.css';
import { Instrument } from './component/Instrument';
import { Drawer, Button } from 'antd';
import React, { useState } from 'react';


export const drawerContext = React.createContext()

function App() {

  const  [visible, setVisible] = useState(false)
  /* const openDrawer = () =>{
    setVisible(true)
  } */
  const closedDrawer = () =>{
    setVisible(false)
  }



  return (
    <div className="App">
    <drawerContext.Provider value={{
      openDrawer:()=>{
        setVisible(true)
      }
    }}> 
        <Main></Main>
        <Drawer visible={visible} placement= "right"  onClose={closedDrawer}> 
          <Instrument></Instrument>
        </Drawer>
        <Instrument/>
        </drawerContext.Provider>
    </div>
  );
}

export default App;
