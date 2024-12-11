import Link from 'next/link';
import Boton from "@/components/boton";
import axios from "axios";

async function usuarios(){
    const url="https://jsonplaceholder.typicode.com/users";
    const usuarios = await axios.get(url);
    return usuarios.data;
}
export default async function (){
    var usuario = await usuarios();
    console.log(usuario);
    
    return(
        <div>
            <h1>Usuarios</h1>
            <p>Estas en usuarios</p>
            <table className="table">
             <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Username</th>
                    <th>email</th>
                </tr>
             </thead>
             <tbody>
             {
                    usuario.map((usuario,i)=>(
                        <tr key="{i}">
                            <td>{i+1}</td>
                            <td><Link href = {`/users/${usuario.id}`}>{usuario.name}</Link></td>
                            <td>{usuario.username}</td>
                            <td>{usuario.email}</td>
                        </tr>
                    ))
                }
             </tbody>
            </table>
            <Boton/>
        </div>
    );
}