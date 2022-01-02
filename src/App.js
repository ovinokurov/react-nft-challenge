import './App.css';
import { Header } from './components/Header';
import { CollectionCard } from './components/CollectionCard';
import{ Main } from './components/Main';


import {useState, useEffect} from 'react';
import axios from 'axios';
import Punklist from './components/Punklist';
import { isCompositeComponent } from 'react-dom/cjs/react-dom-test-utils.production.min';

function App() {
  const[punkListData, setPunkListData]=useState([])
  const[selectedPunk, setSelectedPunk]=useState(0)

  useEffect(() => {
    const getMyNfts = async () =>{
      const opendsetData = await axios.get(
        'https://testnets-api.opensea.io/assets?asset_contract_address=0xeB5825d6634E97ce94B8771EbBae1455ad574c9E&order_direction=asc'
        )

        setPunkListData(opendsetData.data.assets)

    }
    return getMyNfts();
  }, [])

  return( 
  <div className='app'>
    <Header />
    {punkListData.length > 0 && (
      <>
      <Main punkListData={punkListData} selectedPunk={selectedPunk} />
      <Punklist 
        punkListData={punkListData} 
        setSelectedPunk={setSelectedPunk} 
      />
      </>
    )}
    </div>
  )
}

export default App;
