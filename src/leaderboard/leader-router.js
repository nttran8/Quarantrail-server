const express = require("express");
const LeaderService = require("./leader-service");

const leaderRouter = express.Router();
const jsonBodyParser = express.json();

leaderRouter
  .get("/", (req, res, next) => {
    LeaderService.getAll(req.app.get("db")).then(data => {
      res.status(200).json(data);
    });
  })
  .post("/", jsonBodyParser, async (req, res, next) => {
    const { score, name } = req.body;
    const newScore = { name, score };
    if (!name) {
      return res.status(400).json({
        error: "Missing name in request body"
      });
    }
    LeaderService.postScore(req.app.get("db"), newScore).then(data => {
      res.status(201).json(data);
    });
  });

module.exports = leaderRouter;
