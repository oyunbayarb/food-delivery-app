export const OneFoodCard = ({
  foodTitle,
  foodPrice,
  foodIngredients,
}: {
  foodTitle: string;
  foodPrice: number;
  foodIngredients: string;
}) => {
  return (
    <div className="flex w-[398px] h-[342px] rounded-lg bg-white p-4 flex-col gap-3">
      <div className="w-[365px] h-[210px]">
        <img
          className="w-full h-full rounded-2xl"
          src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=2581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ></img>
      </div>
      <div className="flex justify-between w-full">
        <p className="text-red-700 font-semibold text-2xl">
          {"Hawai Chicken Pizza Smoked"}
        </p>
        <p className="text-black font-semibold text-2xl">${10}</p>
      </div>
      <div>
        <p>
          {
            "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar."
          }
        </p>
      </div>
    </div>
  );
};
