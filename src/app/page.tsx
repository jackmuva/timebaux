import { Header } from "@/components/custom/header";
import UndergroundFeed from "@/components/custom/feed/underground-feed";
import { CoverImage } from "@/components/custom/cover-image";

export default function Home() {

  //TODO: Banner Image
  return (
    <div className="font-mono w-dvw h-dvh flex flex-col">
      <Header />
      <CoverImage />
      <UndergroundFeed />
    </div>
  );
}
