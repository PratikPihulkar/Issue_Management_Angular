import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [CommonModule],
  standalone:true
})
export class HomeComponent {

  isSelected: boolean = false;
  isHighlighted: boolean = false;

  toggleSelection() {
    this.isSelected = !this.isSelected;
    this.isHighlighted = this.isSelected; // Example condition
  }
}
