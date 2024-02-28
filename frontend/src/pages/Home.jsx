import About from "../components/About";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="h-screen w-screen snap-y snap-mandatory overflow-scroll">
      <div className="snap-start h-screen w-screen flex items-center justify-center">
        <Header />
      </div>
      <div className="snap-start h-screen w-screen flex items-center p-[200px]">
        <About />
      </div>
    </div>
  );
}
