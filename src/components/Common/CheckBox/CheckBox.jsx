import { Checkbox,  FormControlLabel } from '@mui/material'
import React from 'react'
import {makeStyles} from 'tss-react/mui'


const useStyles = makeStyles()((theme)=>{
    return{
        root: {
            '&$checked': {
              color: '#000',
            },
          },
          checked: {},
          wrap: {
            width: '100%',
            display: 'flex',
            flexDirection: 'row-reverse',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginLeft: 0,
          },
          label: {
            fontSize: '.8rem',
            fontFamily: `'Raleway', sans-serif`,
          },
    }
})

const CheckBox = ({changeChecked,location }) => {
    const classes = useStyles();
    const {id , label , checked} = location;
  return (
    <div>
    <FormControlLabel 
    classes={{
        label:classes.label,
        root:classes.wrap,

    }}
    control = {
        <Checkbox 
        classes={{
            checked: classes.checked,
            root: classes.root,

        }}
        size="small"
        checked={checked}
        onChange={()=>changeChecked(id)}
        inputProps={{ 'aria-label': 'checkbox with small size' }}
        />
    }
        label={label}  
          
    />
    </div>
  )
}

export default CheckBox