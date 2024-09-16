export default () => ({
  database: {
    autoLoadEntities: true,
    type: process.env.DB_TYPE,
    url: process.env.DB_URL || null,
    database: process.env.DB_NAME || null,
    synchronize: process.env.DB_SYNC || false,
    logging: process.env.DB_LOGGING === 'true',
    host: process.env.DB_HOST || null,
    port: process.env.DB_PORT || null,
    username: process.env.DB_USERNAME || null,
    password: process.env.DB_PASSWORD || null,
    ssl: process.env.DB_SSL || false,
    useUnifiedTopology: process.env.DB_UNIFIED_TOPOLOGY || false,
    // entities: [`${__dirname}/**/*.entity{.ts,.js}`],
  },
});
