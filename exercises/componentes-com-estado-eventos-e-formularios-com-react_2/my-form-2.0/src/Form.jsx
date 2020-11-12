import React from 'react';

class Form extends React.Component {
    constructor() {
        super();

        this.state = {
            allFieldsFilled: false,
            nameText: ''
        }
    }

    inputToUpperCase = ({ target }) => {
        target.value = target.value.toUpperCase();
    }

    removeSpecialCharacters = ({ target }) => {
        target.value = target.value.replace(/[^A-Za-z0-9]/g, '');
    }

    removeIfBeginsWithNumber = ({ target }) => {
        if (target.value[0].match(/[0-9]/)) {
            target.value = ''
        }
    }

    render() {
        return (
            <form>
                <fieldset>
                    <section id="name-input">
                        <label for="name">Nome</label>
                        <input onChange={this.inputToUpperCase} name="nome" id="name" type="text" maxlength="40" required/>
                    </section>
                    <section id="email-input">
                        <label for="email">Email</label>
                        <input name="email" id="email" type="text" maxlength="50" required/>
                    </section>
                    <section id="cpf-input">
                        <label for="cpf">CPF</label>
                        <input name="cpf" id="cpf" type="text" maxlength="11" required/>
                    </section>
                    <section id="adress-input">
                        <label for="adress">Endereço</label>
                        <input onChange={this.removeSpecialCharacters} name="endereco" id="adress" type="text" maxlength="200" required/>
                    </section>
                    <section id="city-input">
                        <label for="vity">Cidade</label>
                        <input onBlur={this.removeIfBeginsWithNumber} name="cidade" id="city" type="text" maxlength="28" required/>
                    </section>
                </fieldset>
            </form>
        )
    }
}

export default Form;
