import React, { useState } from "react";

import removeTudo from "../assets/removetudo.png";
import check from "../assets/add.png";
import remove from "../assets/remove.png";

import * as S from "./Style.jsx";

import Timer from "./Timer.jsx";

export default function Main() {

  const [tarefaInput, setTarefaInput] = useState("");

  const [listaDeTarefas, setListaDeTarefas] = useState([]);

  const [modalTarefaVazia, setModalTarefaVazia] = useState(false)

  const tarefa = { tarefa: tarefaInput, id: Date.now() };

  const removerTudo = () => {
    setListaDeTarefas([]);
    setTarefas("");
  };

  const checarTarefa = (id) => {
    
    listaDeTarefas.forEach((item) => {
        
        const linha = document.getElementById(item.id);

        item.id === id ? linha.style.textDecoration = "line-through red 3px": null;
    
    });
  };
  
  const AdicionarTarefa = () =>{
    if (tarefaInput !== "") {
        setListaDeTarefas(listaDeTarefas.concat(tarefa));
        setTarefaInput("");
      } else {
        setModalTarefaVazia(true);
        setTimeout(() => {
          setModalTarefaVazia(false)
        }, 4000);
      }
  }

  const removerTarefa = (id) => {
    setListaDeTarefas(
      listaDeTarefas.filter((item) => {
        return item.id !== id;
      })
    );
  };


  // FAZER COMPONENTIZADO

  return (
    <>
      <S.GlobalStyle />
      <S.Main>
        <S.TitleBox>
        <h1>ToDo List</h1>
        <span></span>
        </S.TitleBox>
        <S.AddBox>
          <form onSubmit={(e) => e.preventDefault()}>
            <S.InputBox>
              <input
                maxlength="30"
                onChange={(e) => { setTarefaInput(e.target.value) }}
                value={tarefaInput}
                placeholder="Digite sua Tarefa" />
              <img
                src={removeTudo}
                style={listaDeTarefas.length > 1 ? { height: "7.5vh" }:{ height: "0vh" }}
                alt="icone remover todas as tarefas"
                onClick={() => {removerTudo()}} />
            </S.InputBox>
            <button onClick={() => {AdicionarTarefa()}}> Adicionar Tarefa </button>
          </form>
        </S.AddBox>
        <S.CaixaTarefas>
          {listaDeTarefas.map((item, index) => (
            <S.TarefaMapeadas key={index}>
              <p className="task" id={item.id}>
                {item.tarefa}
              </p>
              <S.CaixaBotoes>
              <Timer />

              <div>
                <img
                  className="checkImage"
                  src={check}
                  onClick={() => {
                      checarTarefa(item.id);
                    }}
                    alt="Checar tarefa"
                />
                <img
                  className="removeImage"
                  src={remove}
                  onClick={() => {
                    removerTarefa(item.id);
                  }}
                  alt="Remover tarefa"
                />
              </div>
                    </S.CaixaBotoes>
            </S.TarefaMapeadas>
          ))}
         {modalTarefaVazia && <S.MsgVazia >
            <i>Sua lista não pode ficar vazia</i>
          </S.MsgVazia> }
        </S.CaixaTarefas>
      </S.Main>
    </>
  );
}
