import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiConstants } from '../constanst/api.constans';
import { ISpeciality, ISpecialtyPagination } from '../models/speciality.model';

@Injectable({
    providedIn: 'root'
})
export class SpecialityService {
    constructor(private httpClient: HttpClient) { }

    getSpecialties() {
        const endpoint = ApiConstants.getEndpoint(ApiConstants.GET_SPECIALTIES);
        return this.httpClient.get<ISpeciality[]>(endpoint);
    }

    getSpecialtiesPagination(page: number) {
        const endpoint = ApiConstants.getEndpoint(ApiConstants.GET_SPECIALTIES_PAGINATION.replace(':page', page.toString()));
        return this.httpClient.get<ISpecialtyPagination>(endpoint);
    }

    getSpecialtyById(id: number | string) {
        const endpoint = ApiConstants.getEndpoint(ApiConstants.GET_SPECIALTY_BY_ID.replace(':id', id.toString()));
        return this.httpClient.get<ISpeciality>(endpoint);
    }
}