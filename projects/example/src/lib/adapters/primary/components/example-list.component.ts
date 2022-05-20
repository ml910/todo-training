import { ChangeDetectionStrategy, Component, Inject, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ExampleDTO } from '../../../application/ports/secondary/dto/example.dto';
import { GETS_ALL_EXAMPLE_DTO, GetsAllExampleDtoPort } from '../../../application/ports/secondary/dto/gets-all-example.dto-port';

@Component({
  selector: 'lib-example-list',
  templateUrl: './example-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleListComponent {
  exampleList$: Observable<ExampleDTO[]> = this._getsAllExampleDto.getAll();

  constructor(@Inject(GETS_ALL_EXAMPLE_DTO) private _getsAllExampleDto: GetsAllExampleDtoPort) {
  }
}
