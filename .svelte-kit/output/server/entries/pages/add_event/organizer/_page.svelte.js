import { c as create_ssr_component, a as subscribe, v as validate_component, d as add_attribute, e as escape, o as each } from "../../../../chunks/index2.js";
import { c as createForm } from "../../../../chunks/create-form.js";
import { S as SEO } from "../../../../chunks/SEO.js";
const states = [
  { abbr: "AL", state: "Alabama" },
  { abbr: "AK", state: "Alaska" },
  { abbr: "AZ", state: "Arizona" },
  { abbr: "AR", state: "Arkansas" },
  { abbr: "CA", state: "California" },
  { abbr: "CO", state: "Colorado" },
  { abbr: "CT", state: "Connecticut" },
  { abbr: "DE", state: "Delaware" },
  { abbr: "FL", state: "Florida" },
  { abbr: "GA", state: "Georgia" },
  { abbr: "HI", state: "Hawaii" },
  { abbr: "ID", state: "Idaho" },
  { abbr: "IL", state: "Illinois" },
  { abbr: "IN", state: "Indiana" },
  { abbr: "IA", state: "Iowa" },
  { abbr: "KS", state: "Kansas" },
  { abbr: "KY", state: "Kentucky" },
  { abbr: "LA", state: "Louisiana" },
  { abbr: "ME", state: "Maine" },
  { abbr: "MD", state: "Maryland" },
  { abbr: "MA", state: "Massachusetts" },
  { abbr: "MI", state: "Michigan" },
  { abbr: "MN", state: "Minnesota" },
  { abbr: "MS", state: "Mississippi" },
  { abbr: "MO", state: "Missouri" },
  { abbr: "MT", state: "Montana" },
  { abbr: "NE", state: "Nebraska" },
  { abbr: "NV", state: "Nevada" },
  { abbr: "NH", state: "New Hampshire" },
  { abbr: "NJ", state: "New Jersey" },
  { abbr: "NM", state: "New Mexico" },
  { abbr: "NY", state: "New York" },
  { abbr: "NC", state: "North Carolina" },
  { abbr: "ND", state: "North Dakota" },
  { abbr: "OH", state: "Ohio" },
  { abbr: "OK", state: "Oklahoma" },
  { abbr: "OR", state: "Oregon" },
  { abbr: "PA", state: "Pennsylvania" },
  { abbr: "RI", state: "Rhode Island" },
  { abbr: "SC", state: "South Carolina" },
  { abbr: "SD", state: "South Dakota" },
  { abbr: "TN", state: "Tennessee" },
  { abbr: "TX", state: "Texas" },
  { abbr: "UT", state: "Utah" },
  { abbr: "VT", state: "Vermont" },
  { abbr: "VA", state: "Virginia" },
  { abbr: "WA", state: "Washington" },
  { abbr: "WV", state: "West Virgina" },
  { abbr: "WI", state: "Wisconsin" },
  { abbr: "WY", state: "Wyoming" },
  { state: "Virtual" }
];
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $form, $$unsubscribe_form;
  let $errors, $$unsubscribe_errors;
  const { form, errors, handleChange } = createForm({
    initialValues: {
      name: "",
      location: "",
      start_date: Date(),
      attendance: 0,
      food: "",
      // Yes or No
      servings: 0,
      pre_order: "",
      // Yes or No
      vegitarian: "",
      // Yes or No
      clothing_distribution: "",
      cutlery: "",
      single_use: "",
      single_use_container: "",
      compost: "",
      plan_to_attend: 0,
      shirts: 0,
      stickers: 0
    },
    validate: (values) => {
      let errs = {};
      if (values.name === "") {
        errs["name"] = "Name of the event is required!";
      }
      if (values.location === "") {
        errs["state"] = "State is required!";
      }
      return errs;
    },
    onSubmit: (values) => {
    }
  });
  $$unsubscribe_form = subscribe(form, (value) => $form = value);
  $$unsubscribe_errors = subscribe(errors, (value) => $errors = value);
  $$unsubscribe_form();
  $$unsubscribe_errors();
  return `${validate_component(SEO, "SEO").$$render($$result, { title: "Add your new Event" }, {}, {})}

<div class="${"my-10 md:mx-40 lg:mx-60"}"><div><h1 class="${"font-Jomhuria text-6xl text-white flex justify-center"}">Add your event
    </h1></div>

	<form method="${"POST"}"><div class="${"flex flex-col"}"><label class="${"font-WorkSans text-white"}" for="${"name"}">What is the name of your event?</label>
			<input class="${"font-WorkSans text-black rounded-sm h-7"}" id="${"name"}" name="${"name"}"${add_attribute("value", $form.name, 0)}></div>
		${$errors.name ? `<small class="${"font-WorkSans text-red-500"}">${escape($errors.name)}</small>` : ``}
		<div class="${"flex flex-col mt-4"}"><label class="${"font-WorkSans text-white"}" for="${"location"}">In what U.S. state is your event located?
			</label>
			<select class="${"font-WorkSans text-black rounded-sm h-7"}" id="${"location"}" name="${"location"}"><option value="${""}"></option>${each(states, (state) => {
    return `<option${add_attribute("value", state.state, 0)}>${escape(state.state)}</option>`;
  })}</select></div>
		${$errors.location ? `<small class="${"font-WorkSans text-red-500"}">${escape($errors.location)}</small>` : ``}
		
    <div class="${"flex flex-col mt-4"}"><label class="${"font-WorkSans text-white"}" for="${"start_date"}">When was your event held? (if it ran for multiple days, pick the
        earliest)</label>
      <input class="${"font-WorkSans text-black rounded-sm h-7"}" id="${"start_date"}" name="${"start_date"}" type="${"date"}"${add_attribute("value", $form.start_date, 0)}></div>
    <div class="${"flex flex-col mt-3"}"><label class="${"font-WorkSans text-white"}" for="${"attendance"}">How many attendees were present at the event?</label>
      <input class="${"font-WorkSans text-black rounded-sm h-7"}" id="${"attendance"}" name="${"attendance"}"${add_attribute("value", $form.attendance, 0)}></div>
    ${$errors.attendance ? `<small class="${"font-WorkSans text-red-500"}">${escape($errors.attendance)}</small>` : ``}

    <div class="${"flex flex-col mt-4"}"><label class="${"font-WorkSans text-white"}" for="${"food"}">Did your event provide food?
      </label>
      <select class="${"font-WorkSans text-black rounded-sm h-8"}" id="${"food"}" name="${"food"}"><option value="${""}"></option><option value="${"Yes"}">Yes</option><option value="${"No"}">No</option></select>
      ${$form.food === "Yes" ? `<div class="${"bg-cyan-100 border-blue-200 border-2 bg-opacity-20 mt-4 rounded-md p-3 flex flex-col"}"><label class="${"font-WorkSans text-gray-600 mb-1"}" for="${"servings"}">How many servings of food were provided per person?
          </label>
          <select class="${"font-WorkSans text-black rounded-sm h-7"}" id="${"servings "}" name="${"servings"}"><option value="${""}"></option><option value="${"1"}">1</option><option value="${"2"}">2</option><option value="${"3"}">3</option><option value="${"4"}">4</option><option value="${"5"}">5</option><option value="${"6"}">6</option><option value="${"7"}">7</option><option value="${"8"}">8</option><option value="${"9"}">9</option><option value="${"10"}">10</option></select>

          <label class="${"font-WorkSans text-gray-600 mt-3"}" for="${"cutlery"}">Was cutlery provided at the event? (forks, spoons, knives)
          </label>
          <select class="${"font-WorkSans text-black rounded-sm h-7 "}" id="${"cutlery"}" name="${"cutlery"}"><option value="${""}"></option><option value="${"Yes"}">Yes</option><option value="${"No"}">No</option></select>

          <label class="${"font-WorkSans text-gray-600 mt-2"}" for="${"single_use"}">Were the meals served on single-use plates and cutlery?
          </label>
          <select class="${"font-WorkSans text-black rounded-sm h-7"}" id="${"single_use"}" name="${"single_use"}"><option value="${""}"></option><option value="${"Yes"}">Yes</option><option value="${"No"}">No</option></select>

          <label class="${"font-WorkSans text-gray-600 mt-3"}" for="${"pre_order"}">Did your event ask for preferences to preorder food ahead of time?
          </label>
          <select class="${"font-WorkSans text-black rounded-sm h-7"}" id="${"pre_order"}" name="${"pre_order"}"><option value="${""}"></option><option value="${"Yes"}">Yes</option><option value="${"No"}">No</option></select>

          <label class="${"font-WorkSans text-gray-600 mt-3"}" for="${"vegitarian"}">Did your event offer vegetarian options?
          </label>
          <select class="${"font-WorkSans text-black rounded-sm h-7"}" id="${"vegitarian"}" name="${"vegitarian"}"><option value="${""}"></option><option value="${"Yes"}">Yes</option><option value="${"No"}">No</option></select>

          <label class="${"font-WorkSans text-gray-600 mt-2"}" for="${"single_use_container"}">Was the catering served in single-use containers?
          </label>
          <select class="${"font-WorkSans text-black rounded-sm h-7"}" id="${"single_use_container"}" name="${"single_use_container"}"><option value="${""}"></option><option value="${"Yes"}">Yes</option><option value="${"No"}">No</option></select></div>` : ``}

      <div class="${"flex flex-col mt-4"}"><label class="${"font-WorkSans text-white"}" for="${"compost"}">Were there easily accessible recycling/compost bins?
        </label>
        <select class="${"font-WorkSans text-black rounded-sm h-7"}" id="${"compost"}" name="${"compost"}"><option value="${""}"></option><option value="${"Yes"}">Yes</option><option value="${"No"}">No</option></select></div>

      <div class="${"flex flex-col mt-3"}"><label class="${"font-WorkSans text-white"}" for="${"plan_to_attend"}">How many people did you plan to attend the Event?</label>
        <input class="${"font-WorkSans text-black rounded-sm h-8"}" id="${"plan_to_attend"}" name="${"plan_to_attend"}"${add_attribute("value", $form.plan_to_attend, 0)}></div></div>
    <div class="${"flex flex-col items-center mt-4"}"><button class="${"font-WorkSans bg-none border-white border-2 text-white hover:bg-white hover:text-teal-500 w-40 rounded-sm py-2"}" type="${"submit"}">Submit</button></div></form></div>`;
});
export {
  Page as default
};
