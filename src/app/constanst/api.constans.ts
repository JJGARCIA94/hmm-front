import { environment } from "../environments/environment";

export class ApiConstants {

    static readonly GET_SPECIALTIES = 'specialties';
    static readonly GET_SPECIALTIES_PAGINATION = 'specialties/pagination/:page';
    static readonly GET_SPECIALTY_BY_ID = 'specialties/:id';
    static readonly GET_HOSPITALS = 'hospitals';
    static readonly GET_DOCTORS = 'doctors';
    static readonly GET_DOCTORS_BY_SPECIALTY = 'doctors/:idSpeciality';
    static readonly GET_SEARCH_DOCTORS = 'doctors/searchDoctors/:idSpeciality/:idHospital';
    static readonly REQUEST_AMBULANCE = 'request-ambulance';

    static getEndpoint(path: string): string {
        return `${environment.apiURL}/${path}`;
    }
}