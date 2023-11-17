import React from "react";

export default function Navbar({
  display,
  setDisplay,
}: {
  display: {
    messageFormatEditor: boolean;
    formEditor: boolean;
    interfaceViewer: boolean;
    gamepadEditor: boolean;
  };
  setDisplay: React.Dispatch<
    React.SetStateAction<{
      messageFormatEditor: boolean;
      formEditor: boolean;
      interfaceViewer: boolean;
      gamepadEditor: boolean;
    }>
  >;
}) {
  return (
    <div className="flex-header">
      <h1>Custom Telemetry Controller</h1>
      <div>
        <button
          name="messageFormatEditor"
          onClick={() =>
            setDisplay({
              ...display,
              messageFormatEditor: !display.messageFormatEditor,
            })
          }
        >
          Message Format Editor
        </button>
        <button
          name="formEditor"
          onClick={() =>
            setDisplay({
              ...display,
              formEditor: !display.formEditor,
            })
          }
        >
          Form Editor
        </button>
        <button
          onClick={() =>
            setDisplay({
              ...display,
              interfaceViewer: !display.interfaceViewer,
            })
          }
        >
          Interface Viewer
        </button>
      </div>
    </div>
  );
}
