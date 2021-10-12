/** @format */

import express from "express";
import { Group, GroupMember } from "../models/IceBreaker";
import { getClient } from "../db";
import { ObjectId } from "mongodb";

const routes = express.Router();

routes.get("/groups", async (req, res) => {
  try {
    const client = await getClient();
    console.log(client.db().databaseName);
    const results = await client
      .db()
      .collection<Group>("groups")
      .find()
      .toArray();
    res.json(results);
  } catch (err) {
    console.error("ERROR", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
routes.get("/groups/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const client = await getClient();
    const result = await client
      .db()
      .collection<Group>("groups")
      .findOne({ _id: new ObjectId(id) });
    if (result) {
      res.json(result);
    } else {
      res.status(404).send({ message: "Not Found" });
    }
  } catch (err) {
    console.error("ERROR", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

routes.get("/group-members", async (req, res) => {
  try {
    const client = await getClient();
    const results = await client
      .db()
      .collection<GroupMember>("groupmembers")
      .find()
      .toArray();
    res.json(results);
  } catch (err) {
    console.error("ERROR", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

routes.post("/groups", async (req, res) => {
  const newGroup: Group = req.body;
  try {
    const client = await getClient();
    const result = await client
      .db()
      .collection<Group>("groups")
      .insertOne(newGroup);
    newGroup._id = result.insertedId;
    res.status(201);
    res.json(newGroup);
  } catch (err) {
    console.error("ERROR", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default routes;
