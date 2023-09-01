import { FormBuilderPage } from "./pages/FormBuilder";

function App() {
    /*
    {
        type: "text",
        label: "",
        instructions: "",
        isRequired: false,
        isHidden: false,
        readOnly: false,
    }
    {
        type: "checkbox",
        label: "",
        instructions: "",
        isRequired: false,
        isHidden: false,
        choices: []
    }
    {
        type: "select",
        label: "",
        instructions: "",
        isRequired: false,
        isHidden: false,
        choices: [],
        searchable: false,
    }
    */

    return (
        <div>
            <FormBuilderPage />
        </div>
    );
}

export default App;
