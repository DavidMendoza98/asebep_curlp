import { Actividad } from "./actividad.interface";
import { Usuario } from "./usuario.interface";

export interface ComentarioActividad {
    id:         number;
    comentario: string;
    create_at:  Date;
    isDelete:   boolean;
    actividad:  Actividad;
    usuario:    Usuario;
}