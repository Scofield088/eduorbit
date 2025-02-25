const userModel=require('../models/user.model');



module.exports.createUser=async({email,password})=>{
    if(!email || !password){
        throw new Error('All fields are required');
    }
    const user=await userModel.create({
        email,
        password
    })
    return user;
}