module("LiveQuery", {
  setup: function() {
    this.$target = $('<div class="container"><ol><li>One</li><li>Two</li></ol><div class="section"><p>Paragraph with a <a href="#">link</a></p></div>').appendTo('#qunit-fixture');
  },
  teardown: function() {
    this.$target.remove();
  }
});

test("Fires for existing matched elements", 4, function() {
  stop();
  var count = 2; // there are 2 existing li elements
  this.$target.livequery('li', $.proxy(function(elem) {
    ok( $(elem).is('li'), 'It is an li element' );
    ok( $(elem).closest('.container').length === 1, 'It does belong to the .container div' );
    if (--count === 0) {
      this.$target.expire('li');
      start();
    }
  }, this));
});

test("Fires for newly added matched elements (via jQuery)", 1, function() {
  stop();
  var $li = $('<li id="newli">New</li>');
  this.$target.livequery('li', $.proxy(function(elem) {
    if (elem.id === "newli") {
      ok( $(elem).is('li'), 'It is an li element' );
      this.$target.expire('li');
      start();
    }
  }, this));
  this.$target.find('ol').append($li);
});

test("Scope and first argument are the element", 2, function() {
  stop();
  var _this = this;
  this.$target.livequery('li', function(elem) {
    ok($(this).is('li'), 'Scope is the matched li element');
    equal(this, elem, 'Scope and element are the same');
    _this.$target.expire('li');
    start();
  })
});
