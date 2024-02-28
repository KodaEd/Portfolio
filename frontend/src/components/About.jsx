export default function About() {
  return (
    <div className="flex gap-[40px] w-full">
      <div className="scroll-m-20 max-w-[700px] text-4xl font-extrabold tracking-tight lg:text-5xl">
        <div className="mb-5">
          The website is still work in progress 😅
        </div>
        <a
          href="/resume.pdf"
          className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
        >
          Checkout my Resume!
        </a>
      </div>
    </div>
  );
}
