import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-double-list-copied-items',
  templateUrl: './double-list-copied-items.component.html',
  styleUrls: ['./double-list-copied-items.component.less']
})
export class DoubleListCopiedItemsComponent {

  available =  ['John', 'Joe', 'Calra', 'Alex'];
  assigned = ['Rei', 'Rat'];

  drop(event: CdkDragDrop<string[]>) {
    if(event.previousContainer !== event.container) {
      transferArrayItem(  //use copyArrayItem if want item to present in both the lists
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      )
    }
  }
}
