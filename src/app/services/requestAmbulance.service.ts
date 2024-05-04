import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiConstants } from '../constanst/api.constans';
import { IRequestAmbulance } from '../models/request-ambulance.model';

@Injectable({
    providedIn: 'root'
})
export class RequestAmbulanceService {
    constructor(private httpClient: HttpClient) { }

    requestAmbulance(request: IRequestAmbulance) {
        const endpoint = ApiConstants.getEndpoint(ApiConstants.REQUEST_AMBULANCE);
        return this.httpClient.post(endpoint, request);
    }
}