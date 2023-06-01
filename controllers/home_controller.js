module.exports.home = async (req,res)=>{
    try{
return res.render('craving');
    }
    catch(err){
        return;
    }
}