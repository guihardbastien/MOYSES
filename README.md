# MOYSES

## Description

MOYSES is a Support Vector Machine (SVM) library for node.js using TypeScript.
It's used for binary classification purposes using n-dimensional datasets.

## Overview
![MOSES](https://media.giphy.com/media/12Wn7ox4gWevAs/giphy.gif)

### Directory structure 
```bash
├── lib
│   ├── core
│   │   ├── engine
│   │   │   └── svm.ts
│   │   └── kernels
│   │       └── kernels.ts
│   ├── types
│   │   └── dataset_type.ts
│   ├── utils
│   │   ├── dataset_generation
│   │   │   ├── dataset_generator.ts
│   │   │   └── generate_points.ts
│   │   └── utils.ts
│   └── index.ts
├── tests
│   ├── generate_dataset.test.ts
│   └── svm.test.ts
├── .gitignore
├── LICENSE
├── README.md
├── package-lock.json
├── package.json
├── tsconfig.json
└── tslint.json
```

### How to build the library to be used in production-ready projects?

```npm install moyses```

### How to use?

```typescript
import * as Moyses from 'moyses'

// will generate 10 pairs of labeled data you might as well wanna use your own dataset
const dataset = new Moyses.DatasetGenerator('CIRCULAR',10).generate();

//instanciate SVM
const svm = new Svm(circularDataset, 5, 'RBF', 15 );

//classify data
const positiveResult = svm.predict([0,0]);
const negativeResult = svm.predict([50,50]);


```
#### Svm arguments : 
- `dataset`: **type: IDataset** Interface can be found in lib/types/dataset_type.ts or see example below. 
- `c`: **type: number** c parameter for soft margin classification. 
- `kernel`: **type: string** Only 'RBF' kernel is supported yet. 
- *OPTIONAL* `rbfSigma`: **type: number** variance. Default value = 15  . 

#### DatasetGenerator arguments : 
- `shape`: **type: string** Overall shape of dataset (CIRCULAR, LINEAR, XOR). 
- `total`: **type: number** Total amount of data pairs (1 and -1 output). 
- *OPTIONAL* `dimension`: **type: number** dataset dimension default is 2 dim. 

Note: Dataset boundaries are fixed. This should be fixed at some point..


#### Example dataset : 

```typescript
const circularDataset = {
  points: [
    [ 77.08537142627756, 60.7455136985482 ],
    [ 54.94324221651883, 63.78584077042318 ],
    [ 45.124087171506936, 80.97650097253724 ],
    [ 62.00480777917741, 49.642444449970675 ],
    [ 56.958382663885864, 81.27710664286386 ],
    [ 52.72767259658451, 66.03517399586579 ],
    [ 19.518515661340157, 35.12014495118882 ],
    [ 58.87894639269981, 59.27927960679746 ],
    [ 13.59822313333904, 61.66342807818599 ],
    [ 37.01348768362775, 54.679365456721584 ],
    [ 85.01654232561876, 46.57532675823407 ],
    [ 34.70627848361286, 44.84248665899513 ],
    [ 63.443893468418494, 74.07028656564599 ],
    [ 61.456705623249455, 41.09439124577563 ],
    [ 84.26782294646438, 26.269714017498337 ],
    [ 37.44407046741475, 50.98956479733988 ],
    [ 37.53801531593166, 79.73505569185346 ],
    [ 61.308207468398585, 44.41090753575729 ],
    [ 49.57073028314457, 5.715350047914129 ],
    [ 63.640430592148775, 39.56876863124383 ]
  ],
  labels: [
     1, -1,  1, -1,  1, -1,  1,
    -1,  1, -1,  1, -1,  1, -1,
     1, -1,  1, -1,  1, -1
  ]
}
```

## NPM custom commands

- `build`: Build the JavaScript files. 
- `build:watch`: Build the JavaScript files in watch mode. 
- `test`: Run jest in test mode.
- `test:watch`: Run jest in interactive test mode.
- `docs`: Generate the docs directory.
- `lint`: Runs linter on the whole project.


## Other/Optional considerations

The model converges, however it is a simplified version of the sequential minimum optimisation algorithm published by John C.Platt.

Please follow the links below for more informations on the model.

-   https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/tr-98-14.pdf
-   http://cs229.stanford.edu/materials/smo.pdf

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 

*Bastien GUIHARD*