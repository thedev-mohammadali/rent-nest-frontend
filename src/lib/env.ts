const API_URL = process.env.API_URL;

if (!API_URL) {
  throw new Error("API_URL environment variable is missing");
}

export const env = {
  apiUrl: API_URL,
};
