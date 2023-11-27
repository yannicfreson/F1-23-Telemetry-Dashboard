export default function SteeringIcon({ steer }) {
  let steeringAngle = parseFloat(steer).toFixed(2) * 180;
  let barFillStyle = {
    transform: `rotate(${steeringAngle}deg)`,
  };
  return (
    <div>
      <div
        style={barFillStyle}
        className="bg-zinc-200 h-8 w-32 mt-12 rounded-lg"
      ></div>
    </div>
  );
}
