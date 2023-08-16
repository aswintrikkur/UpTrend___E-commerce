const searchValueOnDB = (value, DB) => {

    return (DB.category.toLowerCase().includes(value.toLowerCase()) ||
            DB.title.toLowerCase().includes(value.toLowerCase()) ||
            DB.brand.toLowerCase().includes(value.toLowerCase()));

}
// (DB.brand.toLowerCase() || DB.title.toLowerCase() ||
module.exports = { searchValueOnDB };