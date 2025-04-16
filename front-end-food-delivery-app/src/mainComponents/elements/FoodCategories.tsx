import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const FoodCategoriesList = () => {
  const foodCategoriesListData = [
    "Appetizers",
    "Salads",
    "Pizzas",
    "Lunch favorites",
    "Main dishes",
    "Fish & Sea foods",
    "Side dish",
    "Brunch",
    "Desserts",
    "Beverages",
    "Appetizers",
    "Salads",
    "Pizzas",
    "Lunch favorites",
    "Main dishes",
    "Fish & Sea foods",
    "Side dish",
    "Brunch",
    "Desserts",
    "Beverages",
  ];
  return (
    <div className="flex p-8 flex-col gap-5 overflow-hidden">
      <p className="text-white font-semibold text-[30px]">Categories</p>
      <div className="flex-row flex">
        <Carousel className="flex absolute">
          <CarouselContent className="flex relative">
            {foodCategoriesListData.map((value, index) => {
              return (
                <button
                  className="flex items-center justify-center bg-white border-1 rounded-full min-h-[56px] min-w-[96px] h-fit"
                  key={index}
                >
                  {value}
                </button>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="flex absolute ml-12 size-2 border-none" />
          <CarouselNext className="flex absolute mr-12 size-2 border-none" />
        </Carousel>
      </div>
    </div>
  );
};
