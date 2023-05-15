export interface PagoBeca {
    id:          number;
    nombre:      string;
    descripcion: string;
    fecha:       Date;
    year:        string;
    cant_meses:  string;
    create_at:   Date;
    isDelete:    boolean;
    centro:      string;
}