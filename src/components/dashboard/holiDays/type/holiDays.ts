// {
//     "today": {
//         "count": 0,
//         "data": []
//     },
//     "upcoming": {
//         "count": 5,
//         "data": [
//             {
//                 "id": 42,
//                 "name": "Raksha Bandhan",
//                 "date": "2026-08-28",
//                 "holiday_image": "https://inx-portal-media.s3.amazonaws.com/media/holiday_img/Raksha_Bhandha.jpg?AWSAccessKeyId=AKIASVXDBA24LIWTIOU6&Signature=gyIadUhY4hMNAgjlO4%2FmemBkUus%3D&Expires=1780487210"
//             },
//             {
//                 "id": 43,
//                 "name": "Janmashtami",
//                 "date": "2026-09-04",
//                 "holiday_image": "https://inx-portal-media.s3.amazonaws.com/media/holiday_img/Janmastami_new.jpg?AWSAccessKeyId=AKIASVXDBA24LIWTIOU6&Signature=VtX%2FjzEOw%2FpSsQKGh5npbNsnwAM%3D&Expires=1780487210"
//             },
//             {
//                 "id": 44,
//                 "name": "Gandhi Jayanti",
//                 "date": "2026-10-02",
//                 "holiday_image": "https://inx-portal-media.s3.amazonaws.com/media/holiday_img/Gandhi_Jayanti.jpg?AWSAccessKeyId=AKIASVXDBA24LIWTIOU6&Signature=yRYkG1PYthX5dgdqSXhFvzBjKLY%3D&Expires=1780487210"
//             },
//             {
//                 "id": 45,
//                 "name": "Diwali",
//                 "date": "2026-11-09",
//                 "holiday_image": "https://inx-portal-media.s3.amazonaws.com/media/holiday_img/Diwali_2.jpg?AWSAccessKeyId=AKIASVXDBA24LIWTIOU6&Signature=uHi8yuoOOkGIBL1xY1KdiroFd28%3D&Expires=1780487210"
//             },
//             {
//                 "id": 46,
//                 "name": "Gujarati New Year",
//                 "date": "2026-11-10",
//                 "holiday_image": "https://inx-portal-media.s3.amazonaws.com/media/holiday_img/New_Year_2.jpg?AWSAccessKeyId=AKIASVXDBA24LIWTIOU6&Signature=nmY6WQmQxJzDejtOsV3WsZeY4XM%3D&Expires=1780487210"
//             }
//         ]
//     }
// }

export interface Holiday {
  id: number;
  name: string;
  date: string;
  holiday_image: string;
}

export interface HolidayData {
  count: number;
  data: Holiday[];
}

export interface HolidayAPIResponse {
  today: HolidayData;
  upcoming: HolidayData;
}
