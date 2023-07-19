import { Button, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area={"nav"} bg={"red.400"} padding={2}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} bg={"green.300"}>
          aside
        </GridItem>
      </Show>
      <GridItem area={"main"} bg={"yellow.300"}>
        main
      </GridItem>
    </Grid>
  );
}

export default App;
