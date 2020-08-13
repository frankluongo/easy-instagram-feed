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
