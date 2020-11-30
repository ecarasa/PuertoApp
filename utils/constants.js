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
export const VEHICULOS_URL =
  "https://api.cnrt.gob.ar/seop/public/v1/parquesMoviles?dominio={dominio}&pais=1";
export const VEHICULOS_MAS_INFO_URL =
  "https://fir.cnrt.gob.ar/vehiculos-habilitados/1/{dominio}";
export const VER_MAPA_URL =
  "https://www.marinetraffic.com/es/ais/home/centerx:-58.360/centery:-34.600/zoom:13";
export const PER_PAGE_RESULTS_EMPRESAS = 10;