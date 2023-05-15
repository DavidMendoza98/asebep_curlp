import { Alcance } from "./alcance.interface";
import { Centro } from "./centro.interface";
import { Usuario } from "./usuario.interface";

export interface Actividad {
    id:           number;
    nombre:       string;
    descripcion:  string;
    cant_horas:   number;
    fecha_inicio: Date;
    fecha_fin:    Date;
    img_link:     string;
    isActive:     boolean;
    create_at:    Date;
    isDelete:     boolean;
    alcance:      Alcance;
    centro:       Centro;
    usuario:      Usuario;
}