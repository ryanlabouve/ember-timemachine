# Ember-timemachine

Ready to hunt down those pesky date / time specific bugs?

This is an ember addon that wraps
[https://github.com/schickling/timemachine](https://github.com/schickling/timemachine)
in a way that doesn't make your app party like it's 1969.

## How to party like it's 1969

Install ember-timemachine:

`ember install ember-timemachine`

Use it:

```
import timemachine from 'timemachine';

timemachine.config({
  dateString: 'December 25, 1969 13:12:59'
});

console.log(new Date());
```

and stop partying when you want with:

`timemachine.reset();`



## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember serve`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
