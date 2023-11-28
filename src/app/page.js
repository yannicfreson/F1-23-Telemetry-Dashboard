"use client";
import SteeringWheelGraphic from "@/components/SteeringWheelGraphic";
import { useEffect, useState } from "react";
import io from "socket.io-client";
import Inputs from "@/components/Inputs";
import TiresGraphic from "@/components/TiresGraphic";
import InputThrottle from "@/components/InputThrottle";
import InputBrake from "@/components/InputBrake";

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
    <div className="container mx-auto py-4 flex flex-col gap-6">
      <div className="w-[48rem] mx-auto">
        <SteeringWheelGraphic
          telemetry={telemetry}
          status={status}
          session={session}
          lapData={lapData}
        />
      </div>

      <div className="flex gap-3 -mx-2">
        <div className="bg-zinc-900 rounded-xl w-fit mx-auto">
          <InputBrake
            telemetry={telemetry}
            status={status}
            session={session}
            lapData={lapData}
          />
        </div>

        <div className="w-[36rem] mx-auto">
          <TiresGraphic
            telemetry={telemetry}
            status={status}
            session={session}
            lapData={lapData}
          />
        </div>

        <div className="bg-zinc-900 rounded-xl w-fit mx-auto">
          <InputThrottle
            telemetry={telemetry}
            status={status}
            session={session}
            lapData={lapData}
          />
        </div>
      </div>
    </div>
  );
}
