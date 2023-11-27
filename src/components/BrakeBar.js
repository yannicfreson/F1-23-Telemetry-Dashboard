export default function BrakeBar({ brake }) {
  let barFillPercentage = brake * 100;
  let barFillWidth = barFillPercentage;
  let barFillStyle = {
    height: `${100 - barFillWidth}%`,
  };
  return (
    <div>
      <div className="bg-red-500 overflow-hidden rounded-lg h-32 w-8">
        <div
          className="bg-zinc-700 z-10 w-8 text-zinc-950"
          style={barFillStyle}
        ></div>
      </div>
    </div>
  );
}
