import BrakeBar from "./BrakeBar";
import SteeringIcon from "./SteeringIcon";
import ThrottleBar from "./ThrottleBar";

export default function Inputs({ telemetry, status, session, lapData }) {
  return (
    <>
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
    </>
  );
}
