import React, {useEffect, useState} from 'react';
import * as S from './styles';


import logo from '../../asset/Logo.Cetest.png';
import bell_not from '../../asset/bell_not.png';


import api from '../../services/api';
import isConnected from '../../utils/isConnected';

function Header({ clickNotificatio }) {
  const [setLateCount] = useState();

  async function lateVerify(){
    await api.get(`/task/filter/late/${isConnected}`)
    await api.get(`/taskUm/filter/late/${isConnected}`)
    .then(response => {
      setLateCount(response.data.length)
    })
  }

  useEffect(() => {
    lateVerify();
  })

  async function Logout(){
    localStorage.removeItem('@todo/macaddress');
    window.location.reload();
  }


  return (
    <S.Container>
      <S.LeftSide>
        <img src={logo} alt="Logo_not" />
        
      </S.LeftSide>
      <S.RightSide>
        <button type="button" onClick={Logout}>SAIR</button>
        <span className="dividir" />
        <a href="/">INÍCIO</a>
        <span className="dividir" />
        <a href="/taskUm">CADASTRO</a>
        <span className="dividir" />
        <a href="/task">NOVA TAREFA</a>
        <span className="dividir" />
        <a href="/qrcode">SINCRONIZAR CELULAR</a>
        <span className="dividir" />
        <a href="/"id="notification">
          <img src={bell_not} alt="Notificação" />
          <span>5</span>
        </a>
            
      </S.RightSide>
    </S.Container>
  )
}

export default Header;
