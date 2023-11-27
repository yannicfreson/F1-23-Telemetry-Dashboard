"use client";
import SteeringWheelGraphic from "@/components/SteeringWheelGraphic";
import ThrottleBar from "@/components/ThrottleBar";
import BrakeBar from "@/components/BrakeBar";
import { useEffect, useState } from "react";
import io from "socket.io-client";
import SteeringIcon from "@/components/SteeringIcon";

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
    <div className="container mx-auto">
      <div className="w-[48rem] mx-auto">
        <SteeringWheelGraphic
          telemetry={telemetry}
          status={status}
          session={session}
          lapData={lapData}
        />
      </div>

      <div className="bg-zinc-900 rounded-xl w-fit mx-auto">
        <p className="text-center text-2xl font-bold uppercase text-zinc-200">
          Inputs
        </p>
        <div className="w-fit p-4 mx-auto text-3xl flex flex-row gap-2">
          <div className="w-8 h-32">
            <BrakeBar brake={telemetry.brake} />
          </div>

          <div>
            <SteeringIcon steer={telemetry.steer} />
          </div>
          <div className="w-8 h-32">
            <ThrottleBar throttle={telemetry.throttle} />
          </div>
        </div>
      </div>
    </div>
  );
}
