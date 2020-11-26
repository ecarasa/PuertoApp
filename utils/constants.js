import env from "../env.json";

export const RECLAMOS_URL = "http://www.e-puertobue.com.ar/reclamos/solicitud/";
export const TWITTER_FEED_URL = "https://agpchat.mybluemix.net/twitter";
export const CHAT_URL = "https://chat-puerto-2.mybluemix.net";
export const PRONOSTICO_URL = "https://clima-agp-test.mybluemix.net";
export const MAREA_Y_CORRIENTE_URL =
  "https://servicios.puertobuenosaires.gob.ar/ePuertoBue/mareografo/ws-meteo.php";
export const EMPRESAS_URL = `https://servicios.puertobuenosaires.gob.ar/ePuertobue/empresas/ws-empresas.php?api_key=${env.PUERTO_BS_AS_API_KEY}`;
export const LINTI_URL =
  "https://api.cnrt.gob.ar/ucp/v1/public/estadoChofer?nroDocumento={dni}&sexo={sexo}";
export const LINTI_MAS_INFO_URL =
  "https://linti.seguridadvial.gob.ar/lintidigital/{dni}";
export const PER_PAGE_RESULTS_EMPRESAS = 10;