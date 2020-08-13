const PHOTOS = "photos";
const TIME = "currentTime";
const HOUR = 3600000;

function EasyInstaFeed(feedUrl, instaUrl) {
  const instaFeed = document.querySelector("[data-instagram-feed]");
  if (!instaFeed) return;
  const now = Date.now();
  const photos = JSON.parse(localStorage.getItem(PHOTOS));
  const currentTime = getCurrentTime();
  const hasBeenAnHour = now - currentTime >= HOUR;
  if (!photos || hasBeenAnHour) {
    buildInstagramFeed();
  } else {
    addPhotos();
  }
  // Builder
  async function buildInstagramFeed() {
    const photos = await getPhotos();
    localStorage.setItem(PHOTOS, JSON.stringify(photos));
    localStorage.setItem(TIME, Date.now());
    addPhotos(photos);
  }
  // Actions
  function addPhotos(photos) {
    photos.forEach(addPhoto);
  }
  function addPhoto(photo) {
    instaFeed.innerHTML += `
      <a
        class="instagram-feed-item"
        style="background-image: url(${photo.node.thumbnail_src})"
        href="${instaUrl}"
        target="_blank" rel="noopener noreferrer"
      ></a>
    `;
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
