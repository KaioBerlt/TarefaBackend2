const usuarios = [
    {
        id: 1,
        nome: "usuario1",
        email: "usuario1@example",
        idade: 30

    },

    {
        id: 2,
        nome: "usuario2",
        email: "usuario2@example",
        idade: 19
    },
    {
        id: 3,
        nome: "usuario3",
        email: "usuario3@example",
        idade: 45
    },
]

const find = (req, res) => {
    const id = req.params.id;
  
    let found = false;
  
    usuarios.map(function (valor) {
      if (valor.id == id) {
        found = true;
        return res.send(valor);
      }
    });
    if (!found) {
      res.status(404).send({ message: "Não foi encontrado" });
    }
  };

const findAllUsers = (req,res) =>{
    res.send(usuarios);
};


const createUser = (req, res) => {
    const usuario = req.body;
  
    if (Object.keys(usuario).length === 0) {
      return res.status(400).send({ message: "O corpo da mensagem esta vazio" });
    }
  
    if (!usuario.id) {
      return res.status(400).send({ message: "Id não encontrado" });
    }
  
    if (!usuario.nome) {
      return res.status(400).send({ message: "Nome não encontrado" });
    }
  
    if (!usuario.email) {
      return res.status(400).send({ message: "E-mail não encontrado" });
    }

    if (!usuario.idade) {
        return res.status(400).send({ message: "Idade não encontrado" });
      }
  
    usuarios.push(usuario);
    res.status(201).send(usuarios);
  };



  const updateUser = (req, res) => {
    const id = req.params.id;
    const usuario = req.body;
    let found = false;
  
    if (Object.keys(usuario).length === 0) {
      return res.status(400).send({ message: "O corpo da mensagem esta vazio" });
    }
  
    if (!usuario.id) {
      return res.status(400).send({ message: "Id não encontrado" });
    }
  
    if (!usuario.nome) {
      return res.status(400).send({ message: "Nome não encontrado" });
    }
  
    if (!usuario.email) {
      return res.status(400).send({ message: "E-mail não encontrado" });
    }

    if (!usuario.idade) {
        return res.status(400).send({ message: "Idade não encontrado" });
      }
  
    usuarios.map(function (valor, index) {
      if (valor.id == id) {
        found = true;
        usuarios[index] = usuario;
        return res.send(usuarios[index]);
      }
    });
    if (!found) {
      res.status(404).send({ message: "Não foi encontrado" });
    }
  };


  const deleteUser = (req, res) => {
    const id = req.params.id;
  
    let found = false;
  
    usuarios.map(function (valor, index) {
      if (valor.id == id) {
        found = true;
        usuarios.splice(index, 1);
        return res.send(valor);
      }
    });
    if (!found) {
        res.status(404).send({ message: "Não foi encontrado" });
    }
  };
  




module.exports = {
    find,
    findAllUsers,
    createUser,
    updateUser,
    deleteUser

};