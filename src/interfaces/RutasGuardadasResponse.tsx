// Generated by https://quicktype.io

export interface RutaGuardadaResponse {
    rutas: RutaGuardada[];
}

export interface RutaGuardada {
    id:         string;
    id_usuario: string;
    id_ruta:    string;
    ruta_fk:    RutaFk;
}

export interface RutaFk {
    id:      string;
    numero:  number;
    destino: string;
    origen:  string;
    estado:  boolean;
}
