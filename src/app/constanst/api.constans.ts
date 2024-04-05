import { environment } from "../environments/environment";

export class ApiConstants {

    static readonly GET_SPECIALTIES = 'specialties';
    static readonly GET_HOSPITALS = 'hospitals';
    static readonly GET_DOCTORS = 'doctors';
    static readonly GET_SEARCH_DOCTORS = 'doctors/searchDoctors/:idSpeciality/:idHospital';

    static getEndpoint(path: string): string {
        return `${environment.apiURL}/${path}`;
    }
}