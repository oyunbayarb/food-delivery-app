import {FoodCategoriesList} from "@/mainComponents";

export default function Home() {
  return (
    <div className="flex h-screen flex-col bg-[#404040] rounded-lg">
      <div className="bg-[#404040] rounded-lg">
        <img src="./Image-bg.png"></img>
      </div>
      <div>
        <FoodCategoriesList />
      </div>
    </div>
  );
}
