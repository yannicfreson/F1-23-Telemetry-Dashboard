export default function ErsStoreEnergy({ ersStoreEnergy, ersDeployMode }) {
  let barFillPercentage = ersStoreEnergy / 4000000;
  let barFillWidth = barFillPercentage * 100;
  let barFillStyle = {
    width: `${barFillWidth}%`,
  };

  return (
    <div>
      {ersDeployMode === 3 ? (
        <>
          <p className="-mb-9">OVERTAKE</p>
          <div className="bg-green-700 h-8">
            <div
              className="bg-green-500 z-10 h-8 text-zinc-950"
              style={barFillStyle}
            >
              {""}
            </div>
          </div>
        </>
      ) : (
        <>
          <p className="-mb-9">⚡️ {barFillWidth.toFixed(0)}%</p>
          <div className="bg-yellow-700 h-8">
            <div
              className="bg-yellow-500 z-10 h-8 text-zinc-950"
              style={barFillStyle}
            >
              {""}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
