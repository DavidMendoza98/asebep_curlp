import { PagoBeca } from './pago_beca.interface';
import { Usuario } from './usuario.interface';

export interface Reclamo {
    id:        number;
    reclamo:   string;
    fecha:     Date;
    create_at: Date;
    isDelete:  boolean;
    pago:      PagoBeca;
    user:      Usuario;
}