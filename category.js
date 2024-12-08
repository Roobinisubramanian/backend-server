const { model } = require("mongoose");
const {Categories} = require("../Models/models");

// get categories
async function create_Categories(req,res) { 
    const {type,color} = req.body;
    console.log(type,color);

    try {
        const Create = new Categories({
            type:type,
            color: color
        })
    await Create.save()
    res.status(201).json({message:"data saved successfully"});
    } catch (error) {
        res.status(400).json(error)
    }
}

async function get_Categories(req,res){
    let data = await model.Categories.find({})

    let filter = await data.map(v=> Object.assign({},{type:v.type, color: v.color} ))

    return res.json(filter);
}

async function create_Transaction(req,res){
    if(!req.body) return res.status(400).json ("posted data not available");
    let {name,type,amount } =req.body;

    const create = await new model.Transaction(
        {
        name,
        type,
        amount,
        date: new Date()
    }
    )

    create.save(function(err){
        if(!err) return res.json(create);
        return res.status (400).json({ message: `Error while processing the data ${err}`})
    })
}

async function get_Transaction(req,res){
    let data = await model.Transaction.find({});
    return res.json(data)
}

async function delete_Transaction(req,res) {
    if(!req.body) res.status(400).json({ message: "Requested data not found"});
    await model.Transaction.deleteOne(req.body, function (err){
        if(!err) res.json("record Deleted");
    }).clone().catch(function(err){ res.json("Error while deleting the record")});
    
}


module.exports = { 
    create_Categories, 
    get_Categories,
    create_Transaction,
    get_Transaction,
    delete_Transaction
 }