export default function EngineRPM({ rpm }) {
  //pad rom to 5 digits
  let rpmString = rpm.toString();
  let rpmLength = rpmString.length;
  let rpmPadding = 5 - rpmLength;
  let rpmPadded = "0".repeat(rpmPadding) + rpmString;

  return (
    <>
      <p>{rpmPadded}</p>
      <p>RPM</p>
    </>
  );
}
