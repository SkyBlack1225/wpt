// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.composite.canvas.destination-out
// Description:
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

promise_test(async t => {
  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgba(0, 255, 255, 0.5)';
  ctx.fillRect(0, 0, 100, 50);
  ctx.globalCompositeOperation = 'destination-out';
  const canvas2 = new OffscreenCanvas(canvas.width, canvas.height);
  const ctx2 = canvas2.getContext('2d');
  const response = await fetch('/images/yellow75.png')
  const blob = await response.blob();
  const bitmap = await createImageBitmap(blob);
  ctx2.drawImage(bitmap, 0, 0);
  ctx.drawImage(canvas2, 0, 0);
  _assertPixelApprox(canvas, 50,25, 0,255,255,32, 5);
}, "");
done();
