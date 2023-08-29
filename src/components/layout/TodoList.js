

import { useEffect } from "react";
import useTodo from '@hooks/useTodo';
import styled from 'styled-components';



const TodoList = () => {
    
    useEffect(() => {
        createTodo();
    }, );

    /* styled(s) */
    const GroupTodoList = styled.div`
        margin-top:10px;
        dt{
            background:var(--point);
            color:#fff;

            &:hover{
                opacity:0.6;
            }
        }
        
    `;
    /* styled(e)*/
    const {toDos, createTodo} = useTodo();


    return ( 
        <div>
            {
                toDos.map((item)=>(
                    <GroupTodoList key={item.id}>
                        <dt>{item.group}</dt>
                        <dd>
                            {item.list.length > 1 ? 
                                (
                                    <ul>
                                        {
                                        item.list.map((listItem)=>(
                                            <li key={listItem.id}>
                                                {listItem.text}
                                            </li>
                                        ))
                                        }
                                    </ul>
                                ):
                                (
                                    <p>해당 그룹의 할일 목록이 없습니다.</p>
                                )
                            }
                        </dd>
                    </GroupTodoList>
                ))
            }
        </div>
    );

}

export default TodoList;