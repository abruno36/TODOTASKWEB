import React from 'react';
//import { format } from 'date-fns';
import * as S from './styles';

//import typeIcons from '../../utils/typeIcons';
import iconDefault from '../../assets/default.png';

function TaskCard({type, title, when, done }) {
  // const date = useMemo(() => format(new Date(when), 'dd/MM/yyyy') );
  // const hour = useMemo(() => format(new Date(when), 'HH:mm') );

  return (
    <S.Container done={done}>
      <S.TopCard>
        <img src={iconDefault} alt="Icone da Tarefa"/>
        <h3>Título da Tarefa</h3>
      </S.TopCard>
      <S.BottomCard>
        <strong>02/02/2024</strong>
        <span>08:53</span>
      </S.BottomCard>
    </S.Container>
  )
}

export default TaskCard;
