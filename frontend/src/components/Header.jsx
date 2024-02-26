import HeadShot from "../assets/1685687015475.jpeg";

export default function Header() {
  return (
    <div className="flex gap-[40px]">
      <img
        className="w-[200px] h-auto rounded-full"
        src={HeadShot}
        alt="A photo of my head"
      />
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Hello! <br />
        Im Koda, &nbsp;a <br />
        Software Developer <br />
        based in Sydney <br />
      </h1>
    </div>
  );
}
