
const Listing = require("../models/listing.js");


module.exports.searchIndex = async (req, res) => {
    let {countryName} = req.query;
    if(countryName === ""){
        req.flash("error","Searchbox is empty");
       return  res.redirect("/listings");
    }
    else{
        countryName = countryName[0].toUpperCase()+countryName.slice(1,countryName.length);
    }
    const allListing = await Listing.find({country:countryName});
    if(allListing.length == 0){
        req.flash("error","Country is not listed");
        res.redirect("/listings");
    }
    else{
        res.render("listings/search.ejs", { allListing });
    }
};

