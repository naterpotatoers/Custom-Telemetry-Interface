export function serialParser(
  rawString: string,
  numberOfKeys: number
): any | null {
  const commandList = rawString.split("\n").filter((command) => {
    try {
      return Object.keys(JSON.parse(command)).length === numberOfKeys;
    } catch (e) {
      return;
    }
  });
  return commandList.length > 0
    ? JSON.parse(commandList[commandList.length - 1])
    : null;
}
