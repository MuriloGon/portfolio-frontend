import { useState } from "react";

type props = { name: string, img: string, selected?: boolean }

function TechItem({ name, img, selected = false }: props) {
  const [t, sT] = useState(selected);
  return (
    <div
      onClick={() => sT(x => !x)}
      className="group w-16 relative cursor-pointer h-16 flex flex-col justify-center items-center box-content p-11"
    >
      {t && <div className="absolute w-5 h-5 flex justify-center items-center right-4 top-4 rounded-full bg-red-500 text-white font-bold text-lg">-</div>}
      <img
        className={`${t ? '' : 'grayscale'} group-hover:grayscale-0`}
        src={img} alt={name}
      />
      <p className="text-center">{name}</p>
    </div>
  );
}

export default TechItem;
