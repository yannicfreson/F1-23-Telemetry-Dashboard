export default function RevLights({ revLightsPercent }) {
  // map the revLightsPercent to an integer between 0 and 15
  let revLightsOn = Math.floor((revLightsPercent / 100) * 15);

  // create an array of 14 elements
  const revLights = Array.from(Array(15).keys());

  revLights[0] = { on: false };
  revLights[1] = { on: false };
  revLights[2] = { on: false };
  revLights[3] = { on: false };
  revLights[4] = { on: false };
  revLights[5] = { on: false };
  revLights[6] = { on: false };
  revLights[7] = { on: false };
  revLights[8] = { on: false };
  revLights[9] = { on: false };
  revLights[10] = { on: false };
  revLights[11] = { on: false };
  revLights[12] = { on: false };
  revLights[13] = { on: false };
  revLights[14] = { on: false };

  for (let i = 0; i < revLightsOn; i++) {
    revLights[i].on = true;
  }

  return (
    <div className="flex justify-between p-2 w-full">
      {revLights[0].on ? (
        <div className="bg-green-500 border-[1px] border-green-600 w-10 h-10 rounded-full"></div>
      ) : (
        <div className="bg-zinc-800 border-[1px] border-slate-700 w-10 h-10 rounded-full"></div>
      )}
      {revLights[1].on ? (
        <div className="bg-green-500 border-[1px] border-green-600 w-10 h-10 rounded-full"></div>
      ) : (
        <div className="bg-zinc-800 border-[1px] border-slate-700 w-10 h-10 rounded-full"></div>
      )}
      {revLights[2].on ? (
        <div className="bg-green-500 border-[1px] border-green-600 w-10 h-10 rounded-full"></div>
      ) : (
        <div className="bg-zinc-800 border-[1px] border-slate-700 w-10 h-10 rounded-full"></div>
      )}
      {revLights[3].on ? (
        <div className="bg-green-500 border-[1px] border-green-600 w-10 h-10 rounded-full"></div>
      ) : (
        <div className="bg-zinc-800 border-[1px] border-slate-700 w-10 h-10 rounded-full"></div>
      )}
      {revLights[4].on ? (
        <div className="bg-green-500 border-[1px] border-green-600 w-10 h-10 rounded-full"></div>
      ) : (
        <div className="bg-zinc-800 border-[1px] border-slate-700 w-10 h-10 rounded-full"></div>
      )}
      {revLights[5].on ? (
        <div className="bg-red-500 border-[1px] border-red-600 w-10 h-10 rounded-full"></div>
      ) : (
        <div className="bg-zinc-800 border-[1px] border-slate-700 w-10 h-10 rounded-full"></div>
      )}
      {revLights[6].on ? (
        <div className="bg-red-500 border-[1px] border-red-600 w-10 h-10 rounded-full"></div>
      ) : (
        <div className="bg-zinc-800 border-[1px] border-slate-700 w-10 h-10 rounded-full"></div>
      )}
      {revLights[7].on ? (
        <div className="bg-red-500 border-[1px] border-red-600 w-10 h-10 rounded-full"></div>
      ) : (
        <div className="bg-zinc-800 border-[1px] border-slate-700 w-10 h-10 rounded-full"></div>
      )}
      {revLights[8].on ? (
        <div className="bg-red-500 border-[1px] border-red-600 w-10 h-10 rounded-full"></div>
      ) : (
        <div className="bg-zinc-800 border-[1px] border-slate-700 w-10 h-10 rounded-full"></div>
      )}
      {revLights[9].on ? (
        <div className="bg-red-500 border-[1px] border-red-600 w-10 h-10 rounded-full"></div>
      ) : (
        <div className="bg-zinc-800 border-[1px] border-slate-700 w-10 h-10 rounded-full"></div>
      )}
      {revLights[10].on ? (
        <div className="bg-purple-500 border-[1px] border-purple-600 w-10 h-10 rounded-full"></div>
      ) : (
        <div className="bg-zinc-800 border-[1px] border-slate-700 w-10 h-10 rounded-full"></div>
      )}
      {revLights[11].on ? (
        <div className="bg-purple-500 border-[1px] border-purple-600 w-10 h-10 rounded-full"></div>
      ) : (
        <div className="bg-zinc-800 border-[1px] border-slate-700 w-10 h-10 rounded-full"></div>
      )}
      {revLights[12].on ? (
        <div className="bg-purple-500 border-[1px] border-purple-600 w-10 h-10 rounded-full"></div>
      ) : (
        <div className="bg-zinc-800 border-[1px] border-slate-700 w-10 h-10 rounded-full"></div>
      )}
      {revLights[13].on ? (
        <div className="bg-purple-500 border-[1px] border-purple-600 w-10 h-10 rounded-full"></div>
      ) : (
        <div className="bg-zinc-800 border-[1px] border-slate-700 w-10 h-10 rounded-full"></div>
      )}
      {revLights[14].on ? (
        <div className="bg-purple-500 border-[1px] border-purple-600 w-10 h-10 rounded-full"></div>
      ) : (
        <div className="bg-zinc-800 border-[1px] border-slate-700 w-10 h-10 rounded-full"></div>
      )}
    </div>
  );
}
