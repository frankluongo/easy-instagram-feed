# Easy Instagram Feed

This NPM Plugin allows you to easily embed your Instagram Feed without too much overhead.

## Quick Setup

```javascript
import EasyInstaFeed from "easy-instagram-feed";

EasyInstaFeed(feedUrl, instaUrl);
```

## The Deets

- `EasyInstaFeed` looks for an element with a `data-instagram-feed` attribute on it to place photos in.
- The first url is the one it pulls the photos from
- The second url is the one for the instagram you want to link to

## Getting the Photos Url

- Visit the Instagram page you want to pull photos from with the developer tools open to network tab
- Grab the Url from the `XHR` Tab that looks something like this (it will be Url Encoded):

```txt
https://www.instagram.com/graphql/query/?query_hash=<UNIQUE_HASH_HERE>&variables={"id":"<USER_ID>","first":<NUMBER_OF_POSTS_TO_SHOW>}
```

- Take that Url, and use it as the first argument in the function
