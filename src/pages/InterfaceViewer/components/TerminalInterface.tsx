import { useEffect, useRef } from "react";
import { Terminal } from "xterm";
import { FitAddon } from "xterm-addon-fit";
import "xterm/css/xterm.css";

export default function TerminalInterface({ status }: { status: string }) {
  const terminal = useRef<Terminal>(new Terminal());
  const fitAddon = useRef<FitAddon>(new FitAddon());

  useEffect(() => {
    terminal.current.open(document.getElementById("terminal") as HTMLElement);
    terminal.current.loadAddon(fitAddon.current);
  }, []);

  useEffect(() => {
    terminal.current.write(status + "\r\n");
  }, [status]);

  return <div id="terminal"></div>;
}
