interface GaugeArgs {
  value: number;
  start?: number;
  min?: number;
  max?: number;
  gauge?: string;
  color?: string;
  title?: string;
  label?: string;
  minWidth?: string;
}

export function HorizontalLinearGauge({
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
  gauge ??= "#5EE05C";
  color ??= "#FFFFFFDD";
  title ??= "";
  label ??= (Math.round(value * 10) / 10).toFixed(1);

  const viewport = {
    width: 48,
    height: 5,
  };

  const strokeWidth = 4;
  const gaugeColor = gauge;

  const map = (value: number, min: number, max: number) => {
    value = (value - min) / (max - min);
    value = Math.min(Math.max(value, 0), 1);
    return value;
  };

  let percentStart = map(start, min, max);
  let percentEnd = map(value, min, max);

  const startPoint = {
    x: percentStart * viewport.width,
    y: viewport.height / 2,
  };

  const endPoint = {
    x: percentEnd * viewport.width,
    y: viewport.height / 2,
  };

  return (
    <div className="flex-centered">
      <div style={{ width: "150px" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={`0 0 ${viewport.width} ${viewport.height}`}
          width="150px"
        >
          <path
            d={`M ${startPoint.x} ${startPoint.y} L ${endPoint.x} ${endPoint.y}`}
            stroke={gaugeColor}
            fill="none"
            strokeWidth={strokeWidth}
          ></path>
        </svg>
        <div style={{ fontVariantNumeric: "tabular-nums" }}>{label}</div>
      </div>
      {title && <h4>{title}</h4>}
    </div>
  );
}

export function VerticalLinearGauge({
  value,
  start,
  min,
  max,
  gauge,
  color,
  title,
  label,
  minWidth,
}: GaugeArgs) {
  start ??= 0;
  min ??= 0;
  max ??= 1;
  gauge ??= "#5EE05C";
  color ??= "#FFFFFFDD";
  title ??= "";
  label ??= (Math.round(value * 10) / 10).toFixed(1);
  minWidth ??= "60px";

  const viewport = {
    width: 5,
    height: 48,
  };

  const strokeWidth = 4;
  const gaugeColor = gauge;

  const map = (value: number, min: number, max: number) => {
    value = (value - min) / (max - min);
    value = Math.min(Math.max(value, 0), 1);
    return value;
  };

  let percentStart = map(start, min, max);
  let percentEnd = map(value, min, max);

  const startPoint = {
    x: viewport.width / 2,
    y: (1 - percentStart) * viewport.height,
  };

  const endPoint = {
    x: viewport.width / 2,
    y: (1 - percentEnd) * viewport.height,
  };

  return (
    <div className="flex-centered">
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          minWidth: minWidth,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={`0 0 ${viewport.width} ${viewport.height}`}
          height="150px"
        >
          <path
            d={`M ${startPoint.x} ${startPoint.y} L ${endPoint.x} ${endPoint.y}`}
            stroke={gaugeColor}
            fill="none"
            strokeWidth={strokeWidth}
          ></path>
        </svg>
        <div style={{ marginLeft: ".25rem", fontVariantNumeric: "tabular-nums" }}>
          {label}
        </div>
      </div>
      {title && <h4>{title}</h4>}
    </div>
  );
}
