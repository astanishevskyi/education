import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() tabSelected = new EventEmitter<string>();

  onSelect(feature) {
    this.tabSelected.emit(feature);
  }
}
