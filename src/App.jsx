import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export function App() {
  return (
    <div className="font-Jakarta flex flex-col justify-center items-center m-auto w-full px-4 md:w-[80%] lg:w-[70%] pt-6 pb-7">
      <Header />
      <Footer />
    </div>
  );
}
