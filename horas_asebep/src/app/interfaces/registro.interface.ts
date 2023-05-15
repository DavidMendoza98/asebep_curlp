import { Actividad } from "./actividad.interface";
import { Estudiante } from "./estudiante.interface";

export interface Registro {
    id:         number;
    create_at:  Date;
    isDelete:   boolean;
    actividad:  Actividad;
    estudiante: Estudiante;
}