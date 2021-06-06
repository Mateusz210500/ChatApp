import axios from 'axios'

const createUser = async (req, res) => {
    const { userId, userName } = req.body;

    axios
        .post('https://chatengine.io/projects/people/',
        {username: userName, secret: userId})

}

export default createUser;