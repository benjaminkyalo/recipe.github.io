const meals = document.getElementById('meals');

getRandomMeal();

async function getRandomMeal() {
    const resp  = await fetch("www.themealdb.com/api/json/v1/1/random.php");

    const respData = await resp.json();
    const randomMeal = respData.Meals[0];

    addMeal(randomMeal, true);


    console.log(randomMeal);

}

async function getMealById(id) {
    const Meal  =  await fetch("www.themealdb.com/api/json/v1/1/lookup.php?i=52772" +id);

}

async function getMealsBySearch(term){
    const Meals = await fetch("www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata" +term);

}

 function addMeal(mealData, radom = false) {
    const Meal = document.createElement("div");
    Meal.classList.add("meal")

    mealData.innerHTML = 
    <div class="meal-header">
        ${
            random?
            <span class="random">Random Recipe</span>
            : ""
        }
        <Img
        scr="${mealData.strMealThumb}"
        alt="${mealData.strMeal}" />
    </div>
    <div>
        <div class="meal-body">
            <h4>${mealData.strMeal}</h4>
            <button class="fav-btn">
            <i class="fa-regular fa-heart"></i>
            </button>
        </div>
    </div>
    
}
