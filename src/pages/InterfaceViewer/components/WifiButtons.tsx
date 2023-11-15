import { useEffect, useState } from "react";

export default function WifiButtons({
  setStatus,
  message,
}: {
  setStatus: React.Dispatch<React.SetStateAction<any>>;
  message: React.MutableRefObject<string>;
}) {
  const [isConnected, setIsConnected] = useState(false);
  const [serverAddress, setServerAddress] = useState(
    "http://localhost:5000"
  );

  function connect() {
    setIsConnected(true);
  }

  function disconnect() {
    setIsConnected(false);
  }

  async function writeMessage() {
    if (isConnected) {
      try {
        const responseStatus = await fetch(serverAddress, {
          method: "POST",
          body: message.current,
        });
        const response = await responseStatus.text();
        console.log(response);
        // setStatus(response);
      } catch (error) {
        console.log(error);
        disconnect();
        setStatus("Unable to post message, verify backend is running");
      }
    }
  }

  useEffect(() => {
    const writeInterval = setInterval(() => {
      if (isConnected) {
        writeMessage();
      }
    }, 200);
    return () => clearInterval(writeInterval);
  }, [isConnected]);

  return (
    <div>
      <label>
        Server Address
        <input
          autoComplete="off"
          className="input-text"
          type="text"
          value={serverAddress}
          onChange={(e) => setServerAddress(e.target.value)}
        />
      </label>
      {isConnected ? (
        <button className="btn btn__danger" onClick={disconnect}>
          Disconnect
        </button>
      ) : (
        <button className="btn btn__primary" onClick={connect}>
          Connect
        </button>
      )}
    </div>
  );
}