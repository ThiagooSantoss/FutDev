interface FetchResponseInfo {
  status: number;
  statusText: string;
  url: string;
}

interface FetchResponse<T> {
  data: T;
  responseInfo: FetchResponseInfo;
}

export async function fetchWrapper<T = unknown>(
  input: RequestInfo | URL,
  init?: RequestInit
): Promise<FetchResponse<T>> {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${input}`, {
    headers: {
      Authorization: "Token 1064b3e9cd8c8b4a60a105eb3180858d7de1dd6f",
    },
    cache: "no-cache",
    ...init,
  });

  const responseInfo = {
    status: data.status,
    statusText: data.statusText,
    url: data.url,
  };

  if (!data.ok) {
    return {
      data: null as T,
      responseInfo,
    };
  }

  const result: T = await data.json();

  return {
    data: result,
    responseInfo,
  };
}
