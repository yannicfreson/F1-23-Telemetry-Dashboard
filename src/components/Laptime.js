export default function Laptime({ laptimeInMS }) {
  //convert laptimeInMS to minutes:seconds:milliseconds
  const minutes = Math.floor(laptimeInMS / 60000);
  let seconds = ((laptimeInMS % 60000) / 1000).toFixed(3);
  // zero pad the seconds
  seconds = (seconds < 10 ? "0" : "") + seconds;
  return (
    <>
      {minutes}:{seconds}
    </>
  );
}
