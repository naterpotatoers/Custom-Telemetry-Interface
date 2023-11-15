import { useReducer, useRef, useState } from "react";
import FormEditor from "./pages/FormEditor/FormEditor";
import InterfaceViewer from "./pages/InterfaceViewer/InterfaceViewer";
import { MOCK_SCHEMA } from "./mocks";
import { schemaReducer } from "./reducers";
import MessageFormatEditor from "./pages/MessageFormatEditor/MessageFormatEditor";
import Navbar from "./pages/Navbar/Navbar";

function App() {
  const [display, setDisplay] = useState({
    MessageFormatEditor: false,
    formEditor: false,
    interfaceViewer: true,
  });
  const [schema, dispatch] = useReducer(schemaReducer, MOCK_SCHEMA);
  const [messageFormat, setMessageFormat] = useState<string>(
    '{"throttle_custom": $(throttle), "pitch_format": $(pitch), "roll_test": $(roll), "yaw_example": $(yaw)}'
  );
  const message = useRef<string>("");

  return (
    <div>
      <Navbar display={display} setDisplay={setDisplay} />
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
