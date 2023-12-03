export default function Compass({ heading }: { heading: number }) {
  const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  const direction = directions[Math.round(heading / 45) % 8];

  return (
    <div
      id="compass"
      style={{
        width: "400px",
        height: "400px",
      }}
    >
      <div id="compass-rose">
        <div id="compass-needle">
          <div
            id="compass-direction"
            style={{
              transform: `rotate(${heading}deg)`,
              fontSize: "400px",
              fontFamily: "Arial",
            }}
          >
            &#8593;
          </div>
        </div>
      </div>
      {heading.toFixed(2)}&deg; {direction}
    </div>
  );
}
