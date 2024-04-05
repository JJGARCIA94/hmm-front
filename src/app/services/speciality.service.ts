import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiConstants } from '../constanst/api.constans';
import { ISpeciality } from '../models/speciality.model';

@Injectable({
    providedIn: 'root'
})
export class SpecialityService {
    constructor(private httpClient: HttpClient) { }

    getSpecialties() {
        const endpoint = ApiConstants.getEndpoint(ApiConstants.GET_SPECIALTIES);
        return this.httpClient.get<ISpeciality[]>(endpoint);
    }
}