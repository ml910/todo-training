import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable, of } from 'rxjs';

interface TeamMember {
  name: string;
  surname: string;
  imageUrl: string;
  description: string;
}

// TODO: This is not a lib, it's a component inside a lib
@Component({
  selector: 'lib-our-team',
  templateUrl: './our-team.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OurTeamComponent {
  teamMembers$: Observable<TeamMember[]> = of([
    {
      name: 'John',
      surname: 'McJohn',
      imageUrl:
        'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934',
      description: 'A happy guy',
    },
    {
      name: 'Jane',
      surname: "O'Jane",
      imageUrl:
        'https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1141',
      description: 'A smiley woman',
    },
  ]);
}
