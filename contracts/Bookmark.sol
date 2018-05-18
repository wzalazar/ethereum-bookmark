pragma solidity ^0.4.4;

contract Bookmark {
    mapping (address => string) private bookmarks;
    address public owner;

    function constuctor() public {
        owner = msg.sender;
    }

    function setBookmark(string show) public returns (string) {
        bookmarks[msg.sender] = show;        
        return bookmarks[msg.sender];
    }

    function getBookmarks() public constant returns (string) {
        return bookmarks[msg.sender];
    } 
}