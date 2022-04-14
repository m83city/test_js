import logo from './logo.svg';
import './App.css';
import { But } from './component/But';
import Main  from "../src/app/Main"
import 'antd/dist/antd.css';
import { Instrument } from './component/Instrument';
import { Drawer, Button } from 'antd';


function App() {
  return (
    <div className="App">
        <Main></Main>
        <Drawer visible={true} placement= "right" > 
          <Instrument></Instrument>
        </Drawer>
        <Instrument/>
    </div>
  );
}

export default App;
