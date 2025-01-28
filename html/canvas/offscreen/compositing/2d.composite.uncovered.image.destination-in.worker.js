// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.composite.uncovered.image.destination-in
// Description:drawImage() draws pixels not covered by the source object as (0,0,0,0), and does not leave the pixels unchanged.
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

promise_test(async t => {
  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgba(0, 255, 255, 0.5)';
  ctx.fillRect(0, 0, 100, 50);
  ctx.globalCompositeOperation = 'destination-in';
  const response = await fetch('/images/yellow.png')
  const blob = await response.blob();
  const bitmap = await createImageBitmap(blob);
  ctx.drawImage(bitmap, 40, 40, 10, 10, 40, 50, 10, 10);
  _assertPixelApprox(canvas, 50,25, 0,0,0,0, 5);
}, "drawImage() draws pixels not covered by the source object as (0,0,0,0), and does not leave the pixels unchanged.");
done();
