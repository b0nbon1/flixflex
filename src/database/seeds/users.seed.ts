import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { User } from '../../models/User';

export default class CreateUsers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(User)
      .values([
        {
          firstName: 'Timber',
          lastName: 'Saw',
          email: 'timber@gmail.com',
          password: 'pppp'
        }
      ])
      .execute();
  }
}
