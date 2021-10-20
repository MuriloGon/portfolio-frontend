import MainTech from "./MainTech";
import techs from "./techsData";

function Techs() {
  const t1 = techs.filter((_, i) => i < Math.floor(techs.length / 2));
  const t2 = techs.filter((_, i) => i >= Math.floor(techs.length / 2));

  return (
    <>
      <MainTech data={t1} direction="left" velocity={200} />
      <MainTech data={t2} direction="right" velocity={150} />
    </>
  );
}

export default Techs;
