interface GaugeArgs {
  value: number;
  start?: number;
  min?: number;
  max?: number;
  gauge?: string;
  color?: string;
  title?: string;
  label?: string;
}

export function HalfAngleGauge({
  value,
  start,
  min,
  max,
  gauge,
  color,
  title,
  label,
}: GaugeArgs) {
  start ??= 0;
  min ??= 0;
  max ??= 1;
  gauge ??= "lime";
  color ??= "white";
  title ??= "";
  label ??= (Math.round(value * 10) / 10).toFixed(1);

  const viewport = {
    width: 48,
    height: 24,
  };

  const r = 20;
  const strokeWidth = 4;
  const gaugeColor = gauge;
  const textColor = color;

  const map = (value: number, min: number, max: number) => {
    value = (value - min) / (max - min);
    value = Math.min(Math.max(value, 0), 1);
    return value;
  };

  let percentStart = map(start, min, max);
  let percentEnd = map(value, min, max);

  const startPoint = {
    x: -r * Math.cos(percentStart * Math.PI) + viewport.width / 2,
    y: viewport.height - r * Math.sin(percentStart * Math.PI),
  };

  const endPoint = {
    x: -r * Math.cos(percentEnd * Math.PI) + viewport.width / 2,
    y: viewport.height - r * Math.sin(percentEnd * Math.PI),
  };
  const ccwFlag = percentStart < percentEnd ? 1 : 0;

  return (
    <div className="flex-centered">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${viewport.width} ${viewport.height}`}
      >
        <path
          d={`M ${startPoint.x} ${startPoint.y} A ${r} ${r} 0 0 ${ccwFlag} ${endPoint.x} ${endPoint.y}`}
          stroke={gaugeColor}
          fill="none"
          strokeWidth={strokeWidth}
        ></path>
        <text
          fill={textColor}
          x={viewport.width / 2}
          y={viewport.height - 2}
          fontSize={viewport.height / 2}
          textAnchor="middle"
          fontVariant="tabular-nums"
        >
          {label}
        </text>
      </svg>
      <h4>{title}</h4>
    </div>
  );
}
