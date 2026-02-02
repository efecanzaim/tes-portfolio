"use client";

import { useState, useRef, useCallback, useEffect, forwardRef } from "react";
import { motion } from "framer-motion";
import { Document, Page, pdfjs } from "react-pdf";
import HTMLFlipBook from "react-pageflip";
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Maximize2, Minimize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface BookFlipViewerProps {
  pdfUrl: string;
  totalPages?: number;
}

interface PageCoverProps {
  children: React.ReactNode;
  pageNumber: number;
}

// ForwardRef wrapper for HTMLFlipBook pages
const PageCover = forwardRef<HTMLDivElement, PageCoverProps>(({ children, pageNumber }, ref) => {
  return (
    <div ref={ref} className="bg-white shadow-lg" data-density="hard">
      {children}
    </div>
  );
});
PageCover.displayName = "PageCover";

interface FlipPageProps {
  pageNumber: number;
  width: number;
  height: number;
}

const FlipPage = forwardRef<HTMLDivElement, FlipPageProps>(({ pageNumber, width, height }, ref) => {
  return (
    <div ref={ref} className="bg-white" style={{ width, height }}>
      <Page
        pageNumber={pageNumber}
        width={width}
        renderTextLayer={false}
        renderAnnotationLayer={false}
        className="[&>canvas]:!w-full [&>canvas]:!h-auto"
      />
    </div>
  );
});
FlipPage.displayName = "FlipPage";

export function BookFlipViewer({ pdfUrl, totalPages = 10 }: BookFlipViewerProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [scale, setScale] = useState(1.0);
  const [isLoading, setIsLoading] = useState(true);
  const [containerSize, setContainerSize] = useState({ width: 800, height: 600 });
  const bookRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<HTMLDivElement>(null);

  // Calculate page dimensions
  const pageWidth = Math.round(Math.min(containerSize.width * 0.45, 500) * scale);
  const pageHeight = Math.round(pageWidth * 1.414);

  // Update container size
  useEffect(() => {
    const updateSize = () => {
      if (viewerRef.current) {
        setContainerSize({
          width: viewerRef.current.offsetWidth,
          height: viewerRef.current.offsetHeight
        });
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, [isFullscreen]);

  const onDocumentLoadSuccess = useCallback(({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setIsLoading(false);
  }, []);

  const onFlip = useCallback((e: any) => {
    setCurrentPage(e.data);
  }, []);

  const goToPrevPage = () => {
    bookRef.current?.pageFlip()?.flipPrev();
  };

  const goToNextPage = () => {
    bookRef.current?.pageFlip()?.flipNext();
  };

  const toggleFullscreen = async () => {
    try {
      if (!isFullscreen && containerRef.current) {
        await containerRef.current.requestFullscreen();
      } else if (document.fullscreenElement) {
        await document.exitFullscreen();
      }
    } catch (err) {
      console.error("Fullscreen error:", err);
    }
  };

  // Fullscreen change listener
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 0.2, 1.8));
  };

  const handleZoomOut = () => {
    setScale((prev) => Math.max(prev - 0.2, 0.6));
  };

  return (
    <div
      ref={containerRef}
      className={`relative rounded-2xl ${
        isFullscreen
          ? "bg-neutral-900 flex flex-col h-screen w-screen"
          : "bg-secondary/20 p-4"
      }`}
    >
      {/* Controls */}
      <div className={`flex flex-wrap items-center justify-between gap-4 z-20 ${
        isFullscreen ? "p-4 bg-black/50" : "mb-4"
      }`}>
        <div className="flex items-center gap-2">
          <Button
            variant={isFullscreen ? "secondary" : "outline"}
            size="icon"
            onClick={goToPrevPage}
            disabled={currentPage <= 0}
            className="h-9 w-9"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <span className={`text-sm px-3 whitespace-nowrap ${isFullscreen ? "text-white" : "text-muted-foreground"}`}>
            {currentPage + 1} / {numPages || totalPages}
          </span>
          <Button
            variant={isFullscreen ? "secondary" : "outline"}
            size="icon"
            onClick={goToNextPage}
            disabled={currentPage >= (numPages || totalPages) - 1}
            className="h-9 w-9"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant={isFullscreen ? "secondary" : "outline"}
            size="icon"
            onClick={handleZoomOut}
            className="h-9 w-9"
            disabled={scale <= 0.6}
          >
            <ZoomOut className="w-4 h-4" />
          </Button>
          <span className={`text-sm w-14 text-center ${isFullscreen ? "text-white" : "text-muted-foreground"}`}>
            {Math.round(scale * 100)}%
          </span>
          <Button
            variant={isFullscreen ? "secondary" : "outline"}
            size="icon"
            onClick={handleZoomIn}
            className="h-9 w-9"
            disabled={scale >= 1.8}
          >
            <ZoomIn className="w-4 h-4" />
          </Button>
          <Button
            variant={isFullscreen ? "secondary" : "outline"}
            size="icon"
            onClick={toggleFullscreen}
            className="h-9 w-9"
          >
            {isFullscreen ? (
              <Minimize2 className="w-4 h-4" />
            ) : (
              <Maximize2 className="w-4 h-4" />
            )}
          </Button>
        </div>
      </div>

      {/* Book Viewer */}
      <div
        ref={viewerRef}
        className={`flex justify-center items-center overflow-hidden ${
          isFullscreen ? "flex-1" : ""
        }`}
        style={{
          minHeight: isFullscreen ? "auto" : pageHeight + 40,
        }}
      >
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/80 z-10 rounded-2xl">
            <div className="flex flex-col items-center gap-4">
              <motion.div
                className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <p className="text-muted-foreground">PDF yükleniyor...</p>
            </div>
          </div>
        )}

        <Document
          file={pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={(error) => console.error("PDF load error:", error)}
          loading={null}
          error={
            <div className="text-center p-8">
              <p className="text-muted-foreground mb-4">PDF yüklenirken bir hata oluştu.</p>
              <p className="text-sm text-muted-foreground">Dosya: {pdfUrl}</p>
            </div>
          }
        >
          {numPages > 0 && (
            // @ts-ignore - HTMLFlipBook types issue
            <HTMLFlipBook
              ref={bookRef}
              width={pageWidth}
              height={pageHeight}
              size="fixed"
              minWidth={pageWidth}
              maxWidth={pageWidth}
              minHeight={pageHeight}
              maxHeight={pageHeight}
              maxShadowOpacity={0.5}
              showCover={false}
              mobileScrollSupport={true}
              onFlip={onFlip}
              className="shadow-2xl"
              style={{}}
              startPage={0}
              drawShadow={true}
              flippingTime={800}
              usePortrait={true}
              startZIndex={0}
              autoSize={false}
              clickEventForward={true}
              useMouseEvents={true}
              swipeDistance={30}
              showPageCorners={true}
              disableFlipByClick={false}
            >
              {Array.from({ length: numPages }, (_, index) => (
                <FlipPage
                  key={index}
                  pageNumber={index + 1}
                  width={pageWidth}
                  height={pageHeight}
                />
              ))}
            </HTMLFlipBook>
          )}
        </Document>
      </div>

      {/* Page dots */}
      {numPages > 0 && numPages <= 15 && (
        <div className={`flex justify-center gap-1.5 flex-wrap ${isFullscreen ? "p-3 bg-black/50" : "mt-4"}`}>
          {Array.from({ length: numPages }, (_, index) => (
            <button
              key={index}
              onClick={() => bookRef.current?.pageFlip()?.turnToPage(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === currentPage
                  ? "bg-primary scale-125"
                  : isFullscreen
                    ? "bg-white/40 hover:bg-white/60"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Sayfa ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Hint */}
      {!isFullscreen && (
        <p className="text-center text-xs text-muted-foreground mt-3">
          Sayfaları çevirmek için kenarlarına tıklayın veya sürükleyin
        </p>
      )}
    </div>
  );
}
