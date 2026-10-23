import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-single-list',
  templateUrl: './single-list.component.html',
  styleUrls: ['./single-list.component.less']
})
export class SingleListComponent {
  techs = ['Angular', 'Vue', 'React', 'Node'];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.techs, event.previousIndex, event.currentIndex);
  }
}
