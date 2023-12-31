const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

module.exports = {
    registerUser: async (req, res) => {
        const user = await prisma.users.create({
            data: {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }
        })

        const profile = await prisma.profiles.create({
            data: {
                identity_number: req.body.identity_number,
                identity_type: req.body.identity_type,
                address: req.body.address,
                user: {
                    connect: {id: user.id}
                }
            }
        })
        return res.json({
            data: profile
        })
    },

    getUser: async (req, res) => {
        const user = await prisma.users.findMany()
        res.json(user)
    },
    
    getUserId: async (req, res) => {
        const userId = parseInt(req.params.id)
        const user = await prisma.users.findUnique({
            where: {
                id: userId
            }
        })
        return res.json(user)
    }
}