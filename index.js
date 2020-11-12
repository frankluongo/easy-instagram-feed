const PHOTOS = "photos";
const TIME = "currentTime";
const HOUR = 3600000;

async function EasyInstaFeed(feedUrl) {
  const now = Date.now();
  const photos = JSON.parse(localStorage.getItem(PHOTOS));
  const currentTime = getCurrentTime();
  const hasBeenAnHour = now - currentTime >= HOUR;
  const needsToFetch = !photos || hasBeenAnHour;

  const results = needsToFetch ? await buildInstagramFeed() : photos;
  return results;

  // Builder
  async function buildInstagramFeed() {
    const photos = await getPhotos();
    localStorage.setItem(PHOTOS, JSON.stringify(photos));
    localStorage.setItem(TIME, Date.now());
    return photos;
  }
  function cleanPhotosData(photos) {
    return photos.user.edge_owner_to_timeline_media.edges;
  }
  // Getters
  async function getPhotos() {
    const res = await fetch(feedUrl);
    const { data } = await res.json();
    return cleanPhotosData(data);
  }
  function getCurrentTime() {
    if (!localStorage.getItem(TIME)) {
      localStorage.setItem(TIME, Date.now());
    }
    return parseInt(localStorage.getItem(TIME));
  }
}

module.exports = EasyInstaFeed;
