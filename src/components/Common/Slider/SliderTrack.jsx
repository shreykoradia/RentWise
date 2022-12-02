import React from 'react'
import {makeStyles} from 'tss-react/mui'
import Slider from '@mui/material/Slider';


const useStyles = makeStyles()((theme)=>{
    return{
        root: {
            width: '100%',
          },
          thumb: {
            color: '#000',
          },
          rail: {
            color: `rgba(0, 0, 0, 0.26)`,
          },
          track: {
            color: '#000',
          },
    }
});

const SliderTrack = ({value , changedPrice}) => {
    const classes = useStyles();
    return (
    <div className={classes.root}>
        <Slider 
        value={value}
        onChange={changedPrice}
        valueLabelDisplay="on"
        min={15000}
        max={50000}
        classes = {{
            thumb : classes.thumb,
            rail: classes.rail,
            track : classes.track
        }}
        />
    </div>
  )
}

export default SliderTrack