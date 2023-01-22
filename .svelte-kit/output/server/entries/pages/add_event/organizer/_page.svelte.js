import { q as get_store_value, c as create_ssr_component, a as subscribe, v as validate_component, d as add_attribute, e as escape } from "../../../../chunks/index2.js";
import { w as writable, d as derived } from "../../../../chunks/index.js";
import { dequal } from "dequal/lite";
import { S as SEO } from "../../../../chunks/SEO.js";
function subscribeOnce(observable) {
  return new Promise((resolve) => {
    observable.subscribe(resolve)();
  });
}
function update(object, path, value) {
  object.update((o) => {
    set(o, path, value);
    return o;
  });
}
function cloneDeep(object) {
  return JSON.parse(JSON.stringify(object));
}
function isNullish(value) {
  return value === void 0 || value === null;
}
function isEmpty(object) {
  return isNullish(object) || Object.keys(object).length <= 0;
}
function getValues(object) {
  let results = [];
  for (const [, value] of Object.entries(object)) {
    const values = typeof value === "object" ? getValues(value) : [value];
    results = [...results, ...values];
  }
  return results;
}
function getErrorsFromSchema(initialValues, schema, errors = {}) {
  for (const key in schema) {
    switch (true) {
      case (schema[key].type === "object" && !isEmpty(schema[key].fields)): {
        errors[key] = getErrorsFromSchema(
          initialValues[key],
          schema[key].fields,
          { ...errors[key] }
        );
        break;
      }
      case schema[key].type === "array": {
        const values = initialValues && initialValues[key] ? initialValues[key] : [];
        errors[key] = values.map((value) => {
          const innerError = getErrorsFromSchema(
            value,
            schema[key].innerType.fields,
            { ...errors[key] }
          );
          return Object.keys(innerError).length > 0 ? innerError : "";
        });
        break;
      }
      default: {
        errors[key] = "";
      }
    }
  }
  return errors;
}
const deepEqual = dequal;
function assignDeep(object, value) {
  if (Array.isArray(object)) {
    return object.map((o) => assignDeep(o, value));
  }
  const copy = {};
  for (const key in object) {
    copy[key] = typeof object[key] === "object" && !isNullish(object[key]) ? assignDeep(object[key], value) : value;
  }
  return copy;
}
function set(object, path, value) {
  if (new Object(object) !== object)
    return object;
  if (!Array.isArray(path)) {
    path = path.toString().match(/[^.[\]]+/g) || [];
  }
  const result = path.slice(0, -1).reduce(
    (accumulator, key, index) => new Object(accumulator[key]) === accumulator[key] ? accumulator[key] : accumulator[key] = Math.trunc(Math.abs(path[index + 1])) === +path[index + 1] ? [] : {},
    object
  );
  result[path[path.length - 1]] = value;
  return object;
}
const util = {
  assignDeep,
  cloneDeep,
  deepEqual,
  getErrorsFromSchema,
  getValues,
  isEmpty,
  isNullish,
  set,
  subscribeOnce,
  update
};
const NO_ERROR = "";
const IS_TOUCHED = true;
function isCheckbox(element) {
  return element.getAttribute && element.getAttribute("type") === "checkbox";
}
function isFileInput(element) {
  return element.getAttribute && element.getAttribute("type") === "file";
}
function resolveValue(element) {
  if (isFileInput(element)) {
    return element.files;
  } else if (isCheckbox(element)) {
    return element.checked;
  } else {
    return element.value;
  }
}
const createForm = (config) => {
  let initialValues = config.initialValues || {};
  const validationSchema = config.validationSchema;
  const validateFunction = config.validate;
  const onSubmit = config.onSubmit;
  const getInitial = {
    values: () => util.cloneDeep(initialValues),
    errors: () => validationSchema ? util.getErrorsFromSchema(initialValues, validationSchema.fields) : util.assignDeep(initialValues, NO_ERROR),
    touched: () => util.assignDeep(initialValues, !IS_TOUCHED)
  };
  const form = writable(getInitial.values());
  const errors = writable(getInitial.errors());
  const touched = writable(getInitial.touched());
  const isSubmitting = writable(false);
  const isValidating = writable(false);
  const isValid = derived(errors, ($errors) => {
    const noErrors = util.getValues($errors).every((field) => field === NO_ERROR);
    return noErrors;
  });
  const modified = derived(form, ($form) => {
    const object = util.assignDeep($form, false);
    for (let key in $form) {
      object[key] = !util.deepEqual($form[key], initialValues[key]);
    }
    return object;
  });
  const isModified = derived(modified, ($modified) => {
    return util.getValues($modified).includes(true);
  });
  function validateField(field) {
    return util.subscribeOnce(form).then((values) => validateFieldValue(field, values[field]));
  }
  function validateFieldValue(field, value) {
    updateTouched(field, true);
    if (validationSchema) {
      isValidating.set(true);
      return validationSchema.validateAt(field, get_store_value(form)).then(() => util.update(errors, field, "")).catch((error) => util.update(errors, field, error.message)).finally(() => {
        isValidating.set(false);
      });
    }
    if (validateFunction) {
      isValidating.set(true);
      return Promise.resolve().then(() => validateFunction({ [field]: value })).then(
        (errs) => util.update(errors, field, !util.isNullish(errs) ? errs[field] : "")
      ).finally(() => {
        isValidating.set(false);
      });
    }
    return Promise.resolve();
  }
  function updateValidateField(field, value) {
    updateField(field, value);
    return validateFieldValue(field, value);
  }
  function handleChange(event) {
    const element = event.target;
    const field = element.name || element.id;
    const value = resolveValue(element);
    return updateValidateField(field, value);
  }
  function handleSubmit(event) {
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    isSubmitting.set(true);
    return util.subscribeOnce(form).then((values) => {
      if (typeof validateFunction === "function") {
        isValidating.set(true);
        return Promise.resolve().then(() => validateFunction(values)).then((error) => {
          if (util.isNullish(error) || util.getValues(error).length === 0) {
            return clearErrorsAndSubmit(values);
          } else {
            errors.set(error);
            isSubmitting.set(false);
          }
        }).finally(() => isValidating.set(false));
      }
      if (validationSchema) {
        isValidating.set(true);
        return validationSchema.validate(values, { abortEarly: false }).then(() => clearErrorsAndSubmit(values)).catch((yupErrors) => {
          if (yupErrors && yupErrors.inner) {
            const updatedErrors = getInitial.errors();
            yupErrors.inner.map(
              (error) => util.set(updatedErrors, error.path, error.message)
            );
            errors.set(updatedErrors);
          }
          isSubmitting.set(false);
        }).finally(() => isValidating.set(false));
      }
      return clearErrorsAndSubmit(values);
    });
  }
  function handleReset() {
    form.set(getInitial.values());
    errors.set(getInitial.errors());
    touched.set(getInitial.touched());
  }
  function clearErrorsAndSubmit(values) {
    return Promise.resolve().then(() => errors.set(getInitial.errors())).then(() => onSubmit(values, form, errors)).finally(() => isSubmitting.set(false));
  }
  function updateField(field, value) {
    util.update(form, field, value);
  }
  function updateTouched(field, value) {
    util.update(touched, field, value);
  }
  function updateInitialValues(newValues) {
    initialValues = newValues;
    handleReset();
  }
  return {
    form,
    errors,
    touched,
    modified,
    isValid,
    isSubmitting,
    isValidating,
    isModified,
    handleChange,
    handleSubmit,
    handleReset,
    updateField,
    updateValidateField,
    updateTouched,
    validateField,
    updateInitialValues,
    state: derived(
      [
        form,
        errors,
        touched,
        modified,
        isValid,
        isValidating,
        isSubmitting,
        isModified
      ],
      ([
        $form,
        $errors,
        $touched,
        $modified,
        $isValid,
        $isValidating,
        $isSubmitting,
        $isModified
      ]) => ({
        form: $form,
        errors: $errors,
        touched: $touched,
        modified: $modified,
        isValid: $isValid,
        isSubmitting: $isSubmitting,
        isValidating: $isValidating,
        isModified: $isModified
      })
    )
  };
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $form, $$unsubscribe_form;
  let $errors, $$unsubscribe_errors;
  const { form, errors, handleChange, handleSubmit } = createForm({
    initialValues: {
      name: "",
      state: "",
      num_of_attendees: 0,
      food: "",
      // Yes or No
      servings: 0,
      pre_order: "",
      // Yes or No
      vegetarian: "",
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
      if (values.state === "") {
        errs["state"] = "State is required!";
      }
      return errs;
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    }
  });
  $$unsubscribe_form = subscribe(form, (value) => $form = value);
  $$unsubscribe_errors = subscribe(errors, (value) => $errors = value);
  $$unsubscribe_form();
  $$unsubscribe_errors();
  return `${validate_component(SEO, "SEO").$$render($$result, { title: "Add your new Event" }, {}, {})}

<div class="${"my-10 md:mx-40 lg:mx-60"}"><div><h1 class="${"font-Jomhuria text-6xl text-white flex justify-center"}">Add your event
    </h1></div>

  <form><div class="${"flex flex-col"}"><label class="${"font-WorkSans text-white"}" for="${"name"}">What is the name of your event?</label>
      <input class="${"font-WorkSans text-black rounded-sm h-7"}" id="${"name"}" name="${"name"}"${add_attribute("value", $form.name, 0)}></div>
    ${$errors.name ? `<small class="${"font-WorkSans text-red-500"}">${escape($errors.name)}</small>` : ``}
    <div class="${"flex flex-col mt-3"}"><label class="${"font-WorkSans text-white"}" for="${"num_of_attendees"}">How many attendees were present at the event?</label>
      <input class="${"font-WorkSans text-black rounded-sm h-7"}" id="${"num_of_attendees"}" name="${"num_of_attendees"}"${add_attribute("value", $form.num_of_attendees, 0)}></div>
    ${$errors.num_of_attendees ? `<small class="${"font-WorkSans text-red-500"}">${escape($errors.num_of_attendees)}</small>` : ``}
    <div class="${"flex flex-col mt-4"}"><label class="${"font-WorkSans text-white"}" for="${"state"}">In what U.S. state is your event located?
      </label>
      <select class="${"font-WorkSans text-black rounded-sm h-7"}" id="${"state"}" name="${"state"}"><option value="${""}"></option><option value="${"Indiana"}">Indiana</option><option value="${"Michigan"}">Michigan</option><option value="${"Illinois"}">Illinois</option><option value="${"California"}">California</option></select></div>
    ${$errors.state ? `<small class="${"font-WorkSans text-red-500"}">${escape($errors.state)}</small>` : ``}
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

          <label class="${"font-WorkSans text-gray-600 mt-3"}" for="${"vegetarian"}">Did your event offer vegetarian options?
          </label>
          <select class="${"font-WorkSans text-black rounded-sm h-7"}" id="${"vegetarian"}" name="${"vegetarian"}"><option value="${""}"></option><option value="${"Yes"}">Yes</option><option value="${"No"}">No</option></select>

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
