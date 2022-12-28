module.exports = ( { env } ) => {

    return {
      connection: {
        client: 'postgres',
        connection: {
          host: env( 'PGHOST', '127.0.0.1' ),
          port: env.int( 'PGPORT', 8076 ),
          database: env( 'PGDATABASE', 'postgres' ),
          user: env( 'PGUSER', 'strapi' ),
          password: env( 'PGPASSWORD', 'password' ),
          ssl: env.bool( true ),
        },
      },
    }
  // }
  // return {
  //   defaultConnection: 'default',
  //   connections: {
  //     default: {
  //       connector: 'bookshelf',
  //       settings: {
  //         client: 'sqlite',
  //         filename: env( 'DATABASE_FILENAME', '.tmp/data.db' ),
  //       },
  //       options: {
  //         useNullAsDefault: true,
  //       },
  //     },
  //   },
  // }
};
