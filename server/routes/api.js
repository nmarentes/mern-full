import * as express from 'express';
import * as http from 'http';
import * as path from 'path';
import * as fs from 'fs';
const router = express.Router();

router.get('/', (req, res) => {
  const time = new Date();
  res.write("Hello API: "+ time.toISOString());
  res.end();
});

module.exports = router;
