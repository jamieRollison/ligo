import { c as create_ssr_component, a as subscribe, d as add_attribute } from "../../../chunks/index2.js";
import { i as isAuthenticated } from "../../../chunks/store.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isAuthenticated, $$unsubscribe_isAuthenticated;
  $$unsubscribe_isAuthenticated = subscribe(isAuthenticated, (value) => $isAuthenticated = value);
  $$unsubscribe_isAuthenticated();
  return `

<div class="${"my-10 md:mx-40 lg:mx-60"}"><div${add_attribute("class", $isAuthenticated ? `hidden` : "", 0)}><h3 class="${"font-WorkSans text-red-700 italic text-center py-2"}">Please log in before continuing
    </h3></div>

  <div${add_attribute("class", $isAuthenticated ? `opacity-100` : `opacity-25`, 0)}><div><h1 class="${"font-WorkSans text-4xl text-white flex justify-center text-center mb-10"}">Are you an Organizer or Attendee of this event?
      </h1>
      <img src="${"assets/girl_holding.png"}" alt="${"girl holding a calendar"}"></div>

    <div class="${"flex flex-col items-center mt-10 space-y-2 md:flex-row md:justify-center md:space-x-8"}"><a class="${"w-48 text-center font-WorkSans bg-white/50 hover:bg-gray-100 rounded text-gray-800 py-2 px-4 mt-2"}"${add_attribute("href", $isAuthenticated ? `/add_event/organizer` : "", 0)}>Organizer
      </a>
      <a class="${"w-48 text-center font-WorkSans bg-white/50 hover:bg-gray-100 rounded text-gray-800 py-2 px-4 mt-2"}"${add_attribute("href", $isAuthenticated ? `/add_event/attendee` : "", 0)}>Attendee
      </a></div></div></div>`;
});
export {
  Page as default
};
