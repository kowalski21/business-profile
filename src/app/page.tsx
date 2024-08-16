import HeroContainer from "@/components/HeroContainer";
import HeroSection from "@/components/HeroSection";
import MyListContainer from "@/components/MyListContainer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <HeroSection /> */}
      <HeroContainer />
      {/* <MyListContainer /> */}
    </main>
  );
}
