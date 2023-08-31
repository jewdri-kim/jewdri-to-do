



import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';
import RefreshIcon from '@mui/icons-material/Refresh';



const DeleteList = (props) => {

        /* styled(s) */
        const GroupDeleteList = styled.div`
        margin-top:10px;
        text-align:left;
        
        ul{
            li{
                padding:10px 5%;
                &:hover{
                    background:var(--bg);
                    opactiy:0.7;
                }
            }
        }
        
    `;
    /* styled(e)*/

    const isDataCheck = props.toDoData.some((group)=>{
        return group.list.some(item => item.isRemoved === true);
    })

    return (   
        <GroupDeleteList>
            {   
                isDataCheck ?
                (
                    props.toDoData.map((item)=>(
                        <ul key={item.id}>
                            {
                            item.list.map((listItem)=>(
                                listItem.isRemoved &&
                                <li key={listItem.id}>
                                    {listItem.text}
                                    <IconButton aria-label="delete" onClick={()=>props.refresh(listItem.id)}>
                                        <RefreshIcon />
                                    </IconButton>
                                </li>
                            ))
                            }
                        </ul>
                    ))
                ):(
                    <p>리스트가 없습니다.</p>
                )
            }
        </GroupDeleteList>
    );

}


export default DeleteList;