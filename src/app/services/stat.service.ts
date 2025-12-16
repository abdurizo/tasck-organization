import { Injectable } from '@angular/core';
import { StatInterface } from '../models/stat-modul';

@Injectable({
  providedIn: 'root',
})
export class StatService {
  statData: StatInterface[] = [
    {
      id: 1,
      title: 'Arliene',
      count: 1,
      icon: 'AE',
      stat_percentage: 69,
    },
    {
      id: 2,
      title: 'Verne',
      count: 2,
      icon: 'US',
      stat_percentage: 94,
    },
    {
      id: 3,
      title: 'Margalit',
      count: 3,
      icon: 'CA',
      stat_percentage: 22,
    },
    {
      id: 4,
      title: 'Van',
      count: 4,
      icon: 'US',
      stat_percentage: 51,
    },
  ];
  constructor() {}
}
