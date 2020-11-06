import React from 'react';


class Pokemon extends React.Component {
    render() {
        const { name, type, averageWeight, image } = this.props.pokemon;

        return (
            <div className="pokemon">
                <div className="pokemon-info">
                    <p>{name}</p>
                    <p>{type}</p>
                    <p>Average Weight: {averageWeight.value} {averageWeight.measurementUnit}</p>
                </div>
                <img src={image}></img>
            </div>
        );
    }
}

export default Pokemon;
