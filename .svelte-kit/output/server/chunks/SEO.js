import { c as create_ssr_component, e as escape } from "./index2.js";
const SEO = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "Ligo — The new carbon footprint tool" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `${$$result.head += `<!-- HEAD_svelte-1258swp_START -->${$$result.title = `<title>${escape(title)}</title>`, ""}<!-- HEAD_svelte-1258swp_END -->`, ""}`;
});
export {
  SEO as S
};
