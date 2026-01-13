import { Injectable } from '@angular/core';
import { CardInterface } from '../models/card-modul';

@Injectable({
  providedIn: 'root',
})
export class CardService {

  async getCardDate(): Promise<CardInterface[]> {
    const data = await fetch('http://localhost:3000/cardData');
    return (await data.json()) ?? [];
  }
}
