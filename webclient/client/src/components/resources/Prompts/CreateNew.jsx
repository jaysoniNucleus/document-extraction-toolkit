import * as React from 'react'
import { SimpleForm, SimpleFormIterator, ArrayInput } from 'react-admin'
import { Create, Toolbar } from 'components/carbon-ra'
import { VALID_WATSONX_MODELS } from 'utils/validators'
import TextInputView from 'components/TextInput'
import SelectInputView from 'components/SelectInputView'
import NumberInputView from 'components/NumberInputView'

// https://marmelab.com/react-admin/Create.html
// You can customize the <Create> component using the following props:

// actions: override the actions toolbar with a custom component
// aside: component to render aside to the main content
// children: the components that renders the form
// className: passed to the root component
// component: override the root component
// disableAuthentication: disable the authentication check
// mutationOptions: options for the dataProvider.create() call
// record: initialize the form with a record
// redirect: change the redirect location after successful creation
// resource: override the name of the resource to create
// sx: Override the styles
// title: override the page title
// transform: transform the form data before calling dataProvider.create()

const sample_prompt = `Answer the question as precise as possible using the provided context. If the answer is
not contained in the context, say "None" \n\n 
Context: \n {context}?\n
Question: \n {question} \n
Answer:
`

const PromptsCreate = () => (
  <Create>
    <SimpleForm toolbar={<Toolbar />}>
      <TextInputView height={"50px"} width={"100%"} source="name" />
      <div style={{ flexDirection: 'row', width: "100%", justifyContent: "space-between" }}>
        <SelectInputView marginRight={"1%"} height={"50px"} width={"49.5%"} source="model_name" choices={VALID_WATSONX_MODELS} />
        <NumberInputView height={"50px"} width={"49.5%"} source="model_configuration.min_new_tokens" min={0} step={1} defaultValue={0} />

      </div>
      <div style={{ flexDirection: 'row', width: "100%", justifyContent: "space-between" }}>
        <NumberInputView marginRight={"1%"} height={"50px"} width={"49.5%"} source="model_configuration.max_new_tokens" min={0} step={1} defaultValue={100} />
        <NumberInputView height={"50px"} width={"49.5%"} source="model_configuration.temperature" min={0} step={0.01} defaultValue={0.05} />
      </div>
      <TextInputView width={"100%"} source="template" defaultValue={sample_prompt} multiline fullWidth />
      <ArrayInput style={{ width: '100%', marginTop: 10, paddingLeft: 10, paddingRight: 10, border: "1px solid white", borderRadius: 5 }} source="questions">
        <SimpleFormIterator inline fullWidth>
          <TextInputView source="field" helperText={false} />
          <TextInputView source="question" helperText={false} fullWidth />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Create>
)

export default PromptsCreate

