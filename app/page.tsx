import Button from "./components/Button";


export default function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-8 mt-10 m-auto font-[family-name:var(--font-geist-sans)]">
      <h1>This is the page!</h1>
      {/* <div className="flex items-center h-20 w-60 bg-gradient-to-r from-[#45565E] via-[#5E747F] to-[#728B97] animate-breeze-ocean p-6 rounded-lg">Background colour chnage</div> */}
      <Button />
    </div>
  );
}
