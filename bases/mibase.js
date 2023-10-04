import  Sequelize  from "sequelize";

const bd = new Sequelize('aprendices','root','root',{
    host: 'localhost',
    dialect: 'mysql'   
})

export default bd;