import getConnection from "../db/database.js"

const getCategorias = async (req, res) => {
    try {
        const connection = await getConnection();
        const result =await connection.query("SELECT CategoriaID , CategoriaNombre , Descripcion , Imagen from categorias");
        res.json(result);
    } catch (error) {
         console.error(error); // mejor loguear el error real
        res.status(500).json({ error: "Error al obtener categorías" });
        
    }

}
export const methodHTTP = {
    getCategorias
}