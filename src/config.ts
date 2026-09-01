/** URL of the Morfom application (login lives here, on its own subdomain). */
export const APP_URL = "https://app.morfom.cl";

/** Where the demo-request form posts. Point this at your backend public route. */
export const LEADS_ENDPOINT =
  import.meta.env.PUBLIC_LEADS_ENDPOINT ?? "https://api.morfom.cl/public/leads";
