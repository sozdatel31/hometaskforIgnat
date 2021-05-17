import React from "react";
import {Slider, Typography} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";

type SuperDoubleRangePropsType = {
    value?: [number, number]
    handleChange?: (event: any, newValue:number | number[])=> void
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {handleChange,
        value,
        // min, max, step, disable, ...
    }
) => {
    function valuetext(value: number) {
        return `${value}°C`;
    }

    const useStyles = makeStyles({
        root: {
            width: 200,
        },
    });
    const classes = useStyles();
    // сделать самому, можно подключать библиотеки

    return (
        <>
            <div className={classes.root}>
            <Typography id="range-slider" gutterBottom>
            </Typography>
            <Slider
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
            />
            </div>
        </>
    );
}

export default SuperDoubleRange;
