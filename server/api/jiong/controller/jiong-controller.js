"use strict";

const JiongDAO = require('../dao/jiong-dao');

module.exports = class JiongController {
  static getAll(req, res) {
    let _query = req.query;

    JiongDAO
        .getAll(_query)
        .then(jiongs => res.status(200).json(jiongs))
        .catch(error => res.status(400).json(error));
  }

  static create(req, res) {
      let _jiong = req.body;

    JiongDAO
        .create(_jiong)
        .then(jiong => res.status(201).json(jiong))
        .catch(error => res.status(400).json(error));
  }


  static findById(req, res) {
    let _id = req.params.id;
    JiongDAO
      .findById(_id)
      .then(jiong => res.status(200).json(jiong))
      .catch(error => res.status(400).json(error));
  }

  static findContentById(req, res) {
    let _id = req.params.id;

    JiongDAO
      .findContentById(_id)
      .then(data => res.status(200).json(data))
      .catch(error => res.status(400).json(error));
  }


  static delete(req, res) {
    let _id = req.params.id;

    JiongDAO
      .delete(_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }
}
