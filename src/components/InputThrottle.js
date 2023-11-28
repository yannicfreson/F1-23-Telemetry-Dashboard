import ThrottleBar from "./ThrottleBar";

export default function InputThrottle({ telemetry, status, session, lapData }) {
  return (
    <>
      <div className="w-fit p-4 mx-auto text-3xl flex flex-row gap-2">
        <div className="w-8">
          <ThrottleBar throttle={telemetry.throttle} />
        </div>
      </div>
    </>
  );
}
