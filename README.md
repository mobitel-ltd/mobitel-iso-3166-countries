# Mobitel Ltd. ISO-3166 Countries
NodeJs module based on ISO-3166 for validate and get basic info by country

## Attention
This module writing and testing on **NodeJs v.8+** and **NPM v.5+**.
Using the module in previous versions of NodeJs does not guarantee correct works.

## <a name="navigation">Navigation</a>

* [Installation](#installation)
* [Example](#example)
* [API](#api)
    * [.list](#list)
    * [.validate()](#validate)
    * [.get()](#get)
* [Testing](#testing)
* [License](#license)

## <a name="installation">Installation</a>

```
npm i --save mobitel-iso-3166-countries
```
[<p align="right">up to navigation</p>](#navigation)

## <a name="example">Example</a>

```javascript
const isoCountries = required('mobitel-iso-3166-countries');

// validate
const valid2 = isoCountries.validate('AF'); //=> true
const valid3 = isoCountries.validate('AFG'); //=> true
const validNum = isoCountries.validate('004'); //=> true
const invalid2 = isoCountries.validate('ZY'); //=> false
const invalid3 = isoCountries.validate('ZYX'); //=> false
const invalidNum = isoCountries.validate('000'); //=> false

// get data
const data2 = isoCountries.get('AF'); //=> {country: 'Afghanistan', alpha2: 'AF', alpha3: 'AFG', numeric: '004'}
const data3 = isoCountries.get('AFG'); //=> {country: 'Afghanistan', alpha2: 'AF', alpha3: 'AFG', numeric: '004'}
const dataNum = isoCountries.get('004'); //=> {country: 'Afghanistan', alpha2: 'AF', alpha3: 'AFG', numeric: '004'}
const noData2 = isoCountries.get('ZY'); //=> null
const noData3 = isoCountries.get('ZYX'); //=> null
const noDataNum = isoCountries.get('000'); //=> null
```
[<p align="right">up to navigation</p>](#navigation)

## <a name="api">API</a>

### <a name="list">.list</a>
Property - `{country: String, alpha2: String, alpha3: String, numeric: String}[]` - contains full countries list.

Example
```javascript
const list = isoCountries.list; //=> objects list 
```
[<p align="right">up to navigation</p>](#navigation)

### <a name="validate">.validate(code)</a>
Argument - `String` - country code like `'AF'`(alpha2), `'AFG'`(alpha3) or `'004'`(numeric).

If code exist return `true`, otherwise `false`.

Example
```javascript
const valid2 = isoCountries.validate('AF'); //=> true
const valid3 = isoCountries.validate('AFG'); //=> true
const validNum = isoCountries.validate('004'); //=> true
const invalid2 = isoCountries.validate('ZY'); //=> false
const invalid3 = isoCountries.validate('ZYX'); //=> false
const invalidNum = isoCountries.validate('000'); //=> false
```
[<p align="right">up to navigation</p>](#navigation)

### <a name="get">.get(code)</a>
Argument - `String` - country code like `'AF'`(alpha2), `'AFG'`(alpha3) or `'004'`(numeric).

If code exist return object with simple country data like 
`{country: 'Afghanistan', alpha2: 'AF', alpha3: 'AFG', numeric: '004'}`, otherwise `null`.

Example
```javascript
const data2 = isoCountries.get('AF'); //=> {country: 'Afghanistan', alpha2: 'AF', alpha3: 'AFG', numeric: '004'}
const data3 = isoCountries.get('AFG'); //=> {country: 'Afghanistan', alpha2: 'AF', alpha3: 'AFG', numeric: '004'}
const dataNum = isoCountries.get('004'); //=> {country: 'Afghanistan', alpha2: 'AF', alpha3: 'AFG', numeric: '004'}
const noData2 = isoCountries.get('ZY'); //=> null
const noData3 = isoCountries.get('ZYX'); //=> null
const noDataNum = isoCountries.get('000'); //=> null
```
[<p align="right">up to navigation</p>](#navigation)

## <a name="testing">Test</a>

    npm run test
[<p align="right">up to navigation</p>](#navigation)

## <a name="testing">License</a>
MIT License.
Copyright (c) 2017 Mobitel Ltd
[<p align="right">up to navigation</p>](#navigation)
