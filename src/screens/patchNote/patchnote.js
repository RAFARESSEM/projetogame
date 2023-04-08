import React from "react";
import './patchnote.css';
import cavaleiro from "../../img/cavaleiro.jpg"
import mago from "../../img/mago.jpg"
import hunter from "../../img/hunter.jpg"

export default class patchNote extends React.Component{

    

    render(){
        return(
            <div title= "patch1.0">
                 <br/>
                 
                <label> BEM VINDO AO GAME </label>
                <br/>
                <br/>
                <br/>
                <label> patch 1.0 sem modificações ate o momento </label>
                <br/>
                <br/>
                <label> passe o mouse em cima da imagem para ver os atributos de cada classe </label>
                <br/>
                <img src={cavaleiro} alt="cavaleiro" title="4-ataque,5-defesa,1-destreza"/>
                <br/>
                <label> guerrerio:consegue resistir a muitos ataques gracas a sua defesa forte tem vantagem em mago e desvantagem em hunter </label>
                <br/>
                <img src={mago} alt="mago" title="6-ataque, 1-defesa, 3-destreza"/>
                <br/>
                <label> mago: tem um ataque gigantesco consegue destruir um inimigo em poucos segundos tem vantagem em hunter e desvantagem em guerreiro</label>
                <br/>
                <img src={hunter} alt="hunter" title="3-ataque,3-defesa,4-destreza"/>
                <br/>
                <label> hunter: tem uma destreza muito alta e consegue esquivar dos ataques e devolver dano tem vantagem em guerreiro e desvantagem mago </label>
                <label>  </label>
               
                <br/>
                <label>  </label>
               
            </div>

         
        
            )
        }
}
