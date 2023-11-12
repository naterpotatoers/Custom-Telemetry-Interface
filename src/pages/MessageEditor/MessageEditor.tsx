import { useState } from "react";
import { Message, Schema } from "../../types";
import { getFormattedMessage } from "../../util";

export default function MessageEditor({
  schema,
  message,
}: {
  schema: Schema;
  message: React.MutableRefObject<Message>;
}) {
  const format = getFormattedMessage(message.current, schema);
  return (
    <div className="section">
      <div className="flex-header">
        <h2>Message Editor</h2>
        {format}
      </div>
    </div>
  );
}
