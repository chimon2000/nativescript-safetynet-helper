# NativeScript SafetyNet Helper

A [NativeScript](https://nativescript.org/) module for checking device integrity using the [SafetyNet API](https://developer.android.com/training/safetynet/index.html). It uses the [SafetyNet Helper](https://github.com/scottyab/safetynethelper) library

## Installation
From the command prompt go to your app's root folder and execute:
```
tns plugin add nativescript-safetynet-helper
```

## Usage

Here are the supported functions:

### function: requestTest
JavaScript

```js
let SafetyNetHelper = require('nativescript-safetynet-helper').SafetyNetHelper

let helper = new SafetyNetHelper(this._apiKey)

helper.requestTest((err, result) => {
    if (err) {
        console.log(err)
        this.updateMessage(err);
        return
    }

    console.log(`Basic Integrity - ${result.basicIntegrity}, CTS Profile Match - ${result.ctsProfileMatch}`)
});
```
TypeScript

```ts
import { SafetyNetHelper } from 'nativescript-safetynet-helper';

let helper = new SafetyNetHelper(this._apiKey)

helper.requestTest((err, result) => {
    if (err) {
        console.log(err)
        this.updateMessage(err);
        return
    }

    console.log(`Basic Integrity - ${result.basicIntegrity}, CTS Profile Match - ${result.ctsProfileMatch}`)
});
```

### Thanks

[Scott Alexander-Bown](https://github.com/scottyab) for his contributions to [SafetyNet Helper](https://github.com/scottyab/safetynethelper)