import { SimpleForm, TextInput, ReferenceInput, SelectInput, NumberInput, SimpleFormIterator, ArrayInput, choices } from 'react-admin'


const SelectInputView = (props) => {
    const { source, choices, height, marginRight, width } = props;
    return (
        <SelectInput
            InputProps={{ disableUnderline: true }}
            style={{ width: width, marginRight: marginRight, height: height, border: "1px solid white", borderRadius: 5 }}
            source={source}
            choices={choices}
            {...props}

        />


    )
}

export default SelectInputView;