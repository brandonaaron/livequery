# Live Query

Live Query has been rewritten in version 2 to utilize DOM Mutation Observers or fallback to DOM Mutation Events. This covers a nice range of modern browsers and IE9 up. If you need to support less than IE9 then it will fallback to using behaviors to be notified of added and removed elements. This requires setting the `$.livequery.htcPath` so that it can load the included behavior file.

In the rewrite the event binding functionality has been removed since jQuery provides really nice event delegation. It now only supports passing in a matched and an optional unmatched function handler. These handlers are fired only when elements are added or removed from the DOM. This is slightly different from the original Live Query in that it would also monitor for slightly smaller changes that might make an element no longer match, such as a class name change.

Here is an example of how to use Live Query.

    $('li')
        .livequery(function(){
            // this = the li element just added to the DOM
        }, function() {
            // this = the li element just removed from the DOM or the live query was expired
        });

## API

### `livequery`

    // matchedFn: the function to execute when a new element is added to the DOM that matches
    $(selector).livequery( matchedFn );

    // matchedFn: the function to execute when a new element is added to the DOM that matches
    // unmatchedFn: the function to execute when a previously matched element is removed from the DOM
    $(selector).livequery( matchedFn, unmatchFn );

### `expire`

The first way will stop/expire all live queries associated with the selector.

    // Stop/expire all live queries associated with the selector
    $(selector).expire();

    // Stop/expire all live queries associated with the selector and matchedFn
    $(selector).expire( matchedFn );

    // Stop/expire all live queries associated with the selector, matchedFn, and unmatchedFn
    $(selector).expire( matchedFn, unmatchFn );

## License

The Live Query plugin is licensed under the MIT License (LICENSE.txt).

Copyright (c) 2013 [Brandon Aaron](http://brandonaaron.net)
