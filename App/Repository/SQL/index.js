"use strict"

class SqlRepo{
    constructor(model) {
        this.model = model
    }

    /**
     * Get all record
     * @optional_param {Array} orderBy ['id','DESC'] order by id, desc 
     * @returns Object
     */
    getAll = async(orderBy=['id','ASC']) =>{
        return await this.model.query().orderBy(orderBy[0],orderBy[1]).then(data => {
            return {status:true,data};
        }).catch(err => {
            return {status:false,err};
        });
    }

    /**
     * Find record by id
     * @param {integer} id 
     * @return Object
     */
    findById = async(id) =>{
        return await this.model.query().findById(id).then(data => {
            return data == undefined || data.length == 0? {status:false,data}:{status:true,data};
        }).catch(err => {
            return {status:false,err};
        });
    }

    /**
     * Find many records by their ids
     * @param {Array} ids [1,2,3] 
     * @optional_param {Array} orderBy ['id','DESC'] order by id, desc
     * @return Object
     */
    findByIds = async(ids,orderBy=['id','ASC']) =>{
        return await this.model.query().orderBy(orderBy[0],orderBy[1]).whereIn('id',ids).then(data => {
            return {status:true,data};
        }).catch(err => {
            return {status:false,err};
        });
    }

    /**
     * Save a record
     * @param {Object} record 
     * @return Object
     */
    saveOne = async(record) =>{
        return await this.model.query().insert(record).then(data => {
            return {status:true,data};
        }).catch(err => {
            return {status:false,err};
        });
    }

    /**
     * update a record
     * @param {integer} id
     * @param {Object} record 
     * @return Object
     */
    updateOne = async(id,record) =>{
        return await this.model.query().patchAndFetchById(id,record).then(data => {
            return {status:true,data};
        }).catch(err => {
            return {status:false,err};
        });
    }

    /**
     * update multiple records
     * @param {Array} records 
     * @return void
     */
    updateMany = async (records) => {
        records.forEach(async (record) => {
            await this.model.query().patch(record);
        });
    }

    /**
     * Save multiple records
     * @param {Array} records 
     * @return void
     */
    saveMany = async (records) => {
        records.forEach(async (record) => {
            await this.model.query().insert(record);
        });
    }

    /**
     * Delete a record
     * @param {integer} id 
     * @return Object
     */
    deleteOne = async (id) => {
        return await this.model.query().delete().where('id','=',id).then(data => {
            return {status:true,data};
        }).catch(err => {
            return {status:false,err};
        });
    }

    /**
     * Delete many records
     * @param {Array} ids [1,2,3] 
     * @return Object
     */
    deleteMany = async (ids) => {
        return await this.model.query().delete().whereIn('id',ids).then(data => {
            return {status:true,data};
        }).catch(err => {
            return {status:false,err};
        });
    }
}

module.exports = SqlRepo;