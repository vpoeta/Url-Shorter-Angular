import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { URL } from '../../Commons/URL'

@Injectable({
  providedIn: 'root'
})
export class LinkUtilsService {

    constructor(private http: HttpClient) { }


    convertLink(value: string) {
        const obj = {
            LongUrl: value
        }
        return this.http.post(URL.POST_LINK, obj);
    }

    getLinkForCode(code: string) {
        return this.http.get(`${URL.GET_LINK}${code}`)
    }
}
