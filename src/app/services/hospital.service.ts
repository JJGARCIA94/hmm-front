import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiConstants } from '../constanst/api.constans';
import { IHospital } from '../models/hospital.model';

@Injectable({
    providedIn: 'root'
})
export class HospitalService {
    constructor(private httpClient: HttpClient) { }

    getHospitals() {
        const endpoint = ApiConstants.getEndpoint(ApiConstants.GET_HOSPITALS);
        return this.httpClient.get<IHospital[]>(endpoint);
    }
}