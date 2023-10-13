import { NftHoldingPeriodV1Request } from "@hellomoon/api"
import toast, { Toaster } from "react-hot-toast";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
    Connection,
    SystemProgram,
    Transaction,
    PublicKey,
    LAMPORTS_PER_SOL,
    clusterApiUrl,
    SendTransactionError,
} from "@solana/web3.js";
import { useStorageUpload } from "@thirdweb-dev/react";

import axios from "axios";

const GotoProfile = async () => {
    console.log("Cambiar de pagina");
    window.location.href = 'http://localhost:3000/MyProfile';
};

const GotoMain = async () => {
    console.log("Cambiar de pagina");
    window.location.href = 'http://localhost:3000/MainPage';
};

const Search= async () =>{

}
export default function Main(){

    return(


        <div style={{textAlign:"center"}}>
                
            <h1 
                className="color-black font-bold text-black"
            >
             My Wallet 
            </h1>


            <button
            style={{backgroundColor: 'mediumblue'}}
            className="inline-flex h-8 w-52 justify-center font-bold text-white"
            onClick={() => {
                //Go to Profile
                GotoProfile();
            }}
            > 
            My Profile 
            </button>

            <button
            style={{backgroundColor: 'mediumblue', textAlign:"left"}}
            className="inline-flex h-8 w-52 justify-center font-bold text-white"
            onClick={() => {
                //Go to Profile
                GotoMain();
            }}
            > 
            Main Page 
            </button>

            <br>

            </br>
<input
className="h-8 w-72 mt-4   border-2 border-mediumblue "
type="text"
onChange={Search()}></input>




            </div>



        
    );
}