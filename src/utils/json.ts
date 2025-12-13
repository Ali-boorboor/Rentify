function parseJson<Type>(input: Type) {
  if (!input) return;
  return JSON.parse(JSON.stringify(input));
}

function stringifyJson<Type>(input: Type) {
  if (!input) return;

  return JSON.stringify(input);
}

function parseFormData<Type>(value: FormDataEntryValue | null): Type | null {
  if (!value) return null;

  if (typeof value !== "string") return null;

  try {
    return JSON.parse(value) as Type;
  } catch (_) {
    return null;
  }
}

export { parseJson, stringifyJson, parseFormData };
