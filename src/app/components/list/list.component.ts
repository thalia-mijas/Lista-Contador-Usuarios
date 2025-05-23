import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgFor],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'], // Corrección aquí
})
export class ListComponent {
  item = new FormControl('');

  items: string[] = [];

  aggItem() {
    const newItem = this.item.value;
    console.log(newItem);

    if (newItem != null) {
      if (this.items.indexOf(newItem) >= 0) {
        alert('Item ya existe.');
        this.item.reset();
        return;
      }
      this.items.push(newItem);
      this.item.reset();
    }
  }

  delItem(item: string) {
    console.log(item);
    this.items.splice(this.items.indexOf(item), 1);
  }
}
