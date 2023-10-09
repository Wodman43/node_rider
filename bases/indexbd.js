import datoscompe from "../models/model_compe.js";
import datoscursoints from "../models/model_cursoinst.js";
import datoscurso from "../models/model_cursos.js";
import datosEstudiates from "../models/model_estu.js";
import datosinstructor from "../models/model_instru.js";
import datosnotas from "../models/model_notas.js";
import datosresultado from "../models/model_result.js";

  datoscurso.hasMany(datosEstudiates, { foreignKey: 'curso_id_curso'});
 datosEstudiates.belongsTo(datoscurso, { foreignKey: 'curso_id_curso'});

datoscurso.hasMany(datoscompe, { foreignKey: 'curso_id_curso'});
datoscompe.belongsTo(datoscurso, { foreignKey: 'curso_id_curso'});

datoscompe.hasMany(datosresultado, { foreignKey: 'compe_id_compe' });
datosresultado.belongsTo(datoscompe, { foreignKey: 'compe_id_compe' });

datosnotas.hasOne(datosresultado, { foreignKey: 'id_nota' });
datosresultado.belongsTo(datosnotas, { foreignKey: 'id_nota' });

datosinstructor.belongsToMany(datoscurso, { through: datoscursoints, foreignKey: 'id_instru' });
datoscurso.belongsToMany(datosinstructor, { through: datoscursoints, foreignKey: 'curso_id_curso'});


 export {datosEstudiates,datoscompe,datosnotas,datoscurso,datoscursoints,datosinstructor,datosresultado};
