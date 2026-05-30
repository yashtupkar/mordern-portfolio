function getLinkedInEmbedId(url) {
  if (!url) return null;

  const cleanedUrl = url.split("?")[0].trim();

  // If the URL already contains a LinkedIn URN embed path, return it directly.
  const urnMatch = cleanedUrl.match(/urn:li:(share|activity):\d+/);
  if (urnMatch) {
    return urnMatch[0];
  }

  const pathPart = cleanedUrl.split("/").pop();
  const numericMatch = pathPart.match(/(\d{9,})/);
  if (numericMatch) {
    return `urn:li:activity:${numericMatch[1]}`;
  }

  return null;
}

export default function LinkedInPostCard({ award }) {
  if (!award.linkedInPost) {
    return null;
  }

  const { url, image, caption, excerpt } = award.linkedInPost;
  const embedId = getLinkedInEmbedId(url);
  const embedSrc = embedId
    ? `https://www.linkedin.com/embed/feed/update/${embedId}`
    : null;

  return (
    <>
      {/* Desktop: LinkedIn Embed */}
      {embedSrc ? (
        <div className="hidden md:block">
          <iframe
            src={embedSrc}
            height="900px"
            width="100%"
            frameBorder="0"
            allowFullScreen
            title={`LinkedIn post - ${award.company}`}
            className="rounded-2xl"
          ></iframe>
        </div>
      ) : null}

      {/* Mobile / fallback: Custom Card with Link */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`${embedSrc ? "md:hidden" : ""} group block bg-white/3 border border-white/5 rounded-2xl overflow-hidden hover:border-custom-accent/30 transition-all duration-300 hover:bg-white/5`}
      >
        {image && (
          <div className="relative h-48 overflow-hidden">
            <img
              src={image}
              alt={caption || award.company}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"></div>
          </div>
        )}

        <div className="p-4 sm:p-6">
          <div className="flex items-start justify-between gap-3 mb-3">
            <div>
              <h4 className="font-heading text-sm font-bold text-custom-accent mb-1">
                {award.company}
              </h4>
              <span className="inline-block text-xs font-bold text-white/60 tracking-wider">
                {award.date}
              </span>
            </div>
            <svg
              className="w-5 h-5 text-custom-accent group-hover:text-custom-accent/80 transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.736 0-9.637h3.554v1.36c.425-.654 1.185-1.586 2.882-1.586 2.105 0 3.685 1.375 3.685 4.331v5.532zM5.337 5.129c-1.144 0-1.915-.759-1.915-1.71 0-.954.771-1.71 1.954-1.71 1.184 0 1.915.756 1.915 1.71 0 .951-.731 1.71-1.954 1.71zm1.581 15.323H3.714V8.815h3.204v11.637zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
            </svg>
          </div>

          {caption && (
            <p className="text-sm font-semibold text-custom-main mb-2 line-clamp-2">
              {caption}
            </p>
          )}

          {excerpt && (
            <p className="text-xs text-custom-muted line-clamp-3 mb-3">
              {excerpt}
            </p>
          )}

          <div className="flex items-center gap-2 text-xs font-semibold text-custom-accent">
            View on LinkedIn
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </a>
    </>
  );
}
