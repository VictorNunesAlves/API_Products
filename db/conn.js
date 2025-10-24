const { Sequelize } = require('sequelize');

// Estas variaveis deveriam estar ocultas em variaveis de ambiente, e somente serem inseridas no deploy.
// Mas para fins de estudo e simplicidade do projeto, estao hardcoded aqui.

const sequelize = new Sequelize(
  'railway',                          
  'root',                             
  'MsggyXkgZkWtbdQOutfCjtGEnIjEUZko', 
  {
    host: 'metro.proxy.rlwy.net',     
    port: 38872,                      
    dialect: 'mysql' 
  }
);

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados realizada com sucesso!');
  } catch (error) {
    console.log(`Não foi possível conectar ao banco de dados: ${error}`);
  }
})();

module.exports = sequelize;