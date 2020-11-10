const { query } = require("../db/index");

async function getData() {
  const questions = await query(`SELECT * FROM weeklyQuestions`);
  return questions.rows;
}

async function getDataByDate(id) {
  const questions = await query(
    `SELECT * FROM weeklyQuestions WHERE id = $1 `,
    [id]
  );

  return questions.rows[0];
}

async function createData(data) {
  const { q1, q2, q3, q4, q5 } = data;
  const res = await query(
    `INSERT INTO weeklyQuestions (
            ,q1
            ,q2
            ,q3
            ,q4
            ,q5
        ) VALUES($1, $2, $3, $4, $5) RETURNING *`,
    [q1, q2, q3, q4, q5]
  );
  return res.rows[0];
}

async function deleteData(id) {
  const res = await query(
    `DELETE FROM weeklyQuestions WHERE id = $1 RETURNING id`,
    [id]
  );
  return res.rows[0];
}

module.exports = {
  getData,
  createData,
  getDataByDate,
  deleteData,
};
