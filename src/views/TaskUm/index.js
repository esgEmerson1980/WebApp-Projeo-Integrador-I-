import React, { useState, useEffect } from 'react';



import * as S from './styles';
import {format} from 'date-fns';

import api from '../../services/api';
import isConnected from '../../utils/isConnected';

//NOSSOS COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';



function TaskUm({match}) {
  const [redirect, setRedirect] = useState();
  const [funcionario, setFuncionario] = useState();
  const [carro, setCarro] = useState();
  const [id, setId] = useState();
  const [placa, setPlaca] = useState();
  const [combustivel, setCombustivel] = useState();
  const [litros, setLitros] = useState();
  const [valor, setValor] = useState();
  const [origem, setOrigem] = useState();
  const [kmInicio, setKmInicio] = useState();
  const [destino, setDestino] = useState();
  const [kmFim, setKmFim] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState();
  const [hourInicio, setHourInicio] = useState();
  const [hourFim, setHourFim] = useState();
  

  async function LoadTaskDetails(){
    await api.get(`/taskUm/${match.params.id}`)
    .then(response => {
      setRedirect(response.data.redirect)
      setFuncionario(response.data.funcionario)
      setCarro(response.data.carro)
      setPlaca(response.data.placa)
      setCombustivel(response.data.combustivel)
      setLitros(response.data.litros)
      setValor(response.data.valor)
      setOrigem(response.data.origin)
      setKmInicio(response.data.kmInicio)
      setDestino(response.data.destino)
      setKmFim(response.data.kmFim)
      setDescription(response.data.description)
      setDate(format(new Date(response.data.when), 'yyyy-MM-dd'))
      setHourInicio(format(new Date(response.data.when), 'HH:mm'))
      setHourFim(format(new Date(response.data.when), 'HH:mm'))
    })
  }

  async function Save(){
    //Validação dos dados

    if(!redirect)
      return alert("Você precisa inserir os dados para continuar...")
    else if(!carro)
    if(!funcionario)
      return alert("Você precisa informar o nome do funcionário")
    else if(!carro)
      return alert("Você precisa informar qual carro utilizado")
    else if(!placa)
      return alert("Você precisa informar a plada do carro")
    else if(!combustivel)
      return alert("Você precisa informar qual combustível utilizado")
    else if(!litros)
      return alert("Você precisa informar quanto de combustível foi abastecido")
    else if(!valor)
      return alert("Você precisa registrar o valor total do combustível")
    else if(!origem)
      return alert("Você precisa colocar o local de partida")
    else if(!kmInicio)
      return alert("Você precisa registrar a quilometragem inicial")
    else if(!destino)
      return alert("Você precisa colocar o local de destino")
    else if(!kmFim)
      return alert("Você precisa registrar a quilometragem final")
    else if(!description)
      return alert("Você precisa iserir o relatório")

    if(match.params.id){
      await api.put(`/taskUm/${match.params.id}`, {
        macaddress: isConnected,
        funcionario,
        carro, 
        id,
        placa,
        combustivel,
        litros,
        valor,
        origem,
        kmInicio,
        destino,
        kmFim,
        description,
        date,
        when: `${date}T${hourInicio}T${hourFim}:00.000`
      }).then(() => 
        setRedirect(true)
      )

    }else{
      await api.post('/taskUm', {
        macaddress: isConnected,
        funcionario,
        carro, 
        id,
        placa,
        combustivel,
        litros,
        valor,
        origem,
        kmInicio,
        destino,
        kmFim,
        description,
        date,
        when: `${date}T${hourInicio}T${hourFim}:00.000`
      }).then(() => 
          setRedirect(true)
      ).catch(response => {
        alert(response.data.error)
      })
    }
  }

  async function Remove(){
    const res = window.confirm('Deseja realmente remover a tarefa?')
    
    if(res === true){
      await api.delete(`/taskUm/${match.params.id}`)
      .then(() => setRedirect(true));
    }
  }

  async function Save(){
    const res = window.confirm('Salvar Arquivo')
    
    if(res === true){
      await api.save(`/taskUm/${match.params.id}`)
      .then(() => setRedirect(true));
    }
  }

  useEffect(() => {
    if(!isConnected)
      setRedirect(true);
      
    LoadTaskDetails();

  },[LoadTaskDetails])

  return (
    <S.Container>
      
      <Header />    
      <S.Form>
        
        <S.Input>
          <span>Funcionário</span>
          <textarea type="text" placeholder="Nome do funcionário..." 
          onChange={e => setFuncionario(e.target.value)} value={funcionario} />
        </S.Input>

        <S.Input>
          <span>Carro</span>
          <textarea rows={0} placeholder="Detalhes da tarefa..." 
          onChange={e => setCarro(e.target.value)} value={carro}/>
        </S.Input>
         
        <S.Input>
          <span>Código</span>
          <textarea type="text" placeholder="Id automático..." 
          onChange={e => setId(e.target.value)} value={id}/>
        </S.Input>

        <S.Input>
          <span>Placa do veículo</span>
          <textarea type="text" placeholder="Incerir número da placa..." 
          onChange={e => setPlaca(e.target.value)} value={placa}/>
        </S.Input>

        <S.Input>
          <span>Tipo de Combustível</span>
          <textarea type="text" placeholder="Combustível..." 
          onChange={e => setCombustivel(e.target.value)} value={combustivel}/>
        </S.Input>

        <S.Input>
          <span>Qtda. em listros</span>
          <textarea type="text" placeholder="quantidade de combustível..." 
          onChange={e => setLitros(e.target.value)} value={litros}/>
        </S.Input>

        <S.Input>
          <span>Valor</span>
          <textarea type="text" placeholder="Valor total pago..." 
          onChange={e => setValor(e.target.value)} value={valor}/>
        </S.Input>

        <S.Input>
          <span>Origem</span>
          <textarea type="text" placeholder="Origem de partida..." 
          onChange={e => setOrigem(e.target.value)} value={origem}/>
        </S.Input>

        <S.Input>
          <span>Km Inicial</span>
          <textarea type="text" placeholder="Quilometragem inicial..." 
          onChange={e => setKmInicio(e.target.value)} value={kmInicio}/>
        </S.Input>

        <S.Input>
          <span>Destino</span>
          <textarea type="text" placeholder="Destino final..." 
          onChange={e => setDestino(e.target.value)} value={destino}/>
        </S.Input>

        <S.Input>
          <span>Km Final</span>
          <textarea type="text" placeholder="Quilometragem final..." 
          onChange={e => setKmFim(e.target.value)} value={kmFim}/>
        </S.Input>

        <S.Input>
          <span>Descrição</span>
          <textarea type="text" placeholder="Observação..." 
          onChange={e => setDescription(e.target.value)} value={description}/>
        </S.Input>

        
        <S.Input>
          <span>Data</span>
          <input type="date" placeholder="Data da terefa..." 
          onChange={e => setDate(e.target.value)} value={date} />
         
        </S.Input>

        <S.Input>
          <span>Hora Inical</span>
          <input type="time" placeholder="Hora de início da atividade..." 
          onChange={e => setHourInicio(e.target.value)} value={hourInicio}/>
        
        </S.Input>

        <S.Input>
          <span>Hora Fim</span>
          <input type="time" placeholder="Hora de término da atividade..." 
          onChange={e => setHourFim(e.target.value)} value={hourFim}/>
          
        </S.Input>

        <S.Remove>
          <button type="button" onClick={Remove}>EXCLUIR</button>
        </S.Remove>

        <S.Save>
          <button type="button" onClick={Save}>SALVAR</button>
        </S.Save>


      </S.Form>


      <Footer/>
    </S.Container>
  )
}

export default TaskUm;
