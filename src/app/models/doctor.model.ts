export interface IDoctor {
    id: number;
    key: number;
    names: string;
    lastName: string;
    secondSurname: string;
    birthday: string;
    phone: string;
    phone2: string;
    code: string;
    image: string;
    about: string;
    status: number;
}

export interface ISearchedDoctor extends IDoctor {
    specialties: string[];
    derivations: string;
    studies: string[];
    procedures: string[];
    courses: string[];
    showDetails: boolean;
}

export interface ISearchDoctors {
    idSpeciality: number;
    idHospital: number;
    doctor: string;
    page: number;
    response?: IGetSearchedDoctor
}

export interface IGetSearchedDoctor {
    result: ISearchedDoctor[],
    total: number
}