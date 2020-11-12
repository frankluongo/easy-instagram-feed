# !!!!MAJOR BREAKING CHANGE IN VERSION 2.0.0!!!!

As of a verison 2.0.0, this plugin will no longer return markup. It will only return the raw photos. You can then handle that data however you'd like.

## Easy Instagram Feed

This NPM Plugin allows you to easily embed your Instagram Feed without too much overhead.

### Quick Setup

```javascript
import EasyInstaFeed from "easy-instagram-feed";

EasyInstaFeed(feedUrl);
```

### The Deets

- The `feedUrl` is where the photos comes from

## Getting the Photos Url

- Visit the Instagram page you want to pull photos from with the developer tools open to network tab
- Grab the Url from the `XHR` Tab that looks something like this (it will be Url Encoded):

```txt
https://www.instagram.com/graphql/query/?query_hash=<UNIQUE_HASH_HERE>&variables={"id":"<USER_ID>","first":<NUMBER_OF_POSTS_TO_SHOW>}
```
