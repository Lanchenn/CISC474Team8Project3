const mongoose = require('mongoose'),  
Schema = mongoose.Schema;


const UserSchema = new Schema({  
    email: {
      type: String,
      lowercase: true,
      unique: true,
      required: true
    },
    profile: {
      firstName: { type: String },
      lastName: { type: String }
    },
    favorites: {
        userFavs: {type: [String]}
    }
  },
  {
    timestamps: true
  });


  UserSchema.methods.getProfile=function() {
    return this.profile;
  }
  UserSchema.methods.getFavorites=function() {
    return this.favorites;
  }
  module.exports = mongoose.model('User', UserSchema);  
  