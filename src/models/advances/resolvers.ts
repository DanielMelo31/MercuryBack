import { AdvancesModel } from './advance';

const advancesResolver = {
	Query: {
		Avances: async (parents, args) => {
			const avance = await AdvancesModel.find();
			return avance;
		},
	},

	Mutation: {
		crearAvance: async (parents, args) => {
			const nuevoAvance = await AdvancesModel.create({
				proyecto: args.proyecto,
				fecha: args.fecha,
				descripcion: args.descripcion,
				creadoPor: args.creadoPor,
			});

			return nuevoAvance;
		},
	},
};

export { advancesResolver };
