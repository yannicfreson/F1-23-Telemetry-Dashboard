import BrakeBar from "./BrakeBar";

export default function InputBrake({ telemetry, status, session, lapData }) {
  return (
    <>
      <div className="w-fit p-4 mx-auto text-3xl flex flex-row gap-2">
        <div className="w-8">
          <BrakeBar brake={telemetry.brake} />
        </div>
      </div>
    </>
  );
}
