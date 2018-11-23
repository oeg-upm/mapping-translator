import {GraphQLObjectType,GraphQLList,GraphQLNonNull,GraphQLString,GraphQLInt,GraphQLFloat} from 'graphql'
import knex from './database'
const SocialMediaPosting = new GraphQLObjectType({	description: 'An instance of SocialMediaPosting',
	name: 'SocialMediaPosting',
	sqlTable: 'comments',
	uniqueKey: 'id',
	fields: () => ({
		identifier:{
			type: GraphQLString,
			sqlDeps: ['id'],
			resolve: table => `http://ex.org/Comment/${table.id}`
		},
		author:{
			type: Person,
			args: {
				identifier:{type:GraphQLString}
			},
			where: (table, args, context) => {
				let sqlWhere = []
				if(args.identifier != null) { sqlWhere.push(`'http://ex.org/Person/' || ${table}.id || '' = '${args.identifier}'`) }
				if(args.name != null) { sqlWhere.push(`null`) }
				let sqlWhereString = sqlWhere.join(" AND ")
				console.log(`sqlWhereString = ${sqlWhereString}`)
				return sqlWhereString
			},
			sqlJoin: (child, parent) => `${child}.author = id`
		},
		comment:{
			type: GraphQLString,
			sqlColumn: 'comment'
		},
		date:{
			type: GraphQLString,
			sqlColumn: 'date'
		}
	})
})
export default SocialMediaPosting
import Person from './Person'