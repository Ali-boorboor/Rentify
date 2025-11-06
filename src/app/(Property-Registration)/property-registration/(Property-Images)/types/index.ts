interface UploadedImage {
  preview: string | null;
  file: File | null;
}

interface FormValues {
  uploadedImages: UploadedImage[];
}

export type { UploadedImage, FormValues };
