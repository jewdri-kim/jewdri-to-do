
import Button from '@mui/material/Button'; 
import { styled } from '@mui/system';


const ButtonItem = (props) => {
    /* styled(s) */
    const CustomButton = styled(Button)`
        height:42px;
        background-color: var(--point);
        &:hover{
            background: var(--point);
            opacity:0.5;
        }
    `;
    /* styled(e)*/


    return (
        <CustomButton variant="contained" type="button"  onClick={props.onClick}>{props.name}</CustomButton>
    )

}

export default ButtonItem;