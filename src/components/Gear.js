export default function Gear({ gear }) {
  if (gear === 0) {
    return <>N</>;
  } else {
    return <>{gear}</>;
  }
}
