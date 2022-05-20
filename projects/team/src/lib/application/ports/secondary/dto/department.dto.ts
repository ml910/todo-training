export interface DepartmentDTO {
  readonly name: COMPANY_DEPARTMENTS;
  readonly employeeCount?: number;
}

export const enum COMPANY_DEPARTMENTS {
  ACCOUNTING = 'accounting',
  IT = 'IT',
}
