import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchTerm: string;

  @Output() searchEvent = new EventEmitter<string>();

  search(): void {
    this.searchEvent.emit(this.searchTerm);
  }
}
