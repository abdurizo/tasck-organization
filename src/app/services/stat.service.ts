import { Injectable } from '@angular/core';
import { StatInterface } from '../models/stat-modul';

@Injectable({
  providedIn: 'root',
})
export class StatService {
  
  async getStatData():Promise<StatInterface[]>{
    const data = await fetch('http://localhost:3000/statData');
    return (await data.json()) ?? [];
  }
}
