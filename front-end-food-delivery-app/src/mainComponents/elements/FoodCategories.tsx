export const foodCategoriesList = () => {
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
  ];
  return (
    <div>
      <div>
        <p>Categories</p>
        {foodCategoriesListData.map((value, index) => {
          return (
            <button
              className="flex size-fit text-black items-center justify-center bg-white"
              key={index}
            >
              {value}
            </button>
          );
        })}
      </div>
    </div>
  );
};
