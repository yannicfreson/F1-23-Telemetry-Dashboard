export default function TiresGraphic({ telemetry, status, session, lapData }) {
  return (
    <div className="bg-zinc-900 p-4 rounded-xl font-mono ">
      <p className="text-center text-2xl font-bold uppercase text-zinc-200">
        Tires
      </p>

      <div className="grid grid-rows-1 grid-cols-2">
        <div className="row-span-1 mr-32 flex flex-col items-center gap-2 justify-center row-start-1 col-start-1 col-span-1">
          <p>{`${parseInt(telemetry.tyresPressure[0]).toFixed(0)} PSI`}</p>
          <div className="flex gap-2">
            <p>{`${parseInt(telemetry.tyresSurfaceTemperature[0]).toFixed(
              0
            )}°C`}</p>
            <p>{`${parseInt(telemetry.tyresInnerTemperature[0]).toFixed(
              0
            )}°C`}</p>
          </div>
        </div>
        <div className="row-span-1 ml-4 items-center flex flex-col gap-2 justify-center row-start-1 col-start-2 col-span-1">
          <p>{`${parseInt(telemetry.tyresPressure[2]).toFixed(0)} PSI`}</p>
          <div className="flex gap-2">
            <p>{`${parseInt(telemetry.tyresSurfaceTemperature[2]).toFixed(
              0
            )}°C`}</p>
            <p>{`${parseInt(telemetry.tyresInnerTemperature[2]).toFixed(
              0
            )}°C`}</p>
          </div>
        </div>

        <div className="row-start-2 col-span-2">
          <img src="/F1_Car_Diagram.png" alt="F1 Car Diagram" />
        </div>

        <div className="row-span-1 items-center mr-32 flex flex-col gap-2 justify-center row-start-3 col-start-1 col-span-1">
          <div className="flex gap-2">
            <p>{`${parseInt(telemetry.tyresSurfaceTemperature[1]).toFixed(
              0
            )}°C`}</p>
            <p>{`${parseInt(telemetry.tyresInnerTemperature[1]).toFixed(
              0
            )}°C`}</p>
          </div>
          <p>{`${parseInt(telemetry.tyresPressure[1]).toFixed(0)} PSI`}</p>
        </div>
        <div className="row-span-1 ml-4 flex flex-col items-center gap-2 justify-center row-start-3 col-start-2 col-span-1">
          <div className="flex gap-2">
            <p>{`${parseInt(telemetry.tyresSurfaceTemperature[3]).toFixed(
              0
            )}°C`}</p>
            <p>{`${parseInt(telemetry.tyresInnerTemperature[3]).toFixed(
              0
            )}°C`}</p>
          </div>
          <p>{`${parseInt(telemetry.tyresPressure[3]).toFixed(0)} PSI`}</p>
        </div>
      </div>
    </div>
  );
}
