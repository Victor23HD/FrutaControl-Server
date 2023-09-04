const usersControllers =
{

    listUsers: async(req, res) => {
        res.status(200).send(user);
    }
}

const user = {
    "usarname": "Victor",
    "password": "12345"
}

export default usersControllers;