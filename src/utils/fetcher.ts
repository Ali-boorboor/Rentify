// utils/fetcher.ts
interface FetcherProps {
  method?: "GET" | "POST" | "DELETE" | "PUT";
  body?: BodyInit | null | undefined;
  headers?: HeadersInit;
  url: string;
}

async function fetcher<Type>(configs: FetcherProps) {
  const isFormData = configs.body instanceof FormData;

  const response = await fetch(`/api${configs.url}`, {
    method: configs.method,
    headers: isFormData
      ? configs.headers
      : { "Content-Type": "application/json", ...configs.headers },
    body: configs.body,
  });

  const data = (await response.json()) as Type;

  return { response, data };
}

export default fetcher;
