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
const updatesupcategory = async (data, id) => {
    try {
        //  Delete Existing supcategory
        await supcategory.destroy({where : {maincategoryIdmaincategory : null} });

        //  Insert New supcategory
        const createSupPromise = data.map(async ele => {
            await supcategory.create(
                {namesub :ele.supcategory ,
                maincategoryIdmaincategory : id}
                );
<<<<<<< HEAD
       
=======

>>>>>>> 66862f43492dec151ff9c505151183a45fadd886
        });

        // Wait for all inserts to complete
        await Promise.all(createSupPromise);

        console.log('supcategory updated successfully');
    } catch (error) {
       
        console.error('Error updating supcategory:', error);
    }
};

module.exports={
    insertsupcategory,
    updatesupcategory,
}