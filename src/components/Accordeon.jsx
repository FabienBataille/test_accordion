import * as React from "react";
import { Collapser, Trigger, Panel } from "react-collapser";
import "./accordeon.css";

function Accordeon() {
  return (
    <div className="Accordeon">
      <p className="rubrique-accueil">Accueil</p>
      <Collapser>
        <Trigger className="trigger">Qui sommes-nous?</Trigger>
        <Panel className="panel">
          <h6>Historique</h6>
          <h6>Présentation</h6>
          <h6>L'extraction</h6>
          <h6>La fabrication</h6>
        </Panel>
      </Collapser>
      <Collapser>
        <Trigger className="trigger">Voirie</Trigger>
        <Panel className="panel">
          <h6>Présentation</h6>
          <h6>Les dalles</h6>
          <h6>Les bornes</h6>
          <h6>Les bordures</h6>
          <h6>Les pavés</h6>
        </Panel>
      </Collapser>
      <Collapser>
        <Trigger className="trigger">Bâtiment</Trigger>
        <Panel className="panel">
          <h6>Présentation</h6>
          <h6>Les escaliers</h6>
          <h6>Revêtement de sols</h6>
          <h6>Revêtements verticaux</h6>
          <h6>Mobiliers urbains</h6>
        </Panel>
      </Collapser>
      <Collapser>
        <Trigger className="trigger">Ouvrages spéciaux</Trigger>
        <Panel className="panel">
          <h6>Artistique</h6>
          <h6>Décorations</h6>
        </Panel>
      </Collapser>
      <Collapser>
        <Trigger className="trigger">Matériaux</Trigger>
        <Panel className="panel">
          <h6>Origines</h6>
          <h6>Granits voirie</h6>
          <h6>Granits bâtiment</h6>
        </Panel>
      </Collapser>
      <p className="contact-mobil">Nous contacter</p>
    </div>
  );
}

export default Accordeon;
