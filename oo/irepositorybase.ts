export interface IRepositoryBase{
    
    insert(object:any):boolean;
    update(object:any):boolean;
    delete(id:number):boolean;
    findById(id:number):any;
    findAll():[any];

}