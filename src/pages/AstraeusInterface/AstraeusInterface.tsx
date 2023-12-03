import { useRef, useState } from "react";
import WifiButtons from "../InterfaceViewer/components/WifiButtons";

export default function AstraeusInterface() {
  const [status, setStatus] = useState<any>({});
  const message = useRef<any>("");

  return (
    <div className="section">
      <div className="flex-header">
        <h2>Astraeus Interface</h2>
        <div>
          <WifiButtons setStatus={setStatus} message={message} />
        </div>
      </div>
      <div className="flex-spaced">
        <pre>Response: {JSON.stringify(status, null, 2)}</pre>
      </div>
    </div>
  );
}
