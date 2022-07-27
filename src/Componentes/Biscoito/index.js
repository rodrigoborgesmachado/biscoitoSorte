import React, {Component} from "react";
import Botao from "./botao";
import '../../estilo.css'

class Biscoito extends Component{
    constructor(props){
        super(props);
        this.state = {
            textoFrase: ''
        }

        this.frases = [
            'Siga os bons e aprenda com eles.', 'O bom-senso vale mais do que muito conhecimento.', 
            'O riso é a menor distância entre duas pessoas.', 
            'Deixe de lado as preocupações e seja feliz.',
            'Realize o óbvio, pense no improvável e conquiste o impossível.',
            'Acredite em milagres, mas não dependa deles.',
            'A maior barreira para o sucesso é o medo do fracasso.'
        ]

        this.quebraBiscoito = this.quebraBiscoito.bind(this);
    }

    quebraBiscoito(){
        let state = this.state;
        let randomNumber = Math.floor(Math.random() * this.frases.length);
        state.textoFrase = '" ' + this.frases[randomNumber] + ' "';
        this.setState(state);
    }

    render(){
        return(
            <div className="container">
                <img src={require('../../assets/biscoito.png')} className="img"/>
                <Botao nome="Abrir biscoito" acao={this.quebraBiscoito}/>
                <h3 className="textoFrase">{this.state.textoFrase}</h3>
            </div>
        )
    }
}

export default Biscoito;