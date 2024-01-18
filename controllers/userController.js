const list = (req, res) => {
    res.json({ message: 'List User' });
};

const detail = (req, res) => {
    res.send({ message: 'Detail User' });
}

const create = (req, res) => {
    res.json({ message: 'Create User' });
}

const update = (req, res) => {
    res.json({ message: 'Update User' });
}

const deleteUser = (req, res) => {
    res.json({ message: 'Delete User' });
}

module.exports = {
    list,
    detail,
    create,
    update,
    deleteUser
};