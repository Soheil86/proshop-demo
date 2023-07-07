import bcrypt from 'bcryptjs'

const users = [
	{
		name: 'Admin User',
		email: 'admin@email.com',
		password: bcrypt.hashSync('123456', 10),
		isAdmin: true,
	},
	{
		name: 'Soheil Ghanbari',
		email: 'soheil@email.com',
		password: bcrypt.hashSync('123456', 10),
	},
	{
		name: 'Arezoo Mirza',
		email: 'arezoo@email.com',
		password: bcrypt.hashSync('123456', 10),
	},
]

export default users
