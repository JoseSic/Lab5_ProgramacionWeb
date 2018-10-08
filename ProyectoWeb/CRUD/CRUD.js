let MockGaleria = require('../MocKImagen');

function GetTodos(){
    return MockGaleria;
}

function GetID(id){
    let tt = MockGaleria.find(o => o.id == id);
    return tt;
}

function PostData(data){
    const temp = {
        descripcion: data.descripcion,
        titulo: data.titulo,
        id: MockGaleria.length +1

    };
    MockGaleria.push(temp);
    return temp;
}

function PutData(data, id){
    let tt = MockGaleria.findIndex(x => x.id==id);
    if(tt==-1)
    {
        return null;
    }
    MockGaleria[tt].descripcion = data.descripcion;
    MockGaleria[tt].titulo = data.titulo
    return MockGaleria[tt];
}
function DeleteData( id){
    let tt = MockGaleria.findIndex(x => x.id==id);
    if(tt==-1)
    {
        return false;
    }
    MockGaleria.splice(tt,1)
    return true;
}


module.exports = {
    GetTodos: GetTodos,
    GetID: GetID,
    PostData: PostData,
    PutData: PutData,
    DeleteData: DeleteData
}
