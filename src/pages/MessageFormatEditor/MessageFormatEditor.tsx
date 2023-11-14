import { Schema } from "../../types";

export default function MessageFormatEditor({
  schema,
  messageFormat,
  setMessageFormat,
}: {
  schema: Schema;
  messageFormat: string;
  setMessageFormat: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="section">
      <div className="flex-header">
        <h2>Message Format Editor</h2>
        Keys: {Object.keys(schema.properties).join(",")}
      </div>
      <div>
        <label className="form-input">
          Message Format
          <input
            type="text"
            value={messageFormat}
            onChange={(e) => setMessageFormat(e.target.value)}
          />
        </label>
      </div>
    </div>
  );
}
