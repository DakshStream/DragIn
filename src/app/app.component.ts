import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'DragIn';
  techs = ['Angular', 'Vue', 'React', 'Node'];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.techs, event.previousIndex, event.currentIndex);
  }
}
