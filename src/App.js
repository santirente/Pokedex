import logo from "./logo.svg";
import "./App.css";
import {React, Fragment, useEffect, useState } from "react";
import { getPokemons } from "../src/Services/httpService";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "../src/Modal";
import PokemonInfo from "./PokemonInfo/PokemonInfo";

function App() {
  let [pokemonList, setPokemonList] = useState({
    pokemons: [],
  });
  const [modalPokemonDetails, setModalmodalPokemonDetails] = useState({
    isOpen: false,
    infoPokemon: {},
  });
  const [infoPokemon, setinfoPokemon] = useState({});
  useEffect(() => {
    const loadPokemon = async () => {
      try {
        let data = await getPokemons("pokemon");
        console.log(data.data.results);
        setPokemonList({
          pokemons: data.data.results,
        });
      } catch (err) {}
    };
    loadPokemon();
  }, [true]);
  async function handleCloseModalPokemonDetails(user) {
    setModalmodalPokemonDetails({ isOpen: false });
  }
  function handleOpenModalPokemonDetails(url) {
    setinfoPokemon(url);
    setModalmodalPokemonDetails({ isOpen: true });
  }
  return (
    <div className="App">
      <header className="App-header">
        <Fragment>
          {pokemonList.pokemons &&
            pokemonList.pokemons.map((pokemon) => {
              return (
                <Container>
                  <Row>
                    <Col sm={4}>
                      <Card style={{ width: "18rem" }}>
                        <Card.Body>
                          <Card.Text>{pokemon.name}</Card.Text>
                          <Button
                            variant="primary"
                            onClick={() => {
                              handleOpenModalPokemonDetails(pokemon.url);
                            }}
                          >
                            Detalle
                          </Button>{" "}
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Container>
              );
            })}
        </Fragment>
      </header>
      <Modal
        className="product-detail"
        isOpen={modalPokemonDetails.isOpen}
        onClose={() => handleCloseModalPokemonDetails(false)}
      >
        <PokemonInfo infoPokemon= {infoPokemon} onSave={handleCloseModalPokemonDetails}></PokemonInfo>
      </Modal>
      
    </div>
  );
}

export default App;
