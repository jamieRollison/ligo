import { postEvent } from '$lib/api/post'

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const name = data.get('name');
    const location = data.get('location');
    const start_date = data.get('start_date');
    const attendance = data.get('attendance');

    
    const shirtCost = 0.1;
    const sweaterCost = 1.51;
    const paperCost = 0.01;
    const vegMeal = 0.244;
    const compMeal = 0.341;
    const regMeal = 0.941;


    let carbon = 0.0;
    if (data.get('shirt')){ carbon += shirtCost}
    if (data.get('sweater')){ carbon += sweaterCost}
    if (data.get('paper')){ carbon += paperCost}

    let meal_carbon = 0.0
    // assuming no waste if pre-orderded, best case meal
    if (data.get('pre_order') === ""){
      if(data.get('vegetarian')){ 
        meal_carbon = vegMeal  
      }  else if(data.get('compost')){ 
        meal_carbon = compMeal  
      } else{
        meal_carbon = regMeal  
      }
    }
    if (data.get('cutlery')){ meal_carbon += 0.018}
    if (data.get('single_use')){ meal_carbon += 0.0038}
    if (data.get('single_use_container')){ meal_carbon += 0.019}
    carbon += data.get('servings') * meal_carbon
    

    let score = 0
    if (carbon >= 10){
      score = 1
    } else if (carbon >= 4){
      score = 2
    } else {
      score = 3
    }

    carbon *= attendance


    const event = {name, location, start_date, attendance, score, carbon};
    postEvent(event);
}
}
