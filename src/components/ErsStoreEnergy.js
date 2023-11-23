export default function ErsStoreEnergy({ ersStoreEnergy }) {
  let barFillPercentage = ersStoreEnergy / 4000000;
  let barFillWidth = barFillPercentage * 100;
  let barFillStyle = {
    width: `${barFillWidth}%`,
  };
  return (
    <div>
      <div className="bg-yellow-700 h-8">
        <div
          className="bg-yellow-500 z-10 h-8 text-zinc-950"
          style={barFillStyle}
        >
          ⚡️{barFillWidth.toFixed(0)}%
        </div>
      </div>
    </div>
  );
}
