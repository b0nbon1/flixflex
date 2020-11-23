import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class IUploadResult {
  @Field(() => String)
  upload: string;
}
