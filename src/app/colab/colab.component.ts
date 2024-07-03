import { Component, EventEmitter, Input } from '@angular/core';
@Component({
  selector: 'app-colab',
  templateUrl: './colab.component.html',
  styleUrl: './colab.component.css',
})
export class ColabComponent{
  @Input() listColab: any[] = [];
  @Input() activeIndices: number[] = [];
}
