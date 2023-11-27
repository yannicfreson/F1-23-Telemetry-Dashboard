export default function ThrottleBar({ throttle }) {
  let barFillPercentage = throttle * 100;
  let barFillWidth = barFillPercentage;
  let barFillStyle = {
    height: `${100 - barFillWidth}%`,
  };
  return (
    <div>
      <div className="bg-green-500 h-32 rounded-lg overflow-hidden w-8">
        <div
          className="bg-zinc-700 z-10 w-8 text-zinc-950"
          style={barFillStyle}
        ></div>
      </div>
    </div>
  );
}
