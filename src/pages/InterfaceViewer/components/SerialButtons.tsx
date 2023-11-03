import { useEffect, useRef, useState } from "react";

export default function SerialButtons({ propertiesLength, message }) {
  const rawSerial = useRef("");
  const decoder = useRef(new TextDecoder("utf-8"));
  const encoder = useRef(new TextEncoder());
  const port = useRef<SerialPort>();
  const reader = useRef<ReadableStreamDefaultReader>();
  const writer = useRef<WritableStreamDefaultWriter>();
  const [isConnected, setIsConnected] = useState(false);
  const [isDtrModeEnabled, setIsDtrModeEnabled] = useState(false);
  const [baudRate, setBaudRate] = useState(38400);

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

  async function read() {
    try {
      if (reader.current) {
        const { value } = await reader.current.read();
        let decoded = await decoder.current.decode(value);
        rawSerial.current += await decoded;
        console.log(decoded);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function write(data: string) {
    try {
      if (writer.current) {
        const encodedMessage = encoder.current.encode(data + "\n");
        await writer.current.write(encodedMessage);
      }
    } catch (error) {
      console.error(error);
    } finally {
      if (writer.current) {
        await writer.current.abort();
      }
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

  async function infiniteRead() {
    while (isConnected && reader.current) {
    }
  }

  useEffect(() => {
    infiniteRead();
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
