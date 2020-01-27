import { Component, OnInit, Input } from '@angular/core';
import { CharService } from '../char.service';

@Component({
  selector: 'app-char-sheet',
  templateUrl: './char-sheet.component.html',
  styleUrls: ['./char-sheet.component.css']
})
export class CharSheetComponent implements OnInit {
  @Input() charName: string;
  constructor(private charService: CharService) { }

  ngOnInit() {
  }

  getName() {
    return this.charName;
  }

  getDesc() {
    if (this.getName()) {
      return this.charService.getCharByName(this.getName()).desc;
    }
    return '';
  }
}
