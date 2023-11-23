export default function Laptime({ laptimeInMS }) {
  //convert laptimeInMS to minutes:seconds:milliseconds
  const minutes = Math.floor(laptimeInMS / 60000);
  const seconds = ((laptimeInMS % 60000) / 1000).toFixed(3);
  return (
    <>
      {minutes}:{seconds}
    </>
  );
}
