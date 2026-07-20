// ==========================================================
// GEOUNO La Plata v1 (Lite) · config.js
// Configuración central del visor público.
// ==========================================================

const CONFIG = {

    // ------------------------------------------------------
    // TELEMETRÍA (Supabase)
    // Recibe eventos anónimos y de uso (clics, búsquedas exitosas).
    // Identificador 'laplata_v1' para separarlo de la versión Pro.
    // ------------------------------------------------------
    telemetry: {
        url: 'https://dnynfmwhsgzxciskxics.supabase.co/rest/v1',
        key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRueW5mbXdoc2d6eGNpc2t4aWNzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc3NDY4OTgsImV4cCI6MjA5MzMyMjg5OH0.5DvSwaa5S1pVXdUuE6-ER-7nybnoEWqyngcIr5UpENE',
        deploymentId: 'laplata_v1'
    },

    // ------------------------------------------------------
    // MAPA
    // Parámetros de inicialización y comportamiento del visor.
    // ------------------------------------------------------
    map: {
        center: [-34.9214, -57.9545],  // Plaza Moreno
        initialZoom: 13,               // Zoom al cargar la página
        arbaMinZoom: 19                // Zoom mínimo para disparar consultas WFS al mover el mapa
    },

    // ------------------------------------------------------
    // SERVICIOS EXTERNOS
    // ------------------------------------------------------
    servicios: {
        arbaWfs: 'https://geo.arba.gov.ar/geoserver/idera/wfs'
    }
};
