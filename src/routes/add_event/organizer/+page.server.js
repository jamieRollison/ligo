import { postEvent } from '$lib/api/post'

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const name = data.get('name');
    const location = data.get('location');
    const start_date = data.get('start_date');
    const attendance = data.get('attendance');
    const score = 0;
    // do math
    
    let carbon = 0.0;
    if (data.get('food') === 'Yes') {
        carbon += ((data.get('vegitarian') === 'Yes') ? 0.66 : 1.0) * data.get('servings');
        carbon += 
    }

    const event = {name, location, start_date, attendance, score, carbon};
    postEvent(event);
}
}
