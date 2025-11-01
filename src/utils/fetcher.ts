interface FetcherProps {
  method?: "GET" | "POST" | "DELETE" | "PUT";
  headers?: HeadersInit;
  body?: object;
  url: string;
}

async function fetcher<Type>(configs: FetcherProps) {
  const response = await fetch(`/api${configs.url}`, {
    headers: { "Content-Type": "application/json", ...configs.headers },
    body: JSON.stringify(configs.body),
    method: configs.method,
  });

  const data = (await response.json()) as Promise<Type>;

  return { response, data };
}

export default fetcher;
