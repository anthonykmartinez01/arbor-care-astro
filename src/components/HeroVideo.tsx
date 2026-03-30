import { useEffect, useRef, useState } from "react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setShouldLoad(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!shouldLoad || !video) return;
    const webm = document.createElement("source");
    webm.src = "/hero-video.webm";
    webm.type = "video/webm";
    const mp4 = document.createElement("source");
    mp4.src = "/hero-video.mp4";
    mp4.type = "video/mp4";
    video.appendChild(webm);
    video.appendChild(mp4);
    video.load();
  }, [shouldLoad]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onPlaying = () => setIsLoaded(true);
    video.addEventListener("playing", onPlaying);
    return () => video.removeEventListener("playing", onPlaying);
  }, []);

  return (
    <>
      <img
        src="/hero-video-poster.png"
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-center"
        width="1600"
        height="900"
      />
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        poster="/hero-video-poster.png"
        className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </>
  );
}