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

    showAlert = ({ target }) => {
        alert('Preencha com cuidado esta informação');
    }

    render() {
        return (
            <form>
                <fieldset>
                    <section id="name-input">
                        <label for="name">Nome</label>
                        <input onChange={this.inputToUpperCase} name="nome" id="name" type="text" maxlength="40" />
                    </section>
                    <section id="email-input">
                        <label for="email">Email</label>
                        <input name="email" id="email" type="text" maxlength="50" />
                    </section>
                    <section id="cpf-input">
                        <label for="cpf">CPF</label>
                        <input name="cpf" id="cpf" type="text" maxlength="11" />
                    </section>
                    <section id="adress-input">
                        <label for="adress">Endereço</label>
                        <input onChange={this.removeSpecialCharacters} name="endereco" id="adress" type="text" maxlength="200" />
                    </section>
                    <section id="city-input">
                        <label for="vity">Cidade</label>
                        <input onBlur={this.removeIfBeginsWithNumber} name="cidade" id="city" type="text" maxlength="28" />
                    </section>
                    <section id="city-input">
                        <label for="vity">Cidade</label>
                        <select>
                            <option>Acre</option>
                            <option>Alagoas</option>
                            <option>Amapá</option>
                            <option>Amazonas</option>
                            <option>Bahia</option>
                            <option>Ceará</option>
                            <option>Distrito Federal</option>
                            <option>Espírito Santo</option>
                            <option>Goiás</option>
                            <option>Maranhão</option>
                            <option>Mato Grosso</option>
                            <option>Mato Grosso do Sul</option>
                            <option>Minas Gerais</option>
                            <option>Pará</option>
                            <option>Paraíba</option>
                            <option>Paraná</option>
                            <option>Pernambuco</option>
                            <option>Piauí</option>
                            <option>Rio de Janeiro</option>
                            <option>Rio Grande do Norte</option>
                            <option>Rio Grande do Sul</option>
                            <option>Rondônia</option>
                            <option>Roraima</option>
                            <option>Santa Catarina</option>
                            <option>São Paulo</option>
                            <option>Sergipe</option>
                            <option>Tocantins</option>
                        </select>
                        <section id="tipo-input">
                            <label for="casa">Casa</label>
                            <input id="casa" type="radio" name="tipo" value="casa" checked />
                            <label for="apartamento">Apartamento</label>
                            <input id="apartamento" type="radio" name="tipo" value="apartamento" />
                        </section>
                    </section>
                </fieldset>
                <fieldset>
                    <section>
                        <label for="curriculum">Resumo do currículo</label>
                        <textarea id="curriculum" maxlength="1000"></textarea>
                    </section>
                    <section>
                        <label for="cargo">Cargo</label>
                        <textarea id="cargo" onMouseEnter={this.showAlert} maxlength="40"></textarea>
                    </section>
                    <section>
                        <label for="description">Descrição do cargo</label>
                        <input id="description" type="text" maxlength="500" />
                    </section>
                </fieldset>
                <button></button>
            </form>
        )
    }
}

export default Form;
