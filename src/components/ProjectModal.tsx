import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export type ProjectForModal = {
  title: string;
  tech: string[];
  description: string;
  driveFolderId: string;
  coverImage: string;
  /** Image paths (e.g. from /public) or Drive file IDs for carousel. */
  imageIds: string[];
};

type Props = {
  project: ProjectForModal | null;
  onClose: () => void;
};

function toImageUrl(idOrUrl: string): string {
  if (idOrUrl.startsWith("http") || idOrUrl.startsWith("/")) return idOrUrl;
  return `https://drive.google.com/uc?export=view&id=${idOrUrl}`;
}

export default function ProjectModal({ project, onClose }: Props) {
  const [index, setIndex] = useState(0);

  const images = project
    ? project.imageIds.length > 0
      ? project.imageIds.map(toImageUrl)
      : [project.coverImage]
    : [];
  const hasMultiple = images.length > 1;

  const goPrev = useCallback(() => {
    setIndex((i) => (i <= 0 ? images.length - 1 : i - 1));
  }, [images.length]);

  const goNext = useCallback(() => {
    setIndex((i) => (i >= images.length - 1 ? 0 : i + 1));
  }, [images.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!project) return;
      if (e.key === "Escape") onClose();
      if (hasMultiple && e.key === "ArrowLeft") goPrev();
      if (hasMultiple && e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [project, onClose, hasMultiple, goPrev, goNext]);

  if (!project) return null;

  const fallbackImage = project.coverImage;

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[150] flex items-center justify-center p-4"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
            className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 z-10 rounded-full border border-white/20 bg-black/50 p-2 text-white transition hover:bg-white/10"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            {/* Image carousel */}
            <div className="relative aspect-video w-full shrink-0 bg-black">
              <AnimatePresence mode="wait" initial={false}>
                <motion.img
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  src={images[index] ?? fallbackImage}
                  alt={`${project.title} ${index + 1}`}
                  className="h-full w-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = fallbackImage;
                  }}
                />
              </AnimatePresence>
              {hasMultiple && (
                <>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      goPrev();
                    }}
                    className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/50 p-2 text-white transition hover:bg-white/20"
                    aria-label="Previous"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      goNext();
                    }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/50 p-2 text-white transition hover:bg-white/20"
                    aria-label="Next"
                  >
                    <ChevronRight size={24} />
                  </button>
                  <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setIndex(i);
                        }}
                        className={`h-2 rounded-full transition ${
                          i === index ? "w-6 bg-red-500" : "w-2 bg-white/40 hover:bg-white/60"
                        }`}
                        aria-label={`Slide ${i + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Project description */}
            <div className="flex-1 overflow-y-auto p-6">
              <h3 className="font-heading text-2xl font-bold text-white">{project.title}</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/20 bg-white/5 px-3 py-1 font-mono text-xs text-white/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className="mt-4 leading-relaxed text-white/85">{project.description}</p>
              <a
                href={`https://drive.google.com/drive/folders/${project.driveFolderId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block text-sm text-red-400 underline hover:text-red-300"
              >
                Open folder in Google Drive
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
