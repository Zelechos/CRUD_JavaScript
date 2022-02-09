'use strict'

const app = new function(){

    this.memories = document.getElementById('memories');
    this.fecha = document.getElementById('fecha');
    this.memoria = document.getElementById('memoria');
    this.analisis = document.getElementById('analisis');


    this.read = function(){
        
        const $template = document.getElementById("template-memories").content;

        // let data = `
        // <tr>
        //     <td>8/02/22</td>
        //     <td>Aprendiendo Js</td>
        //     <td>
        //         Siento que es muy complicado y extenso pero pienso estudiar js y reactjs todo el tiempo que seas necesario para poder aprender y dominar esta tecnologia
        //     </td>
        //     <td>Editar|Borrar</td>
        // </tr>
        // `;

        return this.memories.prepend($template);
    };

    this.add = function(){
        console.log(fecha.value);
        console.log(memoria.value);
        console.log(analisis.value);
    }

}

app.read();