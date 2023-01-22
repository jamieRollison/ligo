import { c as create_ssr_component, e as escape } from "../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="${"divide-y"}"><div class="${"flex flex-col space-y-4 md:space-y-2 md:flex-row mx-10 py-4 md:justify-between"}"><div><h1 class="${"font-Jomhuria text-8xl text-white"}">${escape(data.event.name)}</h1>
			
			<h3 class="${"font-Jomhuria text-4xl text-white"}">${escape(data.event.start_date)} | ${escape(data.event.location)}</h3></div>
		<div class="${"flex space-x-4 justify-center"}">
			<div><h2 class="${"font-WorkSans text-8xl text-white flex-auto"}">${escape(data.event.carbon)}</h2>
				<h3 class="${"font-WorkSans text-2xl text-white"}">Tons of CO2</h3></div>
			<div><h2 class="${"font-WorkSans text-8xl text-white"}">${escape(data.event.score)}</h2>
				<h3 class="${"font-WorkSans text-2xl text-white"}">Overall score</h3></div></div></div>

  <div class="${"mx-10 py-4"}"><div class="${"flex flex-col space-y-2 md:flex-row md:justify-center md:space-x-4"}"><button class="${"font-WorkSans bg-white/50 hover:bg-gray-100 rounded text-gray-800 py-2 px-4 mt-2"}">Were you an organizer? Claim this event!</button>
      <button class="${"font-WorkSans bg-white/50 hover:bg-gray-100 rounded text-gray-800 py-2 px-4 mt-2"}">Were you an attendee? Review this event!</button></div>

    
    <div><h3 class="${"text-center mt-6 font-Jomhuria text-4xl text-white"}">User Testimonials
      </h3>
      <ul class="${"text-gray-700 italic"}"><li><p>&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. &quot;
          </p></li>
        <li><p>&quot;Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.&quot;
          </p></li>
        <li><p>&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. &quot;
          </p></li></ul></div></div>

  <div class="${"mx-10 py-4"}"><h2 class="${"text-center font-Jomhuria text-6xl text-white"}">Suggestions for improvement
    </h2>

    <ul class="${"text-gray-700 list-disc pl-6"}"><li><p>&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. &quot;
        </p></li>
      <li><p>&quot;Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.&quot;
        </p></li>
      <li><p>&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. &quot;
        </p></li></ul></div></div>`;
});
export {
  Page as default
};
