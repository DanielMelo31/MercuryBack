import { gql } from 'apollo-server-core';

const projectTypes = gql`
	type Objetivo {
		_id: ID!
		descripcion: String!
		tipo: Enum_TipoObjetivo!
	}

	input crearObjetivo {
		descripcion: String!
		tipo: Enum_TipoObjetivo!
	}

	type Proyecto {
		_id: ID!
		nombre: String!
		presupuesto: Float!
		fechaInicio: Date!
		fechaFin: Date!
		estado: Enum_EstadoProyecto!
		fase: Enum_FaseProyecto!
		lider: Usuario!
		objetivos: [Objetivo]
		avances: [Avance]
		registros:[Registro]
	}

	type Query {
		Proyectos: [Proyecto]
		Proyecto(_id: String!):Proyecto
	}

	type Mutation {
		crearProyecto(
			nombre: String!
			presupuesto: Float!
			fechaInicio: Date!
			fechaFin: Date!
			estado: Enum_EstadoProyecto!
			fase: Enum_FaseProyecto!
			lider: String!
			objetivos: [crearObjetivo]
		): Proyecto

		editarProyecto(
			_id: String!
			nombre: String!
			presupuesto: Float!
			fechaInicio: Date!
			fechaFin: Date!
			estado: Enum_EstadoProyecto!
			fase: Enum_FaseProyecto!
			lider: String!
			objetivos: [crearObjetivo]
		): Proyecto
	}
`;

export { projectTypes };
