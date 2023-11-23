"use client";
import RevLights from "@/components/RevLights";
import Speed from "@/components/Speed";
import Laptime from "@/components/Laptime";
import TotalLaps from "@/components/TotalLaps";
import Gear from "@/components/Gear";
import Position from "@/components/Position";
import ErsStoreEnergy from "@/components/ErsStoreEnergy";
import TyreInnerTemperature from "@/components/TyreInnerTemperature";
import { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3001");

export default function Home() {
  const [telemetry, setTelemetry] = useState(0);
  const [status, setStatus] = useState(0);
  const [session, setSession] = useState(0);
  const [lapData, setLapData] = useState(0);

  useEffect(() => {
    const handleTelemetryData = (telemetryData) => {
      if (
        telemetryData.tyresInnerTemperature[0] === undefined ||
        telemetryData.tyresInnerTemperature[1] === undefined ||
        telemetryData.tyresInnerTemperature[2] === undefined ||
        telemetryData.tyresInnerTemperature[3] === undefined ||
        telemetryData.tyresInnerTemperature[0] === null ||
        telemetryData.tyresInnerTemperature[1] === null ||
        telemetryData.tyresInnerTemperature[2] === null ||
        telemetryData.tyresInnerTemperature[3] === null ||
        telemetryData.tyresInnerTemperature === undefined ||
        telemetryData.tyresInnerTemperature === null
      ) {
        telemetryData.tyresInnerTemperature = [0, 0, 0, 0];
      }
      setTelemetry(telemetryData);
    };

    const handleStatusData = (statusData) => {
      setStatus(statusData);
    };

    const handleSessionData = (sessionData) => {
      setSession(sessionData);
    };

    const handleLapData = (lapData) => {
      setLapData(lapData);
    };

    socket.on("telemetryData", handleTelemetryData);
    socket.on("statusData", handleStatusData);
    socket.on("sessionData", handleSessionData);
    socket.on("lapData", handleLapData);
  }, []);

  return (
    <div className="container mx-auto py-2">
      <div className="w-full text-3xl text-center flex flex-col justify-center font-mono">
        <div className="flex border-[1px] border-zinc-700 justify-center">
          <RevLights revLightsPercent={telemetry.revLightsPercent} />
        </div>
        <div className="grid grid-cols-5">
          <div className="col-span-1 text-center border-[1px] border-zinc-700">
            <Speed speedInKPH={telemetry.speed} />
          </div>
          <div className="col-span-3 text-center border-[1px] border-zinc-700 text-6xl">
            <Laptime laptimeInMS={lapData.currentLapTimeInMS} />
          </div>
          <div className="col-span-1 text-center border-[1px] border-zinc-700"></div>
        </div>
        <div className="grid border-[1px] border-zinc-700 grid-cols-5 grid-rows-2">
          <div className="col-span-1 border-[1px] border-zinc-700 row-span-1 col-start-1 row-start-1">
            <TotalLaps totalLaps={session.totalLaps} />
          </div>
          <div className="border-[1px] border-zinc-700 col-span-3 row-span-2 col-start-2 row-start-1 text-9xl">
            <Gear gear={telemetry.gear} />
          </div>
          <div className="border-[1px] border-zinc-700 col-span-1 row-span-1 col-start-5 row-start-1">
            <Position position={lapData.carPosition} />
          </div>
          <div className="border-[1px] border-zinc-700 col-span-1 row-span-1 col-start-1 row-start-2">
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
          <div className="border-[1px] border-zinc-700 col-span-1 row-span-1 col-start-5 row-start-2">
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
        <div className="border-[1px] border-zinc-700 text-center">
          <ErsStoreEnergy ersStoreEnergy={status.ersStoreEnergy} />
        </div>
      </div>
    </div>
  );
}
