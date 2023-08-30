



import styled from 'styled-components';

    /* styled(s) */
    const GroupTodoList = styled.div`
        margin-top:10px;
        text-align:left;
        dt{
            padding:5px 5%;
            background:var(--point);
            font-weight:600;
            font-size:16px;
            color:#fff;

            &:hover{
                opacity:0.6;
            }
        }
        dd{
            padding:10px 5%;
            background:var(--border);
            ul{
                li{
                    padding:3px 10px 3px;
                    &:hover{
                        background:var(--bg);
                        opactiy:0.7;
                    }
                }
            }
        }
        
    `;
    /* styled(e)*/

const TodoList = (props) => {

    return (   
        <div>
            {
                props.toDoData.length > 1 ?
                (
                    props.toDoData.map((item)=>(
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
                ):(
                    <p>할 일 목록이 없습니다.</p>
                )
            }
        </div>
    );

}


export default TodoList;