import Sequelize from 'sequelize';

const sequelize = new Sequelize('postgresql://eduarda:xPcK02U_W-TXPq3jL9QJqg@lean-pup-1704.jxf.gcp-southamerica-east1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full', {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  
  logging: false
});

export default sequelize;
