import { c as create_ssr_component, v as validate_component } from "../../chunks/index2.js";
import { S as SEO } from "../../chunks/SEO.js";
import { S as SearchBarAndButton } from "../../chunks/SearchBarAndButton.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "img.svelte-6jq58b:hover{animation:svelte-6jq58b-shake 0.5s;animation-iteration-count:infinite}@keyframes svelte-6jq58b-shake{0%{transform:translate(1px, 1px) rotate(0deg)}10%{transform:translate(-1px, -2px) rotate(-1deg)}20%{transform:translate(-3px, 0px) rotate(1deg)}30%{transform:translate(3px, 2px) rotate(0deg)}40%{transform:translate(1px, -1px) rotate(1deg)}50%{transform:translate(-1px, 2px) rotate(-1deg)}60%{transform:translate(-3px, 1px) rotate(0deg)}70%{transform:translate(3px, 1px) rotate(-1deg)}80%{transform:translate(-1px, -1px) rotate(1deg)}90%{transform:translate(1px, 2px) rotate(0deg)}100%{transform:translate(1px, -2px) rotate(-1deg)}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(SEO, "SEO").$$render($$result, {}, {}, {})}
<div class="${"flex flex-col items-center md:flex-row "}"><img class="${"w-60 lg:w-1/2 svelte-6jq58b"}" src="${"/assets/recycle_2.png"}" alt="${"recycle_2 throwing out trash"}">
  <div class="${"flex flex-col"}"><h1 class="${"font-Jomhuria text-9xl text-white"}">Ligo</h1>
    <p class="${"font-WorkSans text-white text-2xl"}">Your new tool to calculate the environmental impact of your coordinated
      event, and helping the environment through analyzing your carbon
      footprint.
    </p>
    ${validate_component(SearchBarAndButton, "SearchBarAndButton").$$render($$result, {}, {}, {})}</div>
</div>`;
});
export {
  Page as default
};
