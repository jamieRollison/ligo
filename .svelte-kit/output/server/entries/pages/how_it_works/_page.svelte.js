import { c as create_ssr_component, v as validate_component } from "../../../chunks/index2.js";
import { S as SEO } from "../../../chunks/SEO.js";
import "fuzzy";
/* empty css                                                                */const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(SEO, "SEO").$$render($$result, { title: "How it works" }, {}, {})}

<div class="${"mx-10 md:mx-40 flex flex-col items-center"}"><h1 class="${"font-WorkSans text-white text-3xl mt-10 text-center animate-pulse"}">How it works: Ligo&#39;s carbon footprint calculator for your event
  </h1>
  <img src="${"assets/metal.png"}" alt="${"world map"}" class="${"w-40"}">
  <div class="${"flex justify-center flex-col w-3/4"}"><h1 class="${"font-WorkSans text-white text-3xl mt-10 text-center"}">Step 1: Find Your event!
    </h1>
    <p class="${"text-gray-500 font-WorkSans text-center mt-2"}">If you&#39;re an attendee, search for your event in the search bar.
    </p>

    <h1 class="${"font-WorkSans text-white text-3xl text-center"}">Step 2: Fill out the information about the event
    </h1>
    <p class="${"text-gray-500 font-WorkSans text-center mt-2"}">Whether you&#39;re an organizer or attendee, you will be asked a series of
      questions to understand the impact of your event.
    </p>
    <h1 class="${"font-WorkSans text-white text-3xl mt-10 text-center"}">Step 3: Obtain your carbon footprint score from Ligo
    </h1>
    <p class="${"text-gray-500 font-WorkSans text-center mt-2"}">Whether you&#39;re an organizer or attendee, you will be asked a series of
      questions to understand the impact of your event.
    </p></div></div>`;
});
export {
  Page as default
};
