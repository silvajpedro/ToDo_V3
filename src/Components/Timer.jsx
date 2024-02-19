import { useEffect, useState } from "react";
import clock from "../assets/tempo.png";
import * as S from "./Style.jsx"
import toque_relogio from "../assets/toque_relogio.mp3"

export default function Timer() {

    const [tempo, setTempo] = useState({
        minuto:0,
        segundo:60
    })

    const [modal, setModal] = useState(false)

    const [openTimer, setOpenTimer] = useState(false)

    const [guardaInterval, setGuardaInterval] = useState(null)

    const Stop = () => clearInterval(guardaInterval)

    const Count = () => {
        const testeInterval = setInterval(() => {
           if(tempo.minuto <= 15){
               setTempo((tempoAtual) => {
                   let novoSegundo = tempoAtual.segundo - 1;
                   let novoMinuto = tempoAtual.minuto;
                 
                   if (novoSegundo === 0 && novoMinuto !== 0) {
                     novoSegundo = 59;
                     novoMinuto -= 1;
                   } 

                   if(novoSegundo === 0 && novoMinuto === 0){
                    clearInterval(testeInterval)
                    document.getElementById("meuAudio").play()
                    setTimeout(()=> {document.getElementById("meuAudio").pause()},6500)
                   }
                 
                   return {
                     ...tempoAtual, // Copia o estado atual do objeto (útil se houver mais propriedades além de minuto e segundo)
                     segundo: novoSegundo, // Atualiza segundo
                     minuto: novoMinuto, // Atualiza minuto
                   };
                 });
           }
              
          
        }, 1000)

        setGuardaInterval(testeInterval)

    }


    return (
        <>
           <p>{tempo.minuto < 10 ?"0":""}{tempo.minuto}:{tempo.segundo <= 9 ? "0" : ""}{tempo.segundo === 60 ? "00": tempo.segundo}</p>
            <img src={clock} onClick={() => {
                if (openTimer === false) {
                    setModal(true)
                    setOpenTimer(true)
                    Count()
                } else if (modal === true) {
                    Stop()
                    setModal(false)
                } else if (modal === false) {
                    Count()
                    setModal(true)
                }

            }} alt="" className="timeImage" />
            <audio id="meuAudio" src={toque_relogio}></audio>

        </>
    )
}