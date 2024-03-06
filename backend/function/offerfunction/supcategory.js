const {supcategory} = require('../../database/models/supcategory')
const insertsupcategory = (data, mainId) => {
    const supcategoryinsert = data.map(ele => {
        return supcategory.create({
            namesub: ele.supcategory,
            maincategoryIdmaincategory: mainId
        });
    });

    return Promise.all(supcategoryinsert);
};
const updatesupcategory = (data , id)=>{
    const updatesupcategory = data.map(ele=>{
        return supcategory.update(ele.supcategory,{where : {maincategoryIdmaincategory : id}})
    })
    return Promise.all(updatesupcategory)
}
module.exports={
    insertsupcategory,
    updatesupcategory,
}