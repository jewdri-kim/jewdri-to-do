

import { useState } from 'react';
import styled from 'styled-components';

import ButtonItem from '@components/form/ButtonItem'; 
import SelectItem from '@components/form/SelectItem';

/* styled(s) */

const InsertWrap = styled.form`
    padding:0 5%;
`;
const FormBox = styled.div`
    display:flex;
    padding:10px 0;
    align-items:center;

    button{
        margin-left:5px;
    }
`;
/* styled(e)*/

const TodoInsert = (props) => {

    const [toDoContent, setToDoContent] = useState('');
    const [groupName, setGroupName] = useState('');

    const onTextChange = (event) => {
        console.log(event.target.value);
        setToDoContent(event.target.value);
    };  

    const onGroupChange = (event) =>{
        setGroupName(event.target.value);
    }
    const onSubmit =  () =>{
        if(toDoContent.length < 1){
            alert('할 일을 입력하세요!!!!');
            return; 
        }else{
            if(props.group === ''){
                alert('카테고리를 선택하세요!!!');
                return; 
            }
            props.onSubmit(toDoContent);
            setToDoContent('');
        }

    }

    return ( 
        <>
            <InsertWrap>
                {props.toDos.length > 1 ? 
                (
                    <>
                        <SelectItem label="카테고리 선택" value={props.group} onChange={props.groupChange} list={props.toDos}></SelectItem>
                        <FormBox>
                            <input placeholder="할 일을 입력하세요" id="todoContent" value={toDoContent} onChange={onTextChange}/>
                            <ButtonItem name="등록" type="submit" onClick={onSubmit}/>
                        </FormBox>
                        <FormBox>
                            <input placeholder="추가할 카테고리를 입력하세요" id="groupName" value={groupName} onChange={onGroupChange}/>
                            <ButtonItem name="추가" type="button" onClick={()=>props.addGroup(groupName)}/>
                        </FormBox>
                    </>
                ) : 
                (
                    <p>할 일 목록이 없습니다.</p>
                )            
                }
            </InsertWrap>
        </>
    )

}

export default TodoInsert;