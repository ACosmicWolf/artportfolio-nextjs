import Nav from "../components/navbar";
import Homepage from "../components/home";

export default function Home() {
  return (
    <div className="p-0 m-0 bg-ctp-base h-screen relative">
      <Nav />
      <Homepage />
    </div>
  );
}
