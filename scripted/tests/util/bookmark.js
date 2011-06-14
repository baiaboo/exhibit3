module("Exhibit.Bookmark");

test("generateBookmarkHash", function() {
    expect(8);

    equal(Exhibit.Bookmark.generateBookmarkHash(), '', 'Hash of empty argument');
    equal(Exhibit.Bookmark.generateBookmarkHash(undefined), '', 'Hash of undefined argument');
    equal(Exhibit.Bookmark.generateBookmarkHash(null), '', 'Hash of null argument');
    equal(Exhibit.Bookmark.generateBookmarkHash({}), '', 'Hash of dataless state');
    equal(Exhibit.Bookmark.generateBookmarkHash({data: null}), '', 'Hash of null data state');
    equal(Exhibit.Bookmark.generateBookmarkHash({data: {state: undefined}}), '', 'Hash of undefined state data');
    equal(Exhibit.Bookmark.generateBookmarkHash({data: {state: {}}}), 'eyJkYXRhIjp7InN0YXRlIjp7fX19', 'Hash of basic state object');
    equal(Exhibit.Bookmark.generateBookmarkHash({data: {state: {a: '\u00FF'}}}), 'eyJkYXRhIjp7InN0YXRlIjp7ImEiOiL_In19fQ==', 'Hash with no slashes despite normal base64 encoding');
});

test("interpretBookmarkHash", function() {
    expect(2);

    raises(function(){Exhibit.Bookmark.interpretBookmarkHash('');}, 'Empty hash raises parse error');
    deepEqual(Exhibit.Bookmark.interpretBookmarkHash('e30='), {}, 'Empty object hash');
});

test("generateBookmark", function() {
    //expect();

    //Exhibit.Bookmark.generateBookmark()
});

test("implementBookmark", function() {
    //expect();

    //Exhibit.Bookmark.implementBookmark()
});

/**
test("init", function() {
    // This wouldn't be so much a functional test as an integration test -
    // it runs implementBookmark when the page loads to interpret the current
    // location's bookmark.  This isn't really possible in this testing
    // infrastructure, QUnit is more functional than integration oriented.

    // Perhaps this will be folded into page initialization testing down
    // the road.
});
*/
