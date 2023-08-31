



import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';



const TodoList = (props) => {

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

    const isDataCheck = props.toDoData.some((group)=>{
        return group.list.some(item => item.isRemoved === false);
    })

    return (   
        <div>
            {   
                isDataCheck ?
                (
                    props.toDoData.map((item)=>(
                        <GroupTodoList key={item.id}>
                            <dt>{item.group}</dt>
                            <dd>
                                {
                                item.list.length > 1 && 
                                    (
                                        <ul>
                                            {
                                            item.list.map((listItem)=>(
                                                !listItem.isRemoved &&
                                                <li key={listItem.id}>
                                                    {listItem.text}
                                                    <IconButton aria-label="delete" onClick={()=>props.delete(listItem.id)}>
                                                        <DeleteIcon />
                                                    </IconButton>
                                                </li>
                                            ))
                                            }
                                        </ul>
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