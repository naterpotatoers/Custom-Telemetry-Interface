import { useReducer, useState } from "react";
import FormEditor from "./pages/FormEditor/FormEditor";
import InterfaceViewer from "./pages/InterfaceViewer/InterfaceViewer";
import { MOCK_SCHEMA } from "./mocks";
import { schemaReducer } from "./reducers";

function App() {
  const [display, setDisplay] = useState({
    formEditor: true,
    interfaceViewer: true,
  });
  const [schema, dispatch] = useReducer(schemaReducer, MOCK_SCHEMA);

  return (
    <div>
      <div className="flex-header">
        <h1>Custom Telemetry Controller</h1>
        <div>
          <button
            name="formEditor"
            onClick={() =>
              setDisplay({
                ...display,
                formEditor: !display.formEditor,
              })
            }
          >
            Toggle Form Editor
          </button>
          <button
            onClick={() =>
              setDisplay({
                ...display,
                interfaceViewer: !display.interfaceViewer,
              })
            }
          >
            Toggle Interface Viewer
          </button>
        </div>
      </div>
      {display.formEditor && <FormEditor schema={schema} dispatch={dispatch} />}
      {display.interfaceViewer && <InterfaceViewer schema={schema} />}
    </div>
  );
}

export default App;
