import React, {useState} from "react";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";

function HW11() {
    const [value1, setValue1] = useState(50);
    const [value2, setValue2] = useState(70);

    const onChangeRange = (value: number) => {
        setValue1(value)
    }
    const [value, setValue] = useState<[number, number]>([value1, value2]);
    const handleChange = (event: any, newValue: number| Array<number>) => {
       if (Array.isArray(newValue)) {
           setValue1(newValue[0])
           setValue2(newValue[1])
       }
        setValue(
            newValue as [number, number])

        ;
    };
    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange
                    onChangeRange={onChangeRange}
                    value={value1}
                    // сделать так чтоб value1 изменялось
                />
                <span>{value2}</span>
            </div>

            <div>
                <span>{value1}</span>
                <SuperDoubleRange
                    value={value}
                    handleChange={handleChange}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <span>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    );
}

export default HW11;
