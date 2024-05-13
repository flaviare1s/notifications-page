import { useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Notifications } from "./components/Notifications";

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="font-Jakarta flex flex-col justify-center items-center m-auto w-full px-4 md:w-[80%] lg:w-[70%] pt-6 pb-7">
      <Header count={count} setCount={setCount}/>
      <Notifications setCount={setCount} />
      <Footer />
    </div>
  );
}
