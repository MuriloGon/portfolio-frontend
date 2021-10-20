import { useState } from "react";
import MainTech from "./MainTech";
import techs, { tech } from "./techsData";

export interface setTec extends tech {
  selected: boolean
}

function Techs() {
  const [tecs, setTecs] = useState<setTec[]>(techs.map(x => ({ ...x, selected: false })));

  const toggleItem = (id: number) => {
    const stCpy = [...tecs];
    const itemIndex = stCpy.findIndex((cpyId) => cpyId.id === id);
    stCpy[itemIndex].selected = !stCpy[itemIndex].selected;
    setTecs(stCpy);
  }

  const clearFilter = () => {
    const stCpy = [...tecs].map(x => ({ ...x, selected: false }));
    setTecs(stCpy);
  }

  const someSelected = tecs.some(x => x.selected);
  const style = "font-bold p-2 rounded-lg hover:bg-opacity-80 hover:shadow-lg";

  return (
    <div className="grid row-span-2">
      <div className="overflow-hidden">
        <MainTech toggleItem={toggleItem} data={tecs} direction="left" velocity={138} />
        <MainTech toggleItem={toggleItem} data={tecs} direction="right" velocity={69} />
      </div>

      {someSelected && <div className={`flex justify-around text-sm`}>
        <button
          onClick={clearFilter}
          className={`bg-red-500 text-white ${style}`}>
          Clear Filter
        </button>
        <button
          onClick={() => {
            const selected = tecs.filter(x => x.selected).map(({ id }) => id);
            console.log(selected);
          }
          }
          className={`bg-yellow-300 text-red-900 ${style}`}>
          Find Projects
        </button>
      </div>}
    </div>
  );
}

export default Techs;
