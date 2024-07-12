export async function fetchWrapper<T = unknown>(
  input: RequestInfo | URL,
  init?: RequestInit
): Promise<T> {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${input}`, {
    headers: {
      Authorization: "Token 1064b3e9cd8c8b4a60a105eb3180858d7de1dd6f",
    },
    cache: "no-cache",
    ...init,
  });

  const result = await data.json();

  return result as T;
}
