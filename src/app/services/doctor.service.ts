import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiConstants } from '../constanst/api.constans';
import { IDoctor, IGetSearchedDoctor, ISearchDoctors } from '../models/doctor.model';

@Injectable({
    providedIn: 'root'
})
export class DoctorService {
    constructor(private httpClient: HttpClient) { }

    getDoctors() {
        const endpoint = ApiConstants.getEndpoint(ApiConstants.GET_HOSPITALS);
        return this.httpClient.get<IDoctor[]>(endpoint);
    }

    getSearchDoctors(params: ISearchDoctors) {
        const endpoint = ApiConstants.getEndpoint(ApiConstants.GET_SEARCH_DOCTORS).replace(':idSpeciality', params.idSpeciality.toString()).replace(':idHospital', params.idHospital.toString());
        return this.httpClient.post<IGetSearchedDoctor>(endpoint, { doctor: params.doctor.toString().trim(), page: params.page });
    }
}