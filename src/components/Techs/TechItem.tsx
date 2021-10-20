import { setTec } from ".";
import { AiOutlinePlus as Icon } from 'react-icons/ai';

type props = {
  tech: setTec,
  selected?: boolean,
  toggleItem: (id: number) => void
}

function TechItem({ tech: { id, img, name, selected }, toggleItem }: props) {
  return (
    <div
      onClick={() => toggleItem(id)}
      className="group w-16 relative cursor-pointer h-16 flex flex-col justify-center items-center box-content p-11"
    >
      {selected && (
        <Icon className="absolute w-5 h-5 flex justify-center items-center right-4 top-4 rounded-full bg-green-500 text-white font-bold text-lg" />
      )}
      <img
        className={`${selected ? 'animate-wiggle' : 'grayscale'} group-hover:grayscale-0`}
        src={img} alt={name}
      />
      <p className="text-center">{name}</p>
    </div>
  );
}

export default TechItem;
