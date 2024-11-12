// META: title=test WebNN API element-wise greater operation
// META: global=window,dedicatedworker
// META: variant=?cpu
// META: variant=?gpu
// META: variant=?npu
// META: script=../resources/utils.js
// META: timeout=long

'use strict';

// https://www.w3.org/TR/webnn/#api-mlgraphbuilder-logical
// Compare if the values of the first input tensor is greater, element-wise.
//
// MLOperand greater(MLOperand a, MLOperand b);


const getGreaterPrecisionTolerance = (graphResources) => {
  const toleranceValueDict = {uint8: 0};
  const expectedDataType =
      getExpectedDataTypeOfSingleOutput(graphResources.expectedOutputs);
  return {metricType: 'ULP', value: toleranceValueDict[expectedDataType]};
};

const greaterTests = [
  {
    'name': 'greater float32 0D scalar',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [3.6851015090942383],
          'descriptor': {shape: [], dataType: 'float32'}
        },
        'inputB': {
          'data': [1.723199725151062],
          'descriptor': {shape: [], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'greater',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {'data': [1], 'descriptor': {shape: [], dataType: 'uint8'}}
      }
    }
  },
  {
    'name': 'greater float32 1D constant tensors',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            -5.394711494445801,  -7.189248561859131,  -3.1081764698028564,
            4.977657318115234,   5.111654281616211,   -1.5386580228805542,
            1.414366364479065,   -0.9362112283706665, -6.029961585998535,
            -3.0134198665618896, 0.170855313539505,   7.395327091217041,
            7.178691864013672,   -4.826237678527832,  -2.020440101623535,
            -3.267888069152832,  8.944384574890137,   -5.932100772857666,
            0.7069857120513916,  2.7764203548431396,  0.978833794593811,
            -6.254901885986328,  4.409034729003906,   -6.775286674499512
          ],
          'descriptor': {shape: [24], dataType: 'float32'},
          'constant': true
        },
        'inputB': {
          'data': [
            -6.155234336853027, -4.023341178894043,  5.9525980949401855,
            2.306623697280884,  -2.7692291736602783, -0.9711201190948486,
            1.222206711769104,  4.590261459350586,   9.101232528686523,
            -4.997007846832275, -4.80729341506958,   8.919360160827637,
            0.9005027413368225, -2.8414556980133057, -2.8280413150787354,
            8.47984504699707,   -7.84067964553833,   9.213960647583008,
            4.982365131378174,  -2.507319211959839,  -4.518013954162598,
            8.351094245910645,  -6.161073207855225,  0.7364829182624817
          ],
          'descriptor': {shape: [24], dataType: 'float32'},
          'constant': true
        }
      },
      'operators': [{
        'name': 'greater',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0,
            1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0
          ],
          'descriptor': {shape: [24], dataType: 'uint8'}
        }
      }
    }
  },
  {
    'name': 'greater float32 1D tensors',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            -5.394711494445801,  -7.189248561859131,  -3.1081764698028564,
            4.977657318115234,   5.111654281616211,   -1.5386580228805542,
            1.414366364479065,   -0.9362112283706665, -6.029961585998535,
            -3.0134198665618896, 0.170855313539505,   7.395327091217041,
            7.178691864013672,   -4.826237678527832,  -2.020440101623535,
            -3.267888069152832,  8.944384574890137,   -5.932100772857666,
            0.7069857120513916,  2.7764203548431396,  0.978833794593811,
            -6.254901885986328,  4.409034729003906,   -6.775286674499512
          ],
          'descriptor': {shape: [24], dataType: 'float32'}
        },
        'inputB': {
          'data': [
            -6.155234336853027, -4.023341178894043,  5.9525980949401855,
            2.306623697280884,  -2.7692291736602783, -0.9711201190948486,
            1.222206711769104,  4.590261459350586,   9.101232528686523,
            -4.997007846832275, -4.80729341506958,   8.919360160827637,
            0.9005027413368225, -2.8414556980133057, -2.8280413150787354,
            8.47984504699707,   -7.84067964553833,   9.213960647583008,
            4.982365131378174,  -2.507319211959839,  -4.518013954162598,
            8.351094245910645,  -6.161073207855225,  0.7364829182624817
          ],
          'descriptor': {shape: [24], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'greater',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0,
            1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0
          ],
          'descriptor': {shape: [24], dataType: 'uint8'}
        }
      }
    }
  },
  {
    'name': 'greater float32 2D tensors',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            -5.394711494445801,  -7.189248561859131,  -3.1081764698028564,
            4.977657318115234,   5.111654281616211,   -1.5386580228805542,
            1.414366364479065,   -0.9362112283706665, -6.029961585998535,
            -3.0134198665618896, 0.170855313539505,   7.395327091217041,
            7.178691864013672,   -4.826237678527832,  -2.020440101623535,
            -3.267888069152832,  8.944384574890137,   -5.932100772857666,
            0.7069857120513916,  2.7764203548431396,  0.978833794593811,
            -6.254901885986328,  4.409034729003906,   -6.775286674499512
          ],
          'descriptor': {shape: [4, 6], dataType: 'float32'}
        },
        'inputB': {
          'data': [
            -6.155234336853027, -4.023341178894043,  5.9525980949401855,
            2.306623697280884,  -2.7692291736602783, -0.9711201190948486,
            1.222206711769104,  4.590261459350586,   9.101232528686523,
            -4.997007846832275, -4.80729341506958,   8.919360160827637,
            0.9005027413368225, -2.8414556980133057, -2.8280413150787354,
            8.47984504699707,   -7.84067964553833,   9.213960647583008,
            4.982365131378174,  -2.507319211959839,  -4.518013954162598,
            8.351094245910645,  -6.161073207855225,  0.7364829182624817
          ],
          'descriptor': {shape: [4, 6], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'greater',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0,
            1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0
          ],
          'descriptor': {shape: [4, 6], dataType: 'uint8'}
        }
      }
    }
  },
  {
    'name': 'greater float32 3D tensors',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            -5.394711494445801,  -7.189248561859131,  -3.1081764698028564,
            4.977657318115234,   5.111654281616211,   -1.5386580228805542,
            1.414366364479065,   -0.9362112283706665, -6.029961585998535,
            -3.0134198665618896, 0.170855313539505,   7.395327091217041,
            7.178691864013672,   -4.826237678527832,  -2.020440101623535,
            -3.267888069152832,  8.944384574890137,   -5.932100772857666,
            0.7069857120513916,  2.7764203548431396,  0.978833794593811,
            -6.254901885986328,  4.409034729003906,   -6.775286674499512
          ],
          'descriptor': {shape: [2, 3, 4], dataType: 'float32'}
        },
        'inputB': {
          'data': [
            -6.155234336853027, -4.023341178894043,  5.9525980949401855,
            2.306623697280884,  -2.7692291736602783, -0.9711201190948486,
            1.222206711769104,  4.590261459350586,   9.101232528686523,
            -4.997007846832275, -4.80729341506958,   8.919360160827637,
            0.9005027413368225, -2.8414556980133057, -2.8280413150787354,
            8.47984504699707,   -7.84067964553833,   9.213960647583008,
            4.982365131378174,  -2.507319211959839,  -4.518013954162598,
            8.351094245910645,  -6.161073207855225,  0.7364829182624817
          ],
          'descriptor': {shape: [2, 3, 4], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'greater',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0,
            1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0
          ],
          'descriptor': {shape: [2, 3, 4], dataType: 'uint8'}
        }
      }
    }
  },
  {
    'name': 'greater float32 4D tensors',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            -5.394711494445801,  -7.189248561859131,  -3.1081764698028564,
            4.977657318115234,   5.111654281616211,   -1.5386580228805542,
            1.414366364479065,   -0.9362112283706665, -6.029961585998535,
            -3.0134198665618896, 0.170855313539505,   7.395327091217041,
            7.178691864013672,   -4.826237678527832,  -2.020440101623535,
            -3.267888069152832,  8.944384574890137,   -5.932100772857666,
            0.7069857120513916,  2.7764203548431396,  0.978833794593811,
            -6.254901885986328,  4.409034729003906,   -6.775286674499512
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'}
        },
        'inputB': {
          'data': [
            -6.155234336853027, -4.023341178894043,  5.9525980949401855,
            2.306623697280884,  -2.7692291736602783, -0.9711201190948486,
            1.222206711769104,  4.590261459350586,   9.101232528686523,
            -4.997007846832275, -4.80729341506958,   8.919360160827637,
            0.9005027413368225, -2.8414556980133057, -2.8280413150787354,
            8.47984504699707,   -7.84067964553833,   9.213960647583008,
            4.982365131378174,  -2.507319211959839,  -4.518013954162598,
            8.351094245910645,  -6.161073207855225,  0.7364829182624817
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'greater',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0,
            1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'uint8'}
        }
      }
    }
  },
  {
    'name': 'greater float32 5D tensors',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            -5.394711494445801,  -7.189248561859131,  -3.1081764698028564,
            4.977657318115234,   5.111654281616211,   -1.5386580228805542,
            1.414366364479065,   -0.9362112283706665, -6.029961585998535,
            -3.0134198665618896, 0.170855313539505,   7.395327091217041,
            7.178691864013672,   -4.826237678527832,  -2.020440101623535,
            -3.267888069152832,  8.944384574890137,   -5.932100772857666,
            0.7069857120513916,  2.7764203548431396,  0.978833794593811,
            -6.254901885986328,  4.409034729003906,   -6.775286674499512
          ],
          'descriptor': {shape: [2, 2, 1, 2, 3], dataType: 'float32'}
        },
        'inputB': {
          'data': [
            -6.155234336853027, -4.023341178894043,  5.9525980949401855,
            2.306623697280884,  -2.7692291736602783, -0.9711201190948486,
            1.222206711769104,  4.590261459350586,   9.101232528686523,
            -4.997007846832275, -4.80729341506958,   8.919360160827637,
            0.9005027413368225, -2.8414556980133057, -2.8280413150787354,
            8.47984504699707,   -7.84067964553833,   9.213960647583008,
            4.982365131378174,  -2.507319211959839,  -4.518013954162598,
            8.351094245910645,  -6.161073207855225,  0.7364829182624817
          ],
          'descriptor': {shape: [2, 2, 1, 2, 3], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'greater',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0,
            1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0
          ],
          'descriptor': {shape: [2, 2, 1, 2, 3], dataType: 'uint8'}
        }
      }
    }
  },
  {
    'name': 'greater float32 broadcast 0D to 4D',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [6.2216410636901855],
          'descriptor': {shape: [], dataType: 'float32'}
        },
        'inputB': {
          'data': [
            -5.394711494445801,  -7.189248561859131,  -3.1081764698028564,
            4.977657318115234,   5.111654281616211,   -1.5386580228805542,
            1.414366364479065,   -0.9362112283706665, -6.029961585998535,
            -3.0134198665618896, 0.170855313539505,   7.395327091217041,
            7.178691864013672,   -4.826237678527832,  -2.020440101623535,
            -3.267888069152832,  8.944384574890137,   -5.932100772857666,
            0.7069857120513916,  2.7764203548431396,  0.978833794593811,
            -6.254901885986328,  4.409034729003906,   -6.775286674499512
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'greater',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
            0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'uint8'}
        }
      }
    }
  },
  {
    'name': 'greater float32 broadcast 1D to 4D',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [6.2216410636901855],
          'descriptor': {shape: [1], dataType: 'float32'}
        },
        'inputB': {
          'data': [
            -5.394711494445801,  -7.189248561859131,  -3.1081764698028564,
            4.977657318115234,   5.111654281616211,   -1.5386580228805542,
            1.414366364479065,   -0.9362112283706665, -6.029961585998535,
            -3.0134198665618896, 0.170855313539505,   7.395327091217041,
            7.178691864013672,   -4.826237678527832,  -2.020440101623535,
            -3.267888069152832,  8.944384574890137,   -5.932100772857666,
            0.7069857120513916,  2.7764203548431396,  0.978833794593811,
            -6.254901885986328,  4.409034729003906,   -6.775286674499512
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'greater',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
            0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'uint8'}
        }
      }
    }
  },
  {
    'name': 'greater float32 broadcast 2D to 4D',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            -5.394711494445801,  -7.189248561859131,  -3.1081764698028564,
            4.977657318115234,   5.111654281616211,   -1.5386580228805542,
            1.414366364479065,   -0.9362112283706665, -6.029961585998535,
            -3.0134198665618896, 0.170855313539505,   7.395327091217041,
            7.178691864013672,   -4.826237678527832,  -2.020440101623535,
            -3.267888069152832,  8.944384574890137,   -5.932100772857666,
            0.7069857120513916,  2.7764203548431396,  0.978833794593811,
            -6.254901885986328,  4.409034729003906,   -6.775286674499512
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'}
        },
        'inputB': {
          'data': [
            -2.684664487838745, 6.170023441314697, 9.487744331359863,
            -2.5556411743164062, -2.0436434745788574, 8.533930778503418
          ],
          'descriptor': {shape: [2, 3], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'greater',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0,
            1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'uint8'}
        }
      }
    }
  },
  {
    'name': 'greater float32 broadcast 3D to 4D',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            -5.394711494445801,  -7.189248561859131,  -3.1081764698028564,
            4.977657318115234,   5.111654281616211,   -1.5386580228805542,
            1.414366364479065,   -0.9362112283706665, -6.029961585998535,
            -3.0134198665618896, 0.170855313539505,   7.395327091217041,
            7.178691864013672,   -4.826237678527832,  -2.020440101623535,
            -3.267888069152832,  8.944384574890137,   -5.932100772857666,
            0.7069857120513916,  2.7764203548431396,  0.978833794593811,
            -6.254901885986328,  4.409034729003906,   -6.775286674499512
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'}
        },
        'inputB': {
          'data': [
            -7.099076271057129, -7.781408309936523, 8.782817840576172,
            -8.948624610900879
          ],
          'descriptor': {shape: [2, 2, 1], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'greater',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'uint8'}
        }
      }
    }
  },
  {
    'name': 'greater float32 broadcast 4D to 4D',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [6.2216410636901855],
          'descriptor': {shape: [1, 1, 1, 1], dataType: 'float32'}
        },
        'inputB': {
          'data': [
            -5.394711494445801,  -7.189248561859131,  -3.1081764698028564,
            4.977657318115234,   5.111654281616211,   -1.5386580228805542,
            1.414366364479065,   -0.9362112283706665, -6.029961585998535,
            -3.0134198665618896, 0.170855313539505,   7.395327091217041,
            7.178691864013672,   -4.826237678527832,  -2.020440101623535,
            -3.267888069152832,  8.944384574890137,   -5.932100772857666,
            0.7069857120513916,  2.7764203548431396,  0.978833794593811,
            -6.254901885986328,  4.409034729003906,   -6.775286674499512
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'greater',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
            0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'uint8'}
        }
      }
    }
  }
];

if (navigator.ml) {
  greaterTests.forEach((test) => {
    webnn_conformance_test(
        buildAndExecuteGraph, getGreaterPrecisionTolerance, test);
  });
} else {
  test(() => assert_implements(navigator.ml, 'missing navigator.ml'));
}
