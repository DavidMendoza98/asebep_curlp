import { Carrera } from "./carrera.interface";
import { Centro } from "./centro.interface";
import { Sexo } from "./sexo.interface";
import { TipoBeca } from "./tipo_beca.interface";

export interface Estudiante {
    id:        number;
    numCuenta: string;
    nombres:   string;
    apellidos: string;
    correo:    string;
    create_at: Date;
    isDelete:  boolean;
    Sexo: Sexo;
    TipoBeca:TipoBeca;
    Carrera:   Carrera;
    Centro:    Centro;
}