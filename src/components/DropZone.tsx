"use client";

import { ChangeEvent, DragEvent } from "react";
import Image from 'next/image';

export type ImagePreview = {
  url: string;
  name: string;
};

export type DropZoneProps = {
  title: string;
  helper: string;
  preview: ImagePreview | null;
  onFileSelect: (file: File) => void;
  onRemove: () => void;
};

export default function DropZone({
  title,
  helper,
  preview,
  onFileSelect,
  onRemove,
}: DropZoneProps) {
  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0];
    if (file && file.type.startsWith("image/")) {
      onFileSelect(file);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      onFileSelect(file);
    }
    // allow selecting the same file twice
    event.target.value = "";
  };

  return (
    <div
      className={`group relative flex h-48 w-full flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed transition-colors ${
        preview
          ? "border-zinc-200 bg-white"
          : "border-zinc-200 bg-zinc-50 hover:border-zinc-400 hover:bg-zinc-100"
      }`}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      {preview ? (
        <>
          <Image
            src={preview.url}
            alt={preview.name || title}
            className="h-full w-full object-contain"
          />
          <input
            type="file"
            accept="image/*"
            className="absolute inset-0 h-full w-full cursor-pointer opacity-0 z-0"
            onChange={handleChange}
          />
          <button
            type="button"
            onClick={onRemove}
            className="absolute right-2 top-2 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-zinc-700 shadow-sm transition hover:bg-zinc-200"
            aria-label={`Remover ${title.toLowerCase()}`}
          >
            X
          </button>
        </>
      ) : (
        <>
          <input
            type="file"
            accept="image/*"
            className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
            onChange={handleChange}
          />
          <span className="text-sm font-semibold text-zinc-700">{title}</span>
          <span className="text-xs text-zinc-500">{helper}</span>
        </>
      )}
    </div>
  );
}
