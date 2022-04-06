import React, { Component } from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {planets.map(({ name, image }) => (
          <PlanetCard
            planetImage={ image }
            planetName={ name }
            key={ name }
          />
        ))}
      </div>
    );
  }
}

export default SolarSystem;
