import { Fragment } from "react";

interface PrimaryFlightDisplay {
  roll?: number;
  pitch?: number;
}

export default function PrimaryFlightDisplay({
  roll = 0,
  pitch = 0,
}: PrimaryFlightDisplay) {
  roll = roll ?? 0;
  pitch = pitch ?? 0;

  let pitchSetpoint = 100;
  let rollSetpoint = 0;

  const pitchTicks = [];
  for (let angle = -36; angle <= 36; angle++) {
    let width = 2;
    let hasText = false;
    if (angle % 4 == 0) {
      width = 10;
      hasText = true;
    } else if (angle % 2 == 0) {
      width = 8;
    }
    pitchTicks.push({ value: angle * 2.5, width: width, hasText: hasText });
  }

  const pitchScale = 1;

  const minRoll = -30;
  const maxRoll = 30;
  const rollTickDist = 16;

  const rollTicks = [];
  for (let angle = minRoll; angle <= maxRoll; angle += 10) {
    let width = 2;
    if (angle % 30 == 0) {
      width = 2;
    } else if (angle % 10 == 0) {
      width = 1;
    }
    rollTicks.push({ value: (angle * Math.PI) / 180, width: width });
  }

  let pitchSetpointLocation = 0;
  pitchSetpointLocation = Math.min(
    Math.max(
      -(pitchSetpoint - pitch) * pitchScale,
      -Math.sqrt((rollTickDist - 1) * (rollTickDist - 1) - 100)
    ),
    16
  );

  return (
    <div className="flex-centered">
      <svg
        viewBox="20 20 40 40"
        xmlns="http://www.w3.org/2000/svg"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="black"
        width={600}
      >
        {/* Pitch Indicator Clipping */}
        <clipPath id="roll-pitch-clip">
          <circle cx="40" cy="40" r={rollTickDist - 2}></circle>
          <rect x={0} y={40} width={80} height={40} rx={10}></rect>
        </clipPath>
        {/* Artificial Horizon Clipping */}
        <clipPath id="artificial-horizon-clip">
          <rect x={20} y={20} width={40} height={40} rx={10}></rect>
        </clipPath>

        <g clipPath="url(#artificial-horizon-clip)">
          <g transform={`rotate(${-roll}, 40, 40)`} strokeWidth="0.15">
            {/* Artificial Horizon */}
            <g>
              <rect
                x={0}
                y={-80 + pitch * pitchScale}
                width={80}
                height={160}
                stroke="none"
                fill="white"
              ></rect>
              <rect
                x={0}
                y={40 + pitch * pitchScale}
                width={80}
                height={160}
                stroke="none"
                fill="lime"
              ></rect>
            </g>

            {/* Rolled Pitch Indicator */}
            <path
              fill="none"
              d={`M 40 ${40 - rollTickDist + 0.5} L 39.5 ${
                40 - rollTickDist + 1.5
              } L 40.5 ${40 - rollTickDist + 1.5} L 40 ${
                40 - rollTickDist + 0.5
              }`}
            ></path>

            {/* Pitch Setpoint Indicator */}
            <g>
              <path
                fill="none"
                d={`M 30 ${pitchSetpointLocation + 40} L 29 ${
                  pitchSetpointLocation + 39.5
                } L 29 ${pitchSetpointLocation + 40.5} L 30 ${
                  pitchSetpointLocation + 40
                }`}
              ></path>
              <path
                fill="none"
                d={`M 50 ${pitchSetpointLocation + 40} L 51 ${
                  pitchSetpointLocation + 39.5
                } L 51 ${pitchSetpointLocation + 40.5} L 50 ${
                  pitchSetpointLocation + 40
                }`}
              ></path>
            </g>

            {/* // Pitch Indicator */}
            <g clipPath="url(#roll-pitch-clip)">
              {pitchTicks.map((tick, i) => {
                return (
                  <Fragment key={i}>
                    <path
                      d={`M ${40 - tick.width / 2} ${
                        -(tick.value - pitch) * pitchScale + 40
                      } L ${40 + tick.width / 2} ${
                        -(tick.value - pitch) * pitchScale + 40
                      }`}
                    ></path>
                    {tick.hasText ? (
                      <>
                        <text
                          stroke="none"
                          x={42 + tick.width / 2}
                          y={-(tick.value - pitch) * pitchScale + 40}
                          textAnchor="start"
                          dominantBaseline="central"
                          fontSize="2px"
                        >
                          {tick.value}
                        </text>
                        <text
                          stroke="none"
                          x={38 - tick.width / 2}
                          y={-(tick.value - pitch) * pitchScale + 40}
                          textAnchor="end"
                          dominantBaseline="central"
                          fontSize="2px"
                        >
                          {tick.value}
                        </text>
                      </>
                    ) : (
                      <></>
                    )}
                  </Fragment>
                );
              })}
            </g>
          </g>
        </g>
        {/* Roll Indicator */}
        <g fill="none" strokeWidth="0.2">
          <path
            d={`M ${rollTickDist * Math.sin((minRoll * Math.PI) / 180) + 40} ${
              -rollTickDist * Math.cos((minRoll * Math.PI) / 180) + 40
            } A ${rollTickDist} ${rollTickDist} 0 0 1 ${
              rollTickDist * Math.sin((maxRoll * Math.PI) / 180) + 40
            } ${-rollTickDist * Math.cos((maxRoll * Math.PI) / 180) + 40}`}
          ></path>
          {rollTicks.map((tick, key) => {
            return (
              <path
                key={key}
                d={`M ${rollTickDist * Math.sin(tick.value) + 40} ${
                  -rollTickDist * Math.cos(tick.value) + 40
                } L ${
                  (rollTickDist + tick.width) * Math.sin(tick.value) + 40
                } ${-(rollTickDist + tick.width) * Math.cos(tick.value) + 40}`}
              ></path>
            );
          })}
        </g>

        {/* Roll Setpoint Indicator */}
        <g transform={`rotate(${-rollSetpoint}, {}, 40)`}>
          <path
            d={`M 40 ${40 - rollTickDist - 2.5} L 39.5 ${
              40 - rollTickDist - 2.5 - 1
            } L 40.5 ${40 - rollTickDist - 2.5 - 1} L 40 ${
              40 - rollTickDist - 2.5
            }`}
            strokeWidth="0.2"
            stroke="black"
            fill="none"
          ></path>
        </g>

        {/* // Center Crosshair */}
        <g strokeWidth="0.28" fill="none">
          <path d="M 37 40 L 39.5 40"></path>
          <path d="M 43 40 L 40.5 40"></path>
          <path d="M 39.5 40 L 39.5 41"></path>
          <path d="M 40.5 40 L 40.5 41"></path>
        </g>
      </svg>
    </div>
  );
}
