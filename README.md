
[![GitHub issues](https://img.shields.io/github/issues/steven-r/yup-i18n-de)](https://github.com/steven-r/yup-i18n-de/issues) [![codecov](https://codecov.io/gh/steven-r/yup-i18n-de/branch/master/graph/badge.svg)](https://codecov.io/gh/steven-r/yup-i18n-de) 
[![Build-Status](https://travis-ci.com/steven-r/yup-i18n-de.svg?branch=master)](https://travis-ci.com/steven-r/yup-i18n-de.svg?branch=master)

# yup-i18n-de
German translation for yup validations

# Installing

* with npm

```
$ npm install @stephen-r/yup-i18n-de
```

* with yarn

```
$ yarn add @stephen-r/yup-i18n-de
```

# Usage

Use the following code to switch to German translation

```typescript
import { registerGermanYupLocale } from "@stephen-r/yup-i18n-de";

// ... some code
  registerGermanYupLocale();
// ... more code
```

## Additional Usage

There might be a need to change parts of the translations by yourself. This can be achived by changing the objects directly:

```typescript
import { registerGermanYupLocale, mixed } from "@stephen-r/yup-i18n-de";

// ... some code
  mixed.default = "Eine andere Meldung!";
  registerGermanYupLocale();
// ... more code
```

Be aware that changes before and after calling ``registerGermanYupLocale()`` are taken
into consideration.
