import { Prisma } from 'src/generated/prisma';

export type UploadedImageFile = {
  buffer: Buffer;
  originalname: string;
  mimetype: string;
  size: number;
};

export type PropertyMediaItem = Prisma.PropertyMediaGetPayload<{
  select: {
    id: true;
    propertyId: true;
    mediaType: true;
    visibility: true;
    url: true;
    publicId: true;
    isPrimary: true;
    sortOrder: true;
    createdAt: true;
  };
}>;
