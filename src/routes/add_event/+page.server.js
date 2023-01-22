export const actions = {
  newEvent: ({request}) => {
    const data = request.FormData();
    console.log(data);
  }
}