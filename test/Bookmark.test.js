const Bookmark = artifacts.require('Bookmark')
const assert = require('assert')

contract('Bookmark', accounts => {
  const MeMyselfAndI = {
    title: 'Me, Myself & I',
    img: 'http://static.tvmaze.com/uploads/images/original_untouched/127/319519.jpg'
  }
  const TheGifted = {
    title: 'The Gifted',
    img: 'http://static.tvmaze.com/uploads/images/original_untouched/121/303442.jpg'
  }

  it('should get Bookmark when blockchain has one show', async () => {
    const instance = await Bookmark.deployed()
    instance.setBookmark(JSON.stringify(MeMyselfAndI), {from: accounts[0]})
    const bookmark = await instance.getBookmarks.call()
    assert.equal(bookmark, JSON.stringify(MeMyselfAndI))
  })

  it('should get Bookmarks when blockchain has few shows', async () => {
    const instance = await Bookmark.deployed()
    instance.setBookmark(JSON.stringify([MeMyselfAndI, TheGifted]), {from: accounts[0]})
    const bookmark = await instance.getBookmarks.call()
    assert.equal(bookmark, JSON.stringify([MeMyselfAndI, TheGifted]))   
  })
})