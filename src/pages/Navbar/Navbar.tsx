import React from "react";

export default function Navbar({
  display,
  setDisplay,
}: {
  display: {
    MessageFormatEditor: boolean;
    formEditor: boolean;
    interfaceViewer: boolean;
  };
  setDisplay: React.Dispatch<
    React.SetStateAction<{
      MessageFormatEditor: boolean;
      formEditor: boolean;
      interfaceViewer: boolean;
    }>
  >;
}) {
  return (
    <div className="flex-header">
      <h1>Custom Telemetry Controller</h1>
      <div>
        <button
          name="MessageFormatEditor"
          onClick={() =>
            setDisplay({
              ...display,
              MessageFormatEditor: !display.MessageFormatEditor,
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
