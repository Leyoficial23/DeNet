import { NftHoldingPeriodV1Request } from "@hellomoon/api"

const GotoWallet = async () => {
    console.log("Cambiar de pagina");
    window.location.href = 'http://localhost:3000/MyWallet';
};

const GotoMain = async () => {
    console.log("Cambiar de pagina");
    window.location.href = 'http://localhost:3000/MainPage';
};

export default function Main(){
    return(
        <div style={{textAlign:"center"}}>

        <h1 
        className="color-#0000cd font-bold text-black"
        >
             My Profile 
        </h1>

        <button
            style={{backgroundColor: 'mediumblue'}}
            className="inline-flex h-8 w-52 justify-center font-bold text-white"
            onClick={() => {
                //Go to Profile
                GotoMain();
            }}
            > 
            Main Page 
            </button>

            <button
            style={{backgroundColor: 'mediumblue'}}
            className="inline-flex h-8 w-52 justify-center font-bold text-white"
            onClick={() => {
                //Go to Profile
                GotoWallet();
            }}
            > 
            My Wallet 
            </button>

        </div>
    );
}