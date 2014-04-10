# Live Query ChangeLog

## 2.0.0-pre

* Rewritten to use mutation observers, with a fallback to mutation events, with a fallback to behaviors for IE < 9
* Now takes in the selector as an argument instead of trying to infer it from the jQuery object
* No longer handles event binding, use `.on('event', 'selector'...` for event delegation
* No longer dual licensed, licensed under the MIT License (LICENSE.txt) only now

## 1.1.1

* Compatibility fix with 1.4.1 (thanks)
* Updated README

## 1.1

* Updated to better integrate with jQuery 1.3 (no longer supports jQuery < 1.3)

## 1.0.3

* LiveQueries are run as soon as they are created to avoid potential flash of content issues

## 1.0.2

* Updated to work with jQuery 1.2.2

## 1.0.1

* Added removeAttr, toggleClass, emtpy and remove to the list of registered core DOM manipulation methods
* Removed setInterval in favor of on-demand setTimeout
* Calling livequery with the same arguments (function references), restarts the existing Live Query instead of creating a new one
