import { useReducer, useRef, useState } from "react";
import FormEditor from "./pages/FormEditor/FormEditor";
import InterfaceViewer from "./pages/InterfaceViewer/InterfaceViewer";
import { MOCK_SCHEMA } from "./mocks";
import { schemaReducer } from "./reducers";
import MessageEditor from "./pages/MessageEditor/MessageEditor";
import { Message } from "./types";

function App() {
  const [display, setDisplay] = useState({
    messageEditor: true,
    formEditor: false,
    interfaceViewer: true,
  });
  const [schema, dispatch] = useReducer(schemaReducer, MOCK_SCHEMA);
  const message = useRef<Message>({
    format: "throt: ${throttle}, pitch: ${pitch}, rollee: ${roll}, yaw: ${yaw}",
    message: JSON.stringify({ throttle: 0, pitch: 0, roll: 0, yaw: 0 }),
  });

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
      {display.messageEditor && (
        <MessageEditor schema={schema} message={message} />
      )}
      {display.formEditor && <FormEditor schema={schema} dispatch={dispatch} />}
      {display.interfaceViewer && (
        <InterfaceViewer schema={schema} message={message} />
      )}
    </div>
  );
}

export default App;
