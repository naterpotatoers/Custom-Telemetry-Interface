import { useState } from "react";
import { Schema } from "../../types";
import { useGamepads } from "react-gamepads";

type GamepadType = {
  axes: number[];
  buttons: {
    pressed: boolean;
    touched: boolean;
    value: number;
  }[];
  connected: boolean;
  id: string;
  index: number;
  mapping: string;
  timestamp: number;
};

export default function GamepadEditor({ schema }: { schema: Schema }) {
  const [gamepad, setGamepad] = useState<GamepadType | any>({});
  useGamepads((gamepads) => setGamepad(gamepads[0]));
  console.log(gamepad);
  return (
    <div className="section">
      <div className="flex-header">
        <h2>Gamepad Editor</h2>
        Keys: {Object.keys(schema.properties).join(", ")}
      </div>
      <pre>
        {gamepad.id}
        {gamepad.axes?.map((axis: number, index: number) => (
          <div key={index}>
            {index}: {axis}
          </div>
        ))}
        {gamepad.buttons?.map((button: any, index: number) => (
          <div key={index}>
            {index}: {button.value}
          </div>
        ))}
      </pre>
    </div>
  );
}
