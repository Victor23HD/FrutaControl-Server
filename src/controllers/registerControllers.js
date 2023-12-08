import Fruit from "../models/fruit.js";

const registerControllers = {
  registerFruit: async (req, res) => {
    const {
      name,
      type,
      quantity,
      price,
      supplier,
      dueDate,
      weightPerUnit,
      category,
    } = req.body;

    const fruit = new Fruit({
      name: name,
      type: type,
      quantity: quantity,
      price: price,
      supplier: supplier,
      dueDate: dueDate,
      weightPerUnit: weightPerUnit,
      category: category,
    });

    try {
      await fruit.save();
      res.status(201).json({ msg: "User created successfully!" });
    } catch (error) {
      res.status(422).json({ msg: "There was an error internally!" });
    }
  },
  listFruit: async (req, res) => {
    const id =  req.params.id;

    const fruit = await Fruit.findById(id);

    if(!fruit){
      return res.status(404).json({msg: "Fruit not found!"});
    }
    return res.status(200).json({fruit});
  },
};

export default registerControllers;