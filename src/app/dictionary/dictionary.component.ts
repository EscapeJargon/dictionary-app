import { Component, OnInit } from '@angular/core';
import { DictionaryService } from '../dictionary.service';

@Component({
  selector: 'dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css'],
})
export class DictionaryComponent implements OnInit {
  dictionaryData: any[];
  searchResults: any[];

  constructor(private dictionaryService: DictionaryService) {}

  ngOnInit(): void {
    this.dictionaryService.getDictionaryData().subscribe((data) => {
      this.dictionaryData = data;
    });
  }
  search(searchTerm: string): void {
    if (searchTerm) {
      this.searchResults = this.dictionaryData.filter((item) =>
        item.word.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      this.searchResults = [];
    }
  }
}
