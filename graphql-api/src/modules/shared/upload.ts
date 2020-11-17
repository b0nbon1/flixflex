import fs from 'fs';
import { GraphQLUpload, FileUpload } from 'graphql-upload';
import { Resolver, Mutation, Arg, Ctx } from 'type-graphql';
import objectId from '../../utils/objectId';
import { IUploadResult } from '../../types/Upload';
import { Context } from '../../types/Context';

@Resolver()
export class FileResolver {
  @Mutation(() => IUploadResult)
  async fileUpload(
    @Arg('fileInput', () => GraphQLUpload) fileInput: FileUpload,
    @Ctx() { req }: Context
  ): Promise<IUploadResult> {
    const { createReadStream, filename } = fileInput;

    const fileName = `${objectId()}-${filename}`;

    const writableStream = fs.createWriteStream(`./files/${fileName}`, {
      autoClose: true
    });

    const result = await new Promise<string>((resolve, reject) => {
      createReadStream()
        .pipe(writableStream)
        .on('error', (error: any) => {
          reject(error);
        })
        .on('finish', () => {
          const fullUrl = `${req.protocol}://${req.get('host')}`;
          resolve(`${fullUrl}/static/${fileName}`);
        });
    });
    return {
      upload: result
    };
  }
}
