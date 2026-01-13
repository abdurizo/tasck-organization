import { Component, OnInit } from '@angular/core';
import { CardService } from '../../services/card.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CardInterface } from '../../models/card-modul';

@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrl: './card-page.component.css',
})
export class CardPageComponent implements OnInit {
  cardInterface?: CardInterface;
  cards: CardInterface[] = [];
  /**
   *
   * @param cardService
   * @param route
   */
  constructor(
    private cardService: CardService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  async ngOnInit() {
    this.cards = await this.cardService.getCardDate();
    this.route.params.subscribe((params) => {
      const id = params['id'];     
      this.cardInterface = this.cards.find(c => c.id === id);
    });

  }

  selectCard(id: number) {
    this.router.navigate(['/dashboard/card',id], {
      relativeTo: this.route,
     
    });
  }
}
