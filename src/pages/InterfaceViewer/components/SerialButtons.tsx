import { useEffect, useRef, useState } from "react";

export default function SerialButtons({
  setStatus,
  message,
}: {
  setStatus: React.Dispatch<React.SetStateAction<any>>;
  message: React.MutableRefObject<string>;
}) {
  const port = useRef<SerialPort>();
  const decoder = useRef(new TextDecoder("utf-8"));
  const reader = useRef<ReadableStreamDefaultReader>();
  const writer = useRef<WritableStreamDefaultWriter>();
  const [baudRate, setBaudRate] = useState(38400);
  const [isConnected, setIsConnected] = useState(false);
  const [isDtrModeEnabled, setIsDtrModeEnabled] = useState(false);

  async function connect() {
    try {
      port.current = await navigator.serial.requestPort();
      await port.current.open({ baudRate });
      await port.current.setSignals({
        dataTerminalReady: false,
        requestToSend: false,
      });
      if (port.current.writable && port.current.readable) {
        reader.current = port.current.readable.getReader();
        writer.current = port.current.writable.getWriter();
      }
      setIsConnected(true);
    } catch (error) {
      console.error(error);
      setIsConnected(false);
    }
  }

  function disconnect() {
    try {
      if (reader.current && writer.current && port.current) {
        setIsConnected(false);
        reader.current.cancel();
        writer.current.abort();
        reader.current.releaseLock();
        writer.current.releaseLock();
        port.current.close();
        port.current = undefined;
        reader.current = undefined;
        writer.current = undefined;
        setIsDtrModeEnabled(false);
      }
    } catch (error) {
      console.error(error);
      setIsConnected(true);
    }
  }

  async function toggleDTR() {
    try {
      if (port.current) {
        await port.current.setSignals({
          dataTerminalReady: !isDtrModeEnabled,
          requestToSend: !isDtrModeEnabled,
        });
        setIsDtrModeEnabled(!isDtrModeEnabled);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function handleReadWrite() {
    while (isConnected && reader.current) {
      const { value } = await reader.current.read();
      let decoded = await decoder.current.decode(value);
      console.log(decoded);
      setStatus(decoded);
    }
  }

  useEffect(() => {
    handleReadWrite();
  }, [isConnected]);

  return (
    <div>
      <button onClick={toggleDTR}>
        {isDtrModeEnabled ? "Disable DTR" : "Enable DTR"}
      </button>
      <label>
        Baudrate
        <input
          type="number"
          value={baudRate}
          id="baudrate-input"
          onChange={(e) => setBaudRate(parseInt(e.target.value))}
        />
      </label>
      <button onClick={isConnected ? disconnect : connect}>
        {isConnected ? "Disconnect" : "Connect"}
      </button>
    </div>
  );
}
