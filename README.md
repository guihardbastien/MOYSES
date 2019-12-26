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


### Feature description

TBA

### How to build the library to be used in production-ready projects?

TBA

### How to use?

TBA

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