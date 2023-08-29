
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { styled } from '@mui/system';

    /* styled(s) */

    const CustomForm = styled(FormControl)`
        border-color:var(--point);
        &:focus{
            color:var(--point);
            border-color:var(--point);
        }
        
    `;
    const CustomSelect = styled(Select)`
        height:42px;
        line-height:42px;
        border-radius:10px;
        background:var(--border);
        border-color:var(--border);
        text-align:left;

        &.Mui-focused{
            border:0;
            background:var(--bg);
            color:var(--point);
            label{

            }
            .MuiOutlinedInput-notchedOutline{
                border-color:var(--point);
            }
         }
    `;
    

    const CustomLabel = styled(InputLabel)`
        line-height:42px;
        font-size:14px;top:-13px;color:#1d1d1b;

        &.Mui-focused{
           color:var(--point);
        }
    ` 
    /* styled(e)*/
const SelectItem = (props) => {



    return (
        <CustomForm fullWidth>
            <CustomLabel id="demo-simple-select-label">{props.label}</CustomLabel>
            <CustomSelect label={props.label} value={props.value} onChange={props.onChange}>
                { 
                    props.list.map((option, index)=>(
                        <MenuItem key={index} value={option.id}>{option.group}</MenuItem>
                    ))
                }
            </CustomSelect>
        </CustomForm>
    )

}

export default SelectItem;