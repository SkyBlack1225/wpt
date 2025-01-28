// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.imageData.get.double
// Description:createImageData(w, h) double is converted to long
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("createImageData(w, h) double is converted to long");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  var imgdata1 = ctx.getImageData(0, 0, 10.01, 10.99);
  var imgdata2 = ctx.getImageData(0, 0, -10.01, -10.99);
  _assertSame(imgdata1.width, 10, "imgdata1.width", "10");
  _assertSame(imgdata1.height, 10, "imgdata1.height", "10");
  _assertSame(imgdata2.width, 10, "imgdata2.width", "10");
  _assertSame(imgdata2.height, 10, "imgdata2.height", "10");
  t.done();
});
done();
