export interface ISpeciality {
    id: number;
    name: string;
    derivation: string;
    status: number;
}

export interface ISpecialtyPagination {
    result: ISpeciality[];
    total: number;
}