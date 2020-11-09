const { query } = require("../index");

const mockTable = [
  {
    date: "2020-11-09",
    q1: "lorem ipum",
    q2: "more data",
    q3: "even more data",
    q4: "too much data",
    q5: "so much data",
  },
];

const text = `INSERT INTO weeklyQuestions(date,q1,q2,q3,q4,q5) VALUES($1, $2, $3, $4, $5, $6) RETURNING *`;

async function populateTable() {
  for (let i = 0; i < mockTable.length; i++) {
    let item = mockTable[i];
    let res = await query(text, [
      item.date,
      item.q1,
      item.q2,
      item.q3,
      item.q4,
      item.q5,
    ]);
    console.log(res);
  }
}
populateTable();
