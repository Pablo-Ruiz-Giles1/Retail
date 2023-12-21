import { BrowserRouter, Routes, Route } from "react-router-dom";

import '../css/App.css';
import Loading from './Loading';

import Layout from './Layout';
import HomePage from './home/HomePage';

import NoMatch from './NoMatch';

import PerfilesPage from './Perfiles/PerfilesPage';

import PerfilDetail from './Perfiles/PerfilDetail'

import PrendasPage from "./Prendas/PrendasPage";

import PrendasDetail from "./Prendas/PrendasDetail";

import PrendasDetailSimple from "./Prendas/PrendasDetailSimple";
import Ipfsreact from "./ipfs/Ipfsreact";


import Ipfsprenda from "./ipfs/Ipfsprenda";



function App() {
    return (
        <div className="App">

            <Loading>
            
                       
            <BrowserRouter>
                    <Routes>
                    
                        <Route path="/" element={<Layout/>}>
                        <Route index element={<HomePage/>}/>
                        <Route path="*" element={<NoMatch/>}/>
                        <Route path="perfil" element={<PerfilesPage/>}/>
                        <Route path="prendas" element={<PrendasPage/>}/>                       
                        <Route path="perfil/:addr" element={<PerfilDetail />} />
                        <Route path="prendas/:addr" element={<PrendasDetail />} />
                        <Route path="prendas2/:addr" element={<PrendasDetailSimple />} />
                        <Route path="ipfs" element={<Ipfsreact />} />
                        <Route path="ipfsprenda" element={<Ipfsprenda />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </Loading>
        </div>
    );
}

export default App;
