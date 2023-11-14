import { useReducer, useRef, useState } from "react";
import FormEditor from "./pages/FormEditor/FormEditor";
import InterfaceViewer from "./pages/InterfaceViewer/InterfaceViewer";
import { MOCK_SCHEMA } from "./mocks";
import { schemaReducer } from "./reducers";
import MessageFormatEditor from "./pages/MessageFormatEditor/MessageFormatEditor";

function App() {
  const [display, setDisplay] = useState({
    MessageFormatEditor: true,
    formEditor: false,
    interfaceViewer: true,
  });
  const [schema, dispatch] = useReducer(schemaReducer, MOCK_SCHEMA);
  const [messageFormat, setMessageFormat] = useState<string>('{"throttle_custom": (throttle), "pitch_format": (pitch), "roll_test": (roll), "yaw_example": (yaw)}');
  const message = useRef<string>("");

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
      {display.MessageFormatEditor && (
        <MessageFormatEditor
          schema={schema}
          messageFormat={messageFormat}
          setMessageFormat={setMessageFormat}
        />
      )}
      {display.formEditor && <FormEditor schema={schema} dispatch={dispatch} />}
      {display.interfaceViewer && (
        <InterfaceViewer
          schema={schema}
          message={message}
          messageFormat={messageFormat}
        />
      )}
    </div>
  );
}

export default App;
