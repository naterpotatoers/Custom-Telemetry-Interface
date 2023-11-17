import { Schema } from "../../types";

export default function GamepadEditor({ schema }: { schema: Schema }) {
  return (
    <div className="section">
      <div className="flex-header">
        <h2>Gamepad Editor</h2>
        Keys: {Object.keys(schema.properties).join(", ")}
      </div>
      <div>Gamepad Dashboard Mapping Logic</div>
    </div>
  );
}
