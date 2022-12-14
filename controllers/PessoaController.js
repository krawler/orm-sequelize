const database = require('../models')

class PessoaController{
    
    static async getAllPeople(req, res){
        try{
            let people = await database.Pessoas.findAll({})
            return res.status(200).json(people)
        }catch(error){
            return res.status(500).json(error.message)
        }    
    }
    
    static async getOne(req, res){
        const { id } = req.params;
        try{
            const people = await this.database.Pessoas.findOne({
                 where: { id: Number(id)}
            });
            return res.status(200).json(people);
        }catch(error){
            return res.status(200).json(error);
        }
    }

     static async createPeople(req, res){
        const newPeople = req.body;
        try{
            const createdPeople = await database.pessoas.create(newPeople);
            return res.status(200).json(createdPeople);
        }catch(erro200){
            return res.status(500).json(eror.message);
        }        
    }    
}

module.exports = PessoaController

