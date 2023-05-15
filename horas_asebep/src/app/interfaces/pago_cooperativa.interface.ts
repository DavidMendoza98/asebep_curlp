import { Estudiante } from "./estudiante.interface";
import { PagoBeca } from "./pago_beca.interface";

export interface PagoCooperativa {
    id:         number;
    comentario: string;
    img_link:   string;
    fecha:      Date;
    create_at:  Date;
    isDelete:   boolean;
    estudiante: Estudiante;
    pago:       PagoBeca;
}