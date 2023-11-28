import RevLights from "@/components/RevLights";
import Speed from "@/components/Speed";
import Laptime from "@/components/Laptime";
import TotalLaps from "@/components/TotalLaps";
import Gear from "@/components/Gear";
import Position from "@/components/Position";
import ErsStoreEnergy from "@/components/ErsStoreEnergy";
import TyreInnerTemperature from "@/components/TyreInnerTemperature";
import EngineRPM from "./EngineRPM";

export default function SteeringWheelGraphic({
  telemetry,
  status,
  session,
  lapData,
}) {
  return (
    <div className="w-full text-3xl text-center flex flex-col justify-center font-mono text-zinc-200">
      <div className="flex border-[1px] rounded-t-xl border-zinc-700 justify-center">
        <RevLights
          revLightsPercent={telemetry.revLightsPercent}
          drsAllowed={status.drsAllowed}
          drs={telemetry.drs}
        />
      </div>
      <div className="grid grid-cols-5">
        <div className="col-span-1 text-center border-[1px] border-zinc-700">
          <Speed speedInKPH={telemetry.speed} />
        </div>
        <div className="col-span-3 py-2 text-center border-[1px] border-zinc-700 text-6xl">
          <Laptime laptimeInMS={lapData.currentLapTimeInMS} />
        </div>
        <div className="col-span-1 text-center border-[1px] border-zinc-700">
          <EngineRPM rpm={telemetry.engineRPM} />
        </div>
      </div>
      <div className="grid border-[1px] border-zinc-700 grid-cols-5 grid-rows-2">
        <div className="col-span-1 py-4 text-cyan-300 border-[1px] border-zinc-700 row-span-1 col-start-1 row-start-1">
          <TotalLaps totalLaps={session.totalLaps} />
        </div>
        <div className="border-[1px] border-zinc-700 col-span-3 row-span-2 col-start-2 row-start-1 text-9xl py-2">
          <Gear gear={telemetry.gear} />
        </div>
        <div className="border-[1px] py-4 text-cyan-300 border-zinc-700 col-span-1 row-span-1 col-start-5 row-start-1">
          <Position position={lapData.carPosition} />
        </div>
        <div
          style={
            parseInt(telemetry.tyresInnerTemperature) >= 100
              ? { color: "#fde68a" }
              : { color: "#d9f99d" }
          }
          className="border-[1px]
         border-zinc-700 col-span-1 row-span-1 col-start-1 row-start-2"
        >
          {telemetry.tyresInnerTemperature && (
            <>
              <TyreInnerTemperature
                tyreInnerTemperature={telemetry.tyresInnerTemperature[2]}
              />
              <TyreInnerTemperature
                tyreInnerTemperature={telemetry.tyresInnerTemperature[0]}
              />
            </>
          )}
        </div>
        <div
          style={
            parseInt(telemetry.tyresInnerTemperature) >= 100
              ? { color: "#fde68a" }
              : { color: "#d9f99d" }
          }
          className="border-[1px] border-zinc-700 col-span-1 row-span-1 col-start-5 row-start-2"
        >
          {telemetry.tyresInnerTemperature && (
            <>
              <TyreInnerTemperature
                tyreInnerTemperature={telemetry.tyresInnerTemperature[3]}
              />
              <TyreInnerTemperature
                tyreInnerTemperature={telemetry.tyresInnerTemperature[1]}
              />
            </>
          )}
        </div>
      </div>
      <div className="border-[1px] rounded-b-xl overflow-hidden border-zinc-700 text-center">
        <ErsStoreEnergy
          ersStoreEnergy={status.ersStoreEnergy}
          ersDeployMode={status.ersDeployMode}
        />
      </div>
    </div>
  );
}
