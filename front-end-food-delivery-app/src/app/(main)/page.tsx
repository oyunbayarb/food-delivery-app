import {FoodCategoriesList} from "@/mainComponents";
import {OneFoodCard} from "@/mainComponents/elements";

export default function Home() {
  return (
    <div className="flex h-screen flex-col bg-[#404040] rounded-md p-10">
      <div className="bg-[#404040] bg-contain flex flex-col">
        <img src="./Image-bg.png" className="rounded-3xl"></img>
        <div>
          <FoodCategoriesList />
          <OneFoodCard />
        </div>
      </div>
    </div>
  );
}
