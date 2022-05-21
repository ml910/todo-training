import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { ExampleListItemDTO } from '../../../application/ports/secondary/dto/example-list-item.dto';
import {
  GETS_ALL_EXAMPLE_LIST_ITEM_DTO,
  GetsAllExampleListItemDtoPort,
} from '../../../application/ports/secondary/dto/gets-all-example-list-item.dto-port';

@Component({
  selector: 'lib-examples-list',
  templateUrl: './examples-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExamplesListComponent {
  // Generating this took around 8-10 seconds, unusually long for Lowgular
  // Everything was generated perfectly by the way, just pointing that it takes longer than it used to
  examplesList$: Observable<ExampleListItemDTO[]> =
    this._getsAllExampleListItemDto.getAll();

  constructor(
    @Inject(GETS_ALL_EXAMPLE_LIST_ITEM_DTO)
    private _getsAllExampleListItemDto: GetsAllExampleListItemDtoPort
  ) {}
}
