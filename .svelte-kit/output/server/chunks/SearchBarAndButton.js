import { c as create_ssr_component, f as compute_rest_props, h as createEventDispatcher, d as add_attribute, e as escape, j as spread, k as escape_object, l as escape_attribute_value, v as validate_component, o as each, p as compute_slots } from "./index2.js";
import fuzzy from "fuzzy";
const Search_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".hide-label.svelte-5m0wg6{position:absolute;height:1px;width:1px;overflow:hidden;clip:rect(1px 1px 1px 1px);clip:rect(1px, 1px, 1px, 1px);white-space:nowrap}",
  map: null
};
const Search = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "value",
    "autofocus",
    "debounce",
    "label",
    "hideLabel",
    "id",
    "ref",
    "removeFormAriaAttributes"
  ]);
  let { value = "" } = $$props;
  let { autofocus = false } = $$props;
  let { debounce = 0 } = $$props;
  let { label = "Label" } = $$props;
  let { hideLabel = false } = $$props;
  let { id = "search" + Math.random().toString(36) } = $$props;
  let { ref = null } = $$props;
  let { removeFormAriaAttributes = false } = $$props;
  createEventDispatcher();
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.autofocus === void 0 && $$bindings.autofocus && autofocus !== void 0)
    $$bindings.autofocus(autofocus);
  if ($$props.debounce === void 0 && $$bindings.debounce && debounce !== void 0)
    $$bindings.debounce(debounce);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.hideLabel === void 0 && $$bindings.hideLabel && hideLabel !== void 0)
    $$bindings.hideLabel(hideLabel);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  if ($$props.removeFormAriaAttributes === void 0 && $$bindings.removeFormAriaAttributes && removeFormAriaAttributes !== void 0)
    $$bindings.removeFormAriaAttributes(removeFormAriaAttributes);
  $$result.css.add(css$2);
  return `<form data-svelte-search${add_attribute("role", removeFormAriaAttributes ? null : "search", 0)}${add_attribute("aria-labelledby", removeFormAriaAttributes ? null : id, 0)}><label id="${escape(id, true) + "-label"}"${add_attribute("for", id, 0)} class="${["svelte-5m0wg6", hideLabel ? "hide-label" : ""].join(" ").trim()}">${slots.label ? slots.label({}) : `${escape(label)}`}</label>
  <input${spread(
    [
      { name: "search" },
      { type: "search" },
      { placeholder: "Search..." },
      { autocomplete: "off" },
      { spellcheck: "false" },
      escape_object($$restProps),
      { id: escape_attribute_value(id) }
    ],
    { classes: "svelte-5m0wg6" }
  )}${add_attribute("this", ref, 0)}${add_attribute("value", value, 0)}>
</form>`;
});
const Search$1 = Search;
const Typeahead_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '[data-svelte-typeahead].svelte-1t4elht.svelte-1t4elht{position:relative;background-color:#fff}ul.svelte-1t4elht.svelte-1t4elht{position:absolute;top:100%;left:0;width:100%;margin:0;padding:0;list-style:none;background-color:inherit;box-shadow:0 4px 8px rgba(0, 0, 0, 0.1)}[aria-expanded="true"].svelte-1t4elht ul.svelte-1t4elht{z-index:1}li.svelte-1t4elht.svelte-1t4elht,.no-results.svelte-1t4elht.svelte-1t4elht{padding:0.25rem 1rem}li.svelte-1t4elht.svelte-1t4elht{cursor:pointer}li.svelte-1t4elht.svelte-1t4elht:not(:last-of-type){border-bottom:1px solid #e0e0e0}li.svelte-1t4elht.svelte-1t4elht:hover{background-color:#e5e5e5}.selected.svelte-1t4elht.svelte-1t4elht{background-color:#e5e5e5}.selected.svelte-1t4elht.svelte-1t4elht:hover{background-color:#cacaca}.disabled.svelte-1t4elht.svelte-1t4elht{opacity:0.4;cursor:not-allowed}[data-svelte-search] label{margin-bottom:0.25rem;display:inline-flex;font-size:0.875rem}[data-svelte-search] input{width:100%;padding:0.5rem 0.75rem;background:none;font-size:1rem;border:0;border-radius:0;border:1px solid #e5e5e5}[data-svelte-search] input:focus{outline-color:#0f62fe;outline-offset:2px;outline-width:1px}',
  map: null
};
const Typeahead = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let options;
  let showResults;
  let $$restProps = compute_rest_props($$props, [
    "id",
    "value",
    "data",
    "extract",
    "disable",
    "filter",
    "autoselect",
    "inputAfterSelect",
    "results",
    "focusAfterSelect",
    "showDropdownOnFocus",
    "showAllResultsOnFocus",
    "limit"
  ]);
  let $$slots = compute_slots(slots);
  let { id = "typeahead-" + Math.random().toString(36) } = $$props;
  let { value = "" } = $$props;
  let { data = [] } = $$props;
  let { extract = (item) => item } = $$props;
  let { disable = (item) => false } = $$props;
  let { filter = (item) => false } = $$props;
  let { autoselect = true } = $$props;
  let { inputAfterSelect = "update" } = $$props;
  let { results = [] } = $$props;
  let { focusAfterSelect = false } = $$props;
  let { showDropdownOnFocus = false } = $$props;
  let { showAllResultsOnFocus = false } = $$props;
  let { limit = Infinity } = $$props;
  createEventDispatcher();
  let comboboxRef = null;
  let searchRef = null;
  let hideDropdown = false;
  let selectedIndex = -1;
  let isFocused = false;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.extract === void 0 && $$bindings.extract && extract !== void 0)
    $$bindings.extract(extract);
  if ($$props.disable === void 0 && $$bindings.disable && disable !== void 0)
    $$bindings.disable(disable);
  if ($$props.filter === void 0 && $$bindings.filter && filter !== void 0)
    $$bindings.filter(filter);
  if ($$props.autoselect === void 0 && $$bindings.autoselect && autoselect !== void 0)
    $$bindings.autoselect(autoselect);
  if ($$props.inputAfterSelect === void 0 && $$bindings.inputAfterSelect && inputAfterSelect !== void 0)
    $$bindings.inputAfterSelect(inputAfterSelect);
  if ($$props.results === void 0 && $$bindings.results && results !== void 0)
    $$bindings.results(results);
  if ($$props.focusAfterSelect === void 0 && $$bindings.focusAfterSelect && focusAfterSelect !== void 0)
    $$bindings.focusAfterSelect(focusAfterSelect);
  if ($$props.showDropdownOnFocus === void 0 && $$bindings.showDropdownOnFocus && showDropdownOnFocus !== void 0)
    $$bindings.showDropdownOnFocus(showDropdownOnFocus);
  if ($$props.showAllResultsOnFocus === void 0 && $$bindings.showAllResultsOnFocus && showAllResultsOnFocus !== void 0)
    $$bindings.showAllResultsOnFocus(showAllResultsOnFocus);
  if ($$props.limit === void 0 && $$bindings.limit && limit !== void 0)
    $$bindings.limit(limit);
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    options = { pre: "<mark>", post: "</mark>", extract };
    results = fuzzy.filter(value, data, options).filter(({ score }) => score > 0).slice(0, limit).filter((result2) => !filter(result2.original)).map((result2) => ({
      ...result2,
      disabled: disable(result2.original)
    }));
    results.map((result2) => extract(result2.original)).join("");
    showResults = results.length > 0;
    {
      if (showDropdownOnFocus) {
        showResults = showResults && isFocused;
      }
    }
    $$rendered = `

<div data-svelte-typeahead role="${"combobox"}" aria-haspopup="${"listbox"}" aria-controls="${escape(id, true) + "-listbox"}"${add_attribute("aria-expanded", showResults, 0)} id="${escape(id, true) + "-typeahead"}" class="${["svelte-1t4elht", results.length > 0 ? "dropdown" : ""].join(" ").trim()}"${add_attribute("this", comboboxRef, 0)}>${validate_component(Search$1, "Search").$$render(
      $$result,
      Object.assign(
        {},
        { id },
        { removeFormAriaAttributes: true },
        $$restProps,
        { "aria-autocomplete": "list" },
        { "aria-controls": id + "-listbox" },
        { "aria-labelledby": id + "-label" },
        {
          "aria-activedescendant": null
        },
        { ref: searchRef },
        { value }
      ),
      {
        ref: ($$value) => {
          searchRef = $$value;
          $$settled = false;
        },
        value: ($$value) => {
          value = $$value;
          $$settled = false;
        }
      },
      {}
    )}
  <ul role="${"listbox"}" aria-labelledby="${escape(id, true) + "-label"}" id="${escape(id, true) + "-listbox"}" class="${["svelte-1t4elht", "svelte-typeahead-list"].join(" ").trim()}">${showResults ? `${each(results, (result2, index2) => {
      return `
        <li role="${"option"}" id="${escape(id, true) + "-result-" + escape(index2, true)}"${add_attribute("aria-selected", selectedIndex === index2, 0)} class="${[
        "svelte-1t4elht",
        (selectedIndex === index2 ? "selected" : "") + " " + (result2.disabled ? "disabled" : "")
      ].join(" ").trim()}">${slots.default ? slots.default({ result: result2, index: index2, value }) : `
            <!-- HTML_TAG_START -->${result2.string}<!-- HTML_TAG_END -->
          `}
        </li>`;
    })}` : ``}
    ${$$slots["no-results"] && !hideDropdown && value.length > 0 && results.length === 0 ? `<div class="${["svelte-1t4elht", "no-results"].join(" ").trim()}">${slots["no-results"] ? slots["no-results"]({ value, result, index }) : ``}</div>` : ``}</ul>
</div>`;
  } while (!$$settled);
  return $$rendered;
});
const SearchBarAndButton_svelte_svelte_type_style_lang = "";
const css = {
  code: "mark{background-color:#d5f0f2}li.selected{background-color:#dbe1e3 !important }li:hover[data-svelte-typeahead]{background-color:#dbe1e3}.svelte-1t4elht{border-radius:8px}.svelte-1t4elht input{border-radius:10px}.svelte-5m0wg6 hide-label{border-radius:0px}",
  map: null
};
const SearchBarAndButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const data = [
    { state: "WWDC 2019" },
    { state: "Grace Hopper 2022" },
    { state: "BoilerMake X" },
    { state: "HackIllinois" },
    { state: "Welding Convention of Michigan" }
  ];
  const extract = (
    /** @type {{ state: any; }} */
    (item) => item.state
  );
  $$result.css.add(css);
  return `<div class="${"font-WorkSans flex flex-col my-10"}">
  ${validate_component(Typeahead, "Typeahead").$$render(
    $$result,
    {
      class: "rounded",
      hideLabel: true,
      placeholder: `Search for your event...`,
      data,
      extract
    },
    {},
    {}
  )}

  
  <a class="${"flex justify-center font-WorkSans bg-white/50 hover:bg-gray-100 rounded text-gray-800 py-2 px-4 mt-2"}" href="${"/add_event"}">Couldn&#39;t find your event? Create a new page for it!
  </a>
</div>`;
});
export {
  SearchBarAndButton as S
};
