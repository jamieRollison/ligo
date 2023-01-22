import { c as create_ssr_component, a as subscribe, d as add_attribute, v as validate_component } from "../../chunks/index2.js";
import "@auth0/auth0-spa-js";
import { i as isAuthenticated } from "../../chunks/store.js";
const app = "";
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isAuthenticated, $$unsubscribe_isAuthenticated;
  $$unsubscribe_isAuthenticated = subscribe(isAuthenticated, (value) => $isAuthenticated = value);
  let menu;
  $$unsubscribe_isAuthenticated();
  return `<nav class="${"flex items-center justify-between flex-wrap p-6"}"><div class="${"flex items-center flex-shrink-0 text-white mr-6"}"><a class="${"flex"}" href="${"/"}"><img alt="${"the ligo logo"}" src="${"./assets/logo.png"}" class="${"w-10 mr-2"}">
      <span class="${"font-Jomhuria text-5xl"}">Ligo</span></a></div>
  <div class="${"block lg:hidden"}"><button class="${"flex items-center md:hidden px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"}"><svg class="${"fill-current h-3 w-3"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><title>Menu</title><path d="${"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"}"></path></svg></button></div>

  <div class="${"hidden w-full md:flex md:items-center md:w-auto"}"${add_attribute("this", menu, 0)}><ul class="${"text-sm md:flex md:justify-between "}"><li><a href="${"/how_it_works"}" class="${"font-WorkSans block mt-2 md:mt-0 pl-6 md:pl-0 text-cyan-100 hover:text-white mr-4"}">How it Works
        </a></li>
      <li><a href="${"/about"}" class="${"font-WorkSans block mt-2 md:mt-0 pl-6 md:pl-0 text-cyan-100 hover:text-white mr-4"}">About
        </a></li>

      ${$isAuthenticated ? `<li class="${"mt-4 md:mt-0 ml-6 md:ml-0"}">
          <a href="${"/"}" class="${"font-WorkSans text-sm px-6 py-2 md:mt-0 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"}">Log out</a></li>` : `<li class="${"mt-2 md:mt-0"}"><a href="${"/"}" class="${"font-WorkSans text-sm px-6 py-2 md:mt-0 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"}">Log in</a></li>`}</ul></div></nav>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css = {
  code: "footer.svelte-w77sbe{margin-top:40px;position:absolute;bottom:0;height:100px;width:100%}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<footer class="${"flex flex-col items-center svelte-w77sbe"}"><div class="${"flex flex-row items-center font-WorkSans text-white hover:text-pink-100"}">Made with <span><img src="${"assets/logo.png"}" alt="${"Ligo heart recycle logo"}" class="${"w-10"}"></span> by Liza, Jamie, and Ellie
  </div>
  <div class="${"text-white font-WorkSans"}">@ BoilerMake 2023</div>
</footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main>${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}
  ${slots.default ? slots.default({}) : ``}
  <div class="${"flex justify-center"}">${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div></main>`;
});
export {
  Layout as default
};
