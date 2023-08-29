

import { useState } from 'react';
import styled from 'styled-components';
import useTodo from '@hooks/useTodo';

import ButtonItem from '@components/form/ButtonItem'; 



const TodoInsert = () => {

    const [toDoContent, setToDoContent] = useState();
    const {setTodo} = useTodo();
    /* styled(s) */
    const FormBox = styled.div`
        display:flex;
        padding:10px 5%;
        align-items:center;
    `;
    /* styled(e)*/

    const onSubmit = async() =>{
        if(toDoContent.length < 1){
            alert('할 일을 입력하세요!!!!');
            return; 
        }

        const _toDoConent = toDoContent;
        setToDoContent('');

        await setTodo(_toDoConent);

    }

    return ( 
        <form className="insert-wrap">
            <FormBox>
                <input placeholder="할 일을 입력하세요" />
                <ButtonItem name="등록" onClick={onSubmit}/>
            </FormBox>
        </form>
    )

}

export default TodoInsert;