const sequelize = require('../database/connection');
const{admin} = require('./models/admin');
const{user} = require('./models/user');
const {userProvider} = require('./models/userProvider');
const {commentuseroffer}=require('./models/commentuseroffer');
const {commentuserpackage} = require('./models/commentuserpackage');
const {imagesoffer} = require('./models/imagesoffer');
const {maincategory}=require('./models/maincategory');
const {offer}=require('./models/offer');
const {package} = require('./models/package');
const {packageuseredit} = require('./models/packageuseredit');
const {paiment} =require('./models/paiment');
const {supcategory}  =require('./models/supcategory');
const {user_has_package} = require('./models/user_has_package');
const {wishlist} = require('./models/wishlist')
const {package_edit}=require('./models/package_edit')

// reation between useProvider & offers ! 
userProvider.hasMany(offer)
offer.belongsTo(userProvider)

// reation between useProvider & package ! 
userProvider.hasMany(package , {onDelete :'cascade'} ) 
package.belongsTo(userProvider)

// packages has MM realtion with offers ! 
offer.belongsToMany(package,{through : 'package_has_offer' })
package.belongsToMany(offer,{through : 'package_has_offer' })

// offer relations ! 

// offer.hasMany(paipers)
offer.hasMany(imagesoffer)
imagesoffer.belongsTo(offer)
offer.hasMany(maincategory)
maincategory.belongsTo(offer)
maincategory.hasMany(supcategory)
supcategory.belongsTo(maincategory)
offer.hasMany(commentuseroffer)
commentuseroffer.belongsTo(offer)


// admin can create a combo ! 
admin.hasMany(package ,{onDelete :'cascade'})
package.belongsTo(admin )


// user & wichlist 
user.belongsToMany(package , {through : wishlist})
package.belongsToMany(user , {through : wishlist})


// user & package of the userProvider   
user.belongsToMany(package , {through : user_has_package})
package.belongsToMany(user , {through : user_has_package})
packageuseredit.hasMany(user_has_package)

// package & comment ------------
package.hasMany(commentuserpackage)
commentuseroffer.belongsTo(package)


// edit package for user 

user.hasMany(packageuseredit)
packageuseredit.belongsTo(user)

// edited packages has MM realtion with offers ! 
offer.belongsToMany(packageuseredit,{through : package_edit })
packageuseredit.belongsToMany(offer,{through : package_edit })




// paiment user table 
user_has_package.hasOne(paiment)
paiment.belongsTo(user_has_package)





  // Sync Database
  sequelize.sync({ force:true }) // Set force to true if you want to drop and recreate tables
    .then(() => {
      console.log('Database synchronized successfully.');
    })
    .catch((error) => {
      console.error('Error syncing database:', error);
    });
