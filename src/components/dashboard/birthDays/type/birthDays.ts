// Today BirthDay
// {
//     "count": 1,
//     "data": [
//         {
//             "id": 273,
//             "first_name": "Smit",
//             "last_name": "Mevada",
//             "username": "smitmevada@inexture.com",
//             "email": "smitmevada@inexture.com",
//             "image": null,
//             "birth_date": "2002-06-03",
//             "gender": "male",
//             "user_official_details": {
//                 "code": "INXSD491",
//                 "designation": "Junior Python Developer",
//                 "team": "Python Team",
//                 "experience_year": 1,
//                 "experience_month": 8
//             }
//         }
//     ],
//     "message": "Employee's Birthdays Getted Successfully."
// }

export interface BirthdayOfficialDetails {
  code: string;
  designation: string;
  team: string;
  experience_year: number;
  experience_month: number;
}

export interface BirthdayEmployee {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  image: string | null;
  birth_date: string;
  gender: "male" | "female" | string;
  user_official_details: BirthdayOfficialDetails;
}

export interface TodayBirthDayAPIResponse {
  count: number;
  data: BirthdayEmployee[];
  message: string;
}
