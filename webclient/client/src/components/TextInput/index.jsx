import { SimpleForm, TextInput, ReferenceInput, SelectInput, NumberInput, SimpleFormIterator, ArrayInput } from 'react-admin'


const TextInputView = (props) => {
    const { source, height, width } = props;
    return (
        <TextInput
            InputProps={{ disableUnderline: true, }}
            style={{
                width: width || "50%",
                height: height,
                border: "1px solid white",
                borderRadius: 5,
            }}
            source={source}
            {...props}
        />

    )
}

export default TextInputView;