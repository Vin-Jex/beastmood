const BASE_URL = "https://api.beastmoodsee.com";

const HEADERS: Record<string, string> = {
  "Content-Type": "application/json",
  Authorization: "Bearer your-access-token",
};

async function fetchApi(
  endpoint: string,
  options: RequestInit = {}
): Promise<any> {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      headers: {
        ...HEADERS,
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export default fetchApi;
