import { NumberInput, SimpleFormIterator, ArrayInput, choices } from 'react-admin'


const NumberInputView = (props) => {
    const { source, min, step, marginRight, defaultValue, height, width } = props;
    return (
        <NumberInput
            InputProps={{ disableUnderline: true }}
            style={{
                width: width,
                height: height,
                border: "1px solid white",
                borderRadius: 5,
                marginRight: marginRight
            }}
            source={source}
            min={min}
            step={step}
            defaultValue={defaultValue}
            {...props}
        />


    )
}

export default NumberInputView;