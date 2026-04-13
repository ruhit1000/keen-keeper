import AllFriends from "@/components/Homepage/AllFriends/AllFriends";
import Banner from "@/components/Homepage/Banner/Banner";
import Dashboard from "@/components/Homepage/Dashboard/Dashboard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#F8FAFC]">
      <Banner />
      <Dashboard />
      <AllFriends />
    </div>
  );
}
