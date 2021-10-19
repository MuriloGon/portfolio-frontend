import Navbar from "../Navbar";

interface MainProps {
  children: JSX.Element
}

function MainLayout({children}: MainProps){
  return (
    <div>
      <Navbar />
      <main>
        {children}
      </main>
    </div>
  );
}

export default MainLayout;
