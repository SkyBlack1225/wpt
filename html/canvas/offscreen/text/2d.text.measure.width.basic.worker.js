// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.text.measure.width.basic
// Description:The width of character is same as font used
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

promise_test(async t => {
  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  var f = new FontFace("CanvasTest", "url('/fonts/CanvasTest.ttf')");
  f.load();
  self.fonts.add(f);
  await self.fonts.ready;
  ctx.font = '50px CanvasTest';
  _assertSame(ctx.measureText('A').width, 50, "ctx.measureText('A').width", "50");
  _assertSame(ctx.measureText('AA').width, 100, "ctx.measureText('AA').width", "100");
  _assertSame(ctx.measureText('ABCD').width, 200, "ctx.measureText('ABCD').width", "200");

  ctx.font = '100px CanvasTest';
  _assertSame(ctx.measureText('A').width, 100, "ctx.measureText('A').width", "100");
}, "The width of character is same as font used");
done();
