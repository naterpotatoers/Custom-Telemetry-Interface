export default function Compass({ heading }: { heading: number }) {
  const directions = [
    "North",
    "Northeast",
    "East",
    "Southeast",
    "South",
    "Southwest",
    "West",
    "Northwest",
  ];
  const direction = directions[Math.round(heading / 45) % 8];

  return (
    <div className="flex-centered">
      <div
        id="compass"
        style={{
          width: "100px",
          height: "100px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div id="compass-rose">
          <div id="compass-needle">
            <div
              id="compass-direction"
              style={{
                transform: `rotate(${heading}deg)`,
                fontSize: "60px",
                fontFamily: "Arial",
                justifyContent: "center",
                alignItems: "center",
                color: "lime",
                padding: "20px"
              }}
            >
              &#8593;
            </div>
          </div>
        </div>
        <h4>
          {heading.toFixed(2)}&deg; {direction}
        </h4>
      </div>
    </div>
  );
}
