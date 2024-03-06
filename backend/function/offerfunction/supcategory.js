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

module.exports={
    insertsupcategory,
}