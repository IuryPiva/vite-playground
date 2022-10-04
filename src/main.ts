const input = document.querySelector<HTMLInputElement>("#file")!;
const video = document.querySelector<HTMLVideoElement>("#video")!;

input.onchange = () => {
  const file = input.files?.item(0);

  if (file) loadVideoFile(file);
};

function loadVideoFile(file: File) {
  video.muted = true;
  video.autoplay = true;
  video.src = window.URL.createObjectURL(file);
  video.load();
  video.play();
}

export {};
