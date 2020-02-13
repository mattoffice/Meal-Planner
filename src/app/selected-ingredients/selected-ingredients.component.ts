import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { BasketService } from '../basket.service';

@Component({
  selector: 'app-selected-ingredients',
  templateUrl: './selected-ingredients.component.html',
  styleUrls: ['./selected-ingredients.component.css']
})
export class SelectedIngredientsComponent implements OnInit {
  @Input() count: number = 0;
  @Input() selectedIngredients;

  constructor(private basketService: BasketService) { 
    
  }

  ngOnInit(): void {
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}
