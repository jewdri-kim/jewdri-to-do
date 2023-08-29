

import { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import useTodo from '@hooks/useTodo';

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

const TodoInsert = () => {

    const [toDoContent, setToDoContent] = useState('');
    const [group, setGroup] = useState('');
    const {toDos, createTodo, setInsertTodo} = useTodo();


    useEffect(() => {
        createTodo();
    }, []);

    const groupChange = (event) =>{
        setGroup(event.target.value);
    }
    const onTextChange = (event) => {
        setToDoContent(event.target.value)
        console.log('onTextChange : '+ toDoContent);
    };

    const onSubmit = useCallback (e =>{
        e.preventDefault();
        if(toDoContent.length < 1){
            alert('할 일을 입력하세요!!!!');
            return; 
        }else{

            const _toDoConent = {

            };
            setToDoContent('');
    
            setInsertTodo(group, _toDoConent);

            
        }

    })

    return ( 
        <>
            <InsertWrap>
                {toDos.length > 1 ? 
                (
                    <>
                        <SelectItem label="카테고리 선택" value={group} onChange={groupChange} list={toDos}></SelectItem>
                        <FormBox>
                            <input placeholder="할 일을 입력하세요" id="todoContent" value={toDoContent} onChange={onTextChange}/>
                            <ButtonItem name="등록" type="submit" onClick={onSubmit}/>
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