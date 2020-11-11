const express = require("express");
const router = express.Router();

const {
  getData,
  getDataByDate,
  createData,
  deleteData,
} = require("../models/data");

router.get("/", async function (req, res) {
  const data = await getData();
  console.log("my data");
  res.json({ message: "success", payload: data });
});

router.get("/:weekNum", async (req, res) => {
  const week = req.params.weekNum;
  console.log(week);
  const data = await getDataByDate(week);
  console.log(data);
  res.json({ success: true, payload: data });
});

router.post("/", async (req, res) => {
  const { data } = req.body;
  console.log(req.body);
  const myNewData = await createData(data);
  console.log(myNewData);
  res.json({ message: `You have added new data` });
});

module.exports = router;
