import { v2 as cloudinary } from 'cloudinary';
import { Readable } from 'stream';

import { Injectable, InternalServerErrorException } from '@nestjs/common';

@Injectable()
export class CloudinaryService {
  constructor() {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
  }

  async uploadProtectedImage(fileBuffer: Buffer, folder: string): Promise<{ url: string; publicId: string }> {
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder,
          resource_type: 'image',
          type: 'authenticated',
        },
        (error, result) => {
          if (error || !result) {
            reject(new InternalServerErrorException('Failed to upload image'));
            return;
          }

          resolve({
            url: result.secure_url,
            publicId: result.public_id,
          });
        },
      );
      Readable.from(fileBuffer).pipe(uploadStream);
    });
  }

  async uploadPublicImage(fileBuffer: Buffer, folder: string): Promise<{ url: string; publicId: string }> {
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder,
          resource_type: 'image',
          type: 'upload',
        },
        (error, result) => {
          if (error || !result) {
            reject(new InternalServerErrorException('Failed to upload image'));
            return;
          }

          resolve({
            url: result.secure_url,
            publicId: result.public_id,
          });
        },
      );

      Readable.from(fileBuffer).pipe(uploadStream);
    });
  }

  getProtectedImageUrl(publicId: string): string {
    return cloudinary.url(publicId, {
      resource_type: 'image',
      type: 'authenticated',
      sign_url: true,
    });
  }

  async deleteImage(publicId: string): Promise<void> {
    const result = (await cloudinary.uploader.destroy(publicId, {
      resource_type: 'image',
    })) as { result: string };

    if (result.result !== 'ok' && result.result !== 'not found') {
      throw new InternalServerErrorException('Failed to delete image');
    }
  }
}
