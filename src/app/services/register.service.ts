import { Injectable } from '@angular/core';
import { RegisterInterface } from '../models/register-model';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  async postRegister(body:Partial<RegisterInterface>):Promise<RegisterInterface | undefined> {
    const data = await fetch('http://localhost:3000/registerData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    return await data.json()
  }
  async getRegister():Promise<RegisterInterface[]>{
    const data = await fetch('http://localhost:3000/registerData');
    return await data.json()
  }
}
