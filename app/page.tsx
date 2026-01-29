"use client";

import { useEffect, useState } from "react";

import DropZone, { type ImagePreview } from "@/components/DropZone";
import Header from "@/components/Header";

export default function Home() {
  const [imageOne, setImageOne] = useState<ImagePreview | null>(null);
  const [imageTwo, setImageTwo] = useState<ImagePreview | null>(null);

  const createPreview = (
    file: File,
    setter: (value: ImagePreview) => void,
    current?: ImagePreview | null,
  ) => {
    if (current?.url) {
      URL.revokeObjectURL(current.url);
    }
    setter({
      url: URL.createObjectURL(file),
      name: file.name,
    });
  };

  useEffect(() => {
    return () => {
      if (imageOne?.url) URL.revokeObjectURL(imageOne.url);
      if (imageTwo?.url) URL.revokeObjectURL(imageTwo.url);
    };
  }, [imageOne?.url, imageTwo?.url]);

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <div className="flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-[780px] min-h-[740px] rounded-3xl bg-white shadow-[0_24px_70px_-30px_rgba(0,0,0,0.35)] border border-zinc-100 p-10 flex flex-col gap-10">
          <div className="space-y-3">
            <h1 className="text-3xl font-semibold text-zinc-900">
              Combinar imagens
            </h1>
            <p className="text-base text-zinc-600">
              Arraste e solte ou selecione duas imagens para combinarmos em um
              unico resultado.
            </p>
          </div>

          <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2">
            <DropZone
              title="Primeira imagem"
              helper="Arraste & solte ou clique para buscar"
              preview={imageOne}
              onFileSelect={(file) => createPreview(file, setImageOne, imageOne)}
              onRemove={() => {
                if (imageOne?.url) URL.revokeObjectURL(imageOne.url);
                setImageOne(null);
              }}
            />

            <DropZone
              title="Segunda imagem"
              helper="Arraste & solte ou clique para buscar"
              preview={imageTwo}
              onFileSelect={(file) => createPreview(file, setImageTwo, imageTwo)}
              onRemove={() => {
                if (imageTwo?.url) URL.revokeObjectURL(imageTwo.url);
                setImageTwo(null);
              }}
            />
          </div>

          <div className="mt-auto">
            <button className="w-full h-14 rounded-xl bg-zinc-900 text-white font-semibold shadow-sm transition-colors hover:bg-zinc-800">
              Combinar imagens
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
