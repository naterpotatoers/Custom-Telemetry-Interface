import { useEffect, useState } from "react";

export default function WifiButtons({
  setStatus,
  setHistory,
}: {
  setStatus: React.Dispatch<React.SetStateAction<any>>;
  setHistory: React.Dispatch<React.SetStateAction<any>>;
}) {
  const [isConnected, setIsConnected] = useState(false);
  const [serverAddress, setServerAddress] = useState("http://localhost:3000/");

  function connect() {
    clearHistory();
    setIsConnected(true);
  }

  function disconnect() {
    readHistory();
    setIsConnected(false);
  }

  async function readStatus() {
    if (isConnected) {
      try {
        const responseStatus = await fetch(serverAddress, {
          method: "GET",
        });
        const response = await responseStatus.json();
        console.log(response);
        setStatus(response);
      } catch (error) {
        console.log(error);
        disconnect();
        setStatus("Unable to GET status, verify backend is running");
      }
    }
  }

  async function readHistory() {
    try {
      const responseStatus = await fetch(serverAddress + "history", {
        method: "GET",
      });
      const response = await responseStatus.json();
      console.log(response);
      await setHistory(response);
    } catch (error) {
      console.error(error);
    }
  }

  async function clearHistory() {
    try {
      const responseStatus = await fetch(serverAddress + "history", {
        method: "DELETE",
      });
      const response = await responseStatus.json();
      console.log(response);
      setHistory(response);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    const writeInterval = setInterval(() => {
      if (isConnected) {
        readStatus();
      }
    }, 50);
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
