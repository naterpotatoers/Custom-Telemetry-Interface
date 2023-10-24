import { useReducer } from "react";
import FormEditor from "./pages/FormEditor/FormEditor";
import InterfaceViewer from "./pages/InterfaceViewer/InterfaceViewer";
import { MOCK_SCHEMA } from "./mocks";
import { schemaReducer } from "./reducers";

function App() {
  const [schema, dispatch] = useReducer(schemaReducer, MOCK_SCHEMA);

  return (
    <div>
      <FormEditor schema={schema} dispatch={dispatch} />
      <InterfaceViewer schema={schema} />
    </div>
  );
}

export default App;
