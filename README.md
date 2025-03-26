# exam-group-groupi-api

# frends

Rafael B. Patiño
- 8th dwarf ni snow white / Lead Programmer / Project Coordinator AKA tig mandar

John Ray Tinga
- airport forehead / Lion sin of pride / Project Manager AKA Vegeta ass hairline kapatid ni Ms Database

Damien Cumeran
- Rizzler / Molester / Programmer AKA Utak ng himagsikan

James Stanley Dimarucut
- Brain rot / Programmer / AKA Nag himagsikan ang utak


# Documentation
Base url
http://localhost:3000/api

1. Get All Exams
GET /api/addget

[
  { "id": 1, "name": "Rafael" },
  { "id": 2, "name": "Damien" },
  { "id": 3, "name": "Stanley" },
  { "id": 4, "name": "John" }
]

2. Add a New Exam
POST /api/addpost

{
  "name": "New Exam"
}

Response (Success - 201):
{
  "id": 5,
  "name": "New Exam"
}

Response (Error - 400):
{
  "message": "Name is required."
}

3. Update an Existing Exam
PUT /api/addput/:id

{
  "name": "Updated Exam Name"
}

Response (Success - 200):
{
  "id": 1,
  "name": "Updated Exam Name"
}
