import { DepartmentDTO } from './department.dto';

export interface TeamMemberDTO {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly imageUrl: string;
  department: DepartmentDTO;
}
