import { Reclamo } from "./reclamo.interface";
import { Usuario } from "./usuario.interface";

export interface RespuestaReclamo {
    id:        number;
    respuesta: string;
    create_at: Date;
    isDelete:  boolean;
    reclamo:   Reclamo;
    user:      Usuario;
}