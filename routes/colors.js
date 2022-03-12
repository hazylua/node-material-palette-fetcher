const { makePalette } = require('material-color-tool');
var express = require('express');
const palette = require('material-color-tool/lib/palette');
var router = express.Router();

/**
 * @see https://github.com/Ignigena/material-color-tool
 * @see https://material.io/inline-tools/color/
 * @see https://materialui.co/
 */
router.get('/', function (req, res, next) {
  let palette = makePalette(req.query.color);
  let labels = [
    '50',
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900'
  ];
  palette_labeled = {};
  palette.map((color, i) => (palette_labeled[labels[i]] = color));
  console.log(req.query, palette_labeled);
  res.send(palette_labeled);
});

router.get('/:color', function (req, res, next) {
  let palette = makePalette(req.params.color);
  let labels = [
    '50',
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900'
  ];
  palette_labeled = {};
  palette.map((color, i) => (palette_labeled[labels[i]] = color));
  console.log(req.query, palette_labeled);
  res.send(palette_labeled);
});

module.exports = router;
