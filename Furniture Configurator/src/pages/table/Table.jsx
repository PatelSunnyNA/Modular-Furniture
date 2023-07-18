import {
  MeshReflectorMaterial,
  PresentationControls,
  Stage,
} from "@react-three/drei";
import { CustomizationProvider } from "../../contexts/TableCustomization";
import { Canvas } from "@react-three/fiber";
import { Box, Grid } from "@mui/material";
import TableModel from "./TableModel";
import { Configurator } from "./Configurator";
const Table = () => {
  return (
    <CustomizationProvider>
      <Grid container>
        <Grid item sm={12} md={6} align="center">
          <Box
            sx={{
              height: { sm: "50vh", md: "90vh" },
              width: { sm: "75%", md: "80%" },
            }}
          >
            <Canvas dpr={[1, 2]}>
              <color attach="background" args={["#213547"]} />
              <fog attach="fog" args={["#213547", 10, 20]} />
              <PresentationControls
                speed={1.5}
                global
                polar={[-0.1, Math.PI / 4]}
                rotation={[Math.PI / 8, Math.PI / 4, 0]}
              >
                <Stage environment="city" intensity={0.6} castShadow={false}>
                  <TableModel />
                </Stage>
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]}>
                  <planeGeometry args={[170, 170]} />
                  <MeshReflectorMaterial
                    blur={[300, 100]}
                    resolution={2048}
                    mixBlur={1}
                    mixStrength={40}
                    roughness={1}
                    depthScale={1.2}
                    minDepthThreshold={0.4}
                    maxDepthThreshold={1.4}
                    color="#101010"
                    metalness={0.5}
                  />
                </mesh>
              </PresentationControls>
            </Canvas>
          </Box>
        </Grid>
        <Grid item container xs={12} md={6}>
          <Box mx="10px">
            <Configurator />
          </Box>
        </Grid>
      </Grid>
    </CustomizationProvider>
  );
};

export default Table;
