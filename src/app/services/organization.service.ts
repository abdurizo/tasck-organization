import { Injectable } from '@angular/core';
import { OrganizInterface } from '../models/organization-model';

@Injectable({
  providedIn: 'root',
})
export class OrganizationService {
  url = 'http://localhost:3000/listOfData';
  async getOrganDate(): Promise<OrganizInterface[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }
  /**
   *
   * @param id
   * @returns
   */

  async getById(id: number): Promise<OrganizInterface | undefined> {
    const dataID = await fetch(`${this.url}/${id}`);
    if (!dataID.ok) {
      return undefined;
    }
    return await dataID.json();
  }
  /**
   *
   */
  async patchById(
    id: number,
    body: Partial<OrganizInterface>
  ): Promise<OrganizInterface | undefined> {
    const res = await fetch(`${this.url}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    return await res.json();
  }
  async postOrganDate(body:Partial<OrganizInterface>):Promise<OrganizInterface>{
    const data = await fetch(this.url,{
      method:'POST',
      headers:{
         'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    return (await data.json())
  }
}
