import {Schema, model} from 'mongoose'
import bcrypt from 'bcrypt'
const saltRoounds = 10

const userSchema = new Schema[
	{
	name:{
		type:string,
		required:true,
	},
	email:{
		type:string,
		required:true,
	},
	password:{
		type:string,
		required:true,
	},
	bio: string,
	avatar:{
		type:string,
		required:true,
	},
	posts:[
		{
			type: Schema.Types.ObjectId,
			ref:'Post',
		},
	]
	},
{timestamps:true}
]

userSchema.pro( 'save', function (next) {
	const user = this
	bcrypt.hash(user.password, saltRoounds,(error, hash) => {
		if (error) return next(error)

		user.password = hash
		next()
	})
})

export default model('User', userSchema)