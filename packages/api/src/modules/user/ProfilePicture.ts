import { Arg, Mutation, Resolver } from 'type-graphql';
import { GraphQLUpload } from 'graphql-upload';
import { createWriteStream } from 'fs';

import { Upload } from '../../types/Upload';

@Resolver()
export class ProfilePictureResolver {
  @Mutation(() => Boolean)
  async addProfilePicture(
    @Arg('picture', () => GraphQLUpload)
    { createReadStream, filename }: Upload,
  ): Promise<boolean> {
    return new Promise(async (res, rej) => {
      createReadStream()
        .pipe(createWriteStream(`${__dirname}/../../images/${filename}`))
        .on('finish', () => res(true))
        .on('error', () => rej(false));
    });
  }
}
