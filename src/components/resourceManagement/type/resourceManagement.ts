type Employee = {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    gender: string;
    image: string;
    experience_year: number;
    experience_month: number;
    designation: string;
    team: string;
    projects: string[];
}

export type EmployeesDetailsResponse = {
    data: Employee[];
    labels: {
        total_employee: number;
        limit: number;
        offset: number;
        total_teams: number;
    }
}