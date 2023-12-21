
import { Drizzle } from '@drizzle/store';


///////////////////////////////////////////////////////


import Retail from './contracts/Retail.json';


//0xDBD68a7e25649e9B1069f32DB7acB45F49B83673

///////////////////////////////////////////////////////

// Opciones:
const options = {
    contracts: [ Retail],
      
    polls: {
        accounts: 3000,
    },
    web3: {
        fallback: {

            /*
            type: "ws",
            url: "ws://127.0.0.1:8545"
            */
            
            type: "wss",
            url: "wss://polygon-mumbai.infura.io/v3/8d97234305974183af1de75e5fad9f32"
            
        }
    }
}

// Crear y exportar el objeto drizzle:
const drizzle = new Drizzle(options);
export default drizzle;


