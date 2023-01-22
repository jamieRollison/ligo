import { c as create_ssr_component, a as subscribe, v as validate_component, d as add_attribute } from "../../../../chunks/index2.js";
import { c as createForm } from "../../../../chunks/create-form.js";
import { S as SEO } from "../../../../chunks/SEO.js";
import { i as isAuthenticated } from "../../../../chunks/store.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $form, $$unsubscribe_form;
  let $isAuthenticated, $$unsubscribe_isAuthenticated;
  $$unsubscribe_isAuthenticated = subscribe(isAuthenticated, (value) => $isAuthenticated = value);
  const { form, handleChange } = createForm({
    initialValues: {
      name: "",
      location: "",
      startDate: "",
      attendance: 0,
      swag: "",
      //Yes or No
      food: "",
      // Yes or No
      shirt: "",
      // Yes or No
      sweater: "",
      // Yes or No
      paper: "",
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
    // validate: (values) => {
    //   let errs = {};
    //   if (values.name === "") {
    //     errs["name"] = "Name of the event is required!";
    //   }
    //   if (values.location === "") {
    //     errs["state"] = "State is required!";
    //   }
    //   return errs;
    // },
    onSubmit: (values) => {
    }
  });
  $$unsubscribe_form = subscribe(form, (value) => $form = value);
  $$unsubscribe_form();
  $$unsubscribe_isAuthenticated();
  return `${validate_component(SEO, "SEO").$$render($$result, { title: "Add your new Event" }, {}, {})}

<div class="${"my-10 md:mx-40 lg:mx-60"}"><div><h1 class="${"font-Jomhuria text-6xl text-white flex justify-center"}">Add your event
    </h1></div>

  <form method="${"POST"}"><div class="${"flex flex-col"}"><label class="${"font-WorkSans text-white"}" for="${"name"}">What is the name of your event?</label>
      <input class="${"font-WorkSans text-black rounded-sm h-7"}" id="${"name"}" name="${"name"}" required${add_attribute("value", $form.name, 0)}></div>
    

    <div class="${"flex flex-col mt-4"}"><label class="${"font-WorkSans text-white"}" for="${"startDate"}">When was your event held? (if it ran for multiple days, pick the
        earliest)</label>
      <input class="${"font-WorkSans text-black rounded-sm h-7"}" id="${"startDate"}" name="${"startDate"}" type="${"date"}"${add_attribute("value", $form.startDate, 0)}></div>

    <div class="${"flex flex-col mt-4"}"><label class="${"font-WorkSans text-white"}" for="${"location"}">In what U.S. state is your event located?
      </label>
      <select class="${"font-WorkSans text-black rounded-sm h-7"}" id="${"location"}" name="${"location"}" required><option value="${""}"></option><option value="${"Indiana"}">Indiana</option><option value="${"Michigan"}">Michigan</option><option value="${"Illinois"}">Illinois</option><option value="${"California"}">California</option></select></div>
    

    <div class="${"flex flex-col mt-3"}"><label class="${"font-WorkSans text-white"}" for="${"attendance"}">How many attendees do you think were present at the event?</label>
      <input class="${"font-WorkSans text-black rounded-sm h-7"}" id="${"attendance"}" name="${"attendance"}" required${add_attribute("value", $form.attendance, 0)}></div>
    

    <div class="${"flex flex-col mt-4"}"><label class="${"font-WorkSans text-white"}" for="${"swag"}">Did the event provide free &#39;swag&#39;?
      </label>
      <h3 class="${"italic font-WorkSans text-white"}">Ex. free shirts, stickers, pens, etc.
      </h3>
      <select class="${"font-WorkSans text-black rounded-sm h-8"}" id="${"swag"}" name="${"swag"}"><option value="${""}"></option><option value="${"Yes"}">Yes</option><option value="${"No"}">No</option></select>

      ${$form.swag === "Yes" ? `<div class="${"bg-cyan-100 border-blue-200 border-2 bg-opacity-20 mt-4 rounded-md p-3 flex flex-col"}"><label class="${"font-WorkSans text-gray-600 mb-1"}" for="${"shirt"}">Were you given a free shirt upon entry?
          </label>
          <select class="${"font-WorkSans text-black rounded-sm h-8"}" id="${"shirt"}" name="${"shirt"}"><option value="${""}"></option><option value="${"Yes"}">Yes</option><option value="${"No"}">No</option></select>

          <label class="${"font-WorkSans text-gray-600 mb-1 mt-2"}" for="${"sweater"}">Were you given a heavier piece of clothing upon entry?
          </label>
          <h3 class="${"italic font-WorkSans text-gray-600"}">Ex. sweaters, hats, socks, reusable bags, etc.
          </h3>
          <select class="${"font-WorkSans text-black rounded-sm h-8"}" id="${"sweater"}" name="${"sweater"}"><option value="${""}"></option><option value="${"Yes"}">Yes</option><option value="${"No"}">No</option></select>

          <label class="${"font-WorkSans text-gray-600 mb-1 mt-2"}" for="${"paper"}">Were you given a paper brochure, sticker, or other paper item upon
            entry?
          </label>
          <select class="${"font-WorkSans text-black rounded-sm h-8"}" id="${"paper"}" name="${"paper"}"><option value="${""}"></option><option value="${"Yes"}">Yes</option><option value="${"No"}">No</option></select></div>` : ``}</div>

    <div class="${"flex flex-col mt-4"}"><label class="${"font-WorkSans text-white"}" for="${"food"}">Did the event provide meals?
      </label>
      <select class="${"font-WorkSans text-black rounded-sm h-8"}" id="${"food"}" name="${"food"}"><option value="${""}"></option><option value="${"Yes"}">Yes</option><option value="${"No"}">No</option></select>
      ${$form.food === "Yes" ? `<div class="${"bg-cyan-100 border-blue-200 border-2 bg-opacity-20 mt-4 rounded-md p-3 flex flex-col"}"><label class="${"font-WorkSans text-gray-600 mb-1"}" for="${"servings"}">How many meals were served to you?
          </label>
          <select class="${"font-WorkSans text-black rounded-sm h-7"}" id="${"servings "}" name="${"servings"}"><option value="${""}"></option><option value="${"1"}">1</option><option value="${"2"}">2</option><option value="${"3"}">3</option><option value="${"4"}">4</option><option value="${"5"}">5</option><option value="${"6"}">6</option><option value="${"7"}">7</option><option value="${"8"}">8</option><option value="${"9"}">9</option><option value="${"10"}">10</option></select>

          <label class="${"font-WorkSans text-gray-600 mt-3"}" for="${"cutlery"}">Was cutlery provided at the event? (forks, spoons, knives)
          </label>
          <select class="${"font-WorkSans text-black rounded-sm h-7 "}" id="${"cutlery"}" name="${"cutlery"}"><option value="${""}"></option><option value="${"Yes"}">Yes</option><option value="${"No"}">No</option></select>

          <label class="${"font-WorkSans text-gray-600 mt-2"}" for="${"single_use"}">Were the meals served on single-use plates and cutlery?
          </label>
          <select class="${"font-WorkSans text-black rounded-sm h-7"}" id="${"single_use"}" name="${"single_use"}"><option value="${""}"></option><option value="${"Yes"}">Yes</option><option value="${"No"}">No</option></select>

          <label class="${"font-WorkSans text-gray-600 mt-2"}" for="${"single_use_container"}">Was the catering served in single-use containers?
          </label>
          <select class="${"font-WorkSans text-black rounded-sm h-7"}" id="${"single_use_container"}" name="${"single_use_container"}"><option value="${""}"></option><option value="${"Yes"}">Yes</option><option value="${"No"}">No</option></select>
          <label class="${"font-WorkSans text-gray-600 mt-3"}" for="${"pre_order"}">Did the event ask for preferences to preorder food ahead of time?
          </label>
          <select class="${"font-WorkSans text-black rounded-sm h-7"}" id="${"pre_order"}" name="${"pre_order"}"><option value="${""}"></option><option value="${"Yes"}">Yes</option><option value="${"No"}">No</option></select>

          <label class="${"font-WorkSans text-gray-600 mt-3"}" for="${"vegitarian"}">Did the event offer vegetarian options?
          </label>
          <select class="${"font-WorkSans text-black rounded-sm h-7"}" id="${"vegitarian"}" name="${"vegitarian"}"><option value="${""}"></option><option value="${"Yes"}">Yes</option><option value="${"No"}">No</option></select></div>` : ``}

      <div class="${"flex flex-col mt-4"}"><label class="${"font-WorkSans text-white"}" for="${"compost"}">Were there easily accessible compost bins?
        </label>
        <select class="${"font-WorkSans text-black rounded-sm h-7"}" id="${"compost"}" name="${"compost"}"><option value="${""}"></option><option value="${"Yes"}">Yes</option><option value="${"No"}">No</option></select></div></div>
    <div class="${"flex flex-col items-center mt-4"}">${!$isAuthenticated ? `<small class="${"font-WorkSans text-red-500"}">Please log in before submisison</small>` : ``}
      <button class="${"mt-2 font-WorkSans bg-none border-white border-2 text-white hover:bg-white hover:text-teal-500 w-40 rounded-sm py-2"}" type="${"submit"}" ${$isAuthenticated ? "disabled" : ""}>Submit</button></div></form></div>`;
});
export {
  Page as default
};
