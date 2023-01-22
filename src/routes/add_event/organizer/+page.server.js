import { postEvent } from '$lib/api/post'

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const name = data.get('name');
    const location = data.get('location');
    const start_date = data.get('start_date');
    const attendance = data.get('attendance');
    const score = 0;
    const carbon = 0.0;
    // do math
    const event = {name, location, start_date, attendance, score, carbon};
    console.log('action', event);
    postEvent(event);
}
}
