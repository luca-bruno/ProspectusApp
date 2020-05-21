import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProspectusService {
    /**
     * The data stored in this service.
     */
    private _data: any = null;

    constructor(
        public http: HttpClient
    ) { }

    public async preload()
    {
        await this.http.get('assets/prospectus.json', {
            headers: new HttpHeaders()
                // Allows communication with any source on any website
                .set('Access-Control-Allow-Origin', '*')
                // GET/download JSON file
                .append('Access-Control-Allow-Methods', 'GET')
                // Permission enabling options
                .append('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method')
        })
            .toPromise()
            .then(
                // Success
                (content: string) => {
                    console.log(content);
                    this._data = content;
                },

                // Failure
                error => {
                    console.error(error);
                }
            );
    }

    /**
     * Look for and return the institutes list.
     */
    public getInstitutes(): any[]
    {
        return this._data;
    }

    /**
     * Will retrieve one institute from the list.
     * @param code The institute code.
     */
    public getInstitute(code: string): any
    {
        return this._data.find(i => i.code == code);
    }

    /**
     * Finds and returns the institute name from the JSON object.
     * @param institute The institute object
     * @param lang [OPTIONAL] The language with which to retrieve the information.
     */
    public getInstituteName(institute: any, lang: string = 'en'): string
    {
        return (lang == 'en') ? institute.name_en : institute.name_mt;
    }


    /**
     * Look for and return the courses list.
     */
    public getCourses(): any[]
    {
        return this._data.courses;
    }

        /**
     * Will retrieve one institute from the list.
     * @param code The institute code.
     */
    public getCourse(code: string): any
    {
        return this._data.courses.find(i => i.code == code);
    }

    /**
     * Finds and returns the institute name from the JSON object.
     * @param course The institute object
     * @param lang [OPTIONAL] The language with which to retrieve the information.
     */
    public getCourseName(course: any): string
    {
        return this._data.courses.find(i => i.course.name == course.name);
    }
}
