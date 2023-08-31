

import useDate from '@hooks/useDate';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Haeder = ()=> {

  /* styled(s) */
  const Header = styled.header`
    padding:20px 5%;
    h1{
      font-family:var(--font-logo);
      text-align:center;
    }
    p{
      text-align:right;
    }
   }
  `
  /* styled(e)*/

  const {getYear, getMonth, getDate, getHour, getMinute} = useDate();
  return (
    <div className="header-wrap">
      <Header>
        <h1>Jewdri's To Do</h1>
        <p>{getYear()}년 {getMonth()}월 {getDate()}일 {getHour()}시 {getMinute()}분</p>
        <ul>
          <li><Link to="/">할 일</Link></li>
          <li><Link to="/trash">휴지통</Link></li>
        </ul>
      </Header>
    </div> 
  );
}

export default Haeder;
