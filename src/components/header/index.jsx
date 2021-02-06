import React, { useEffect } from "react";
import { Canvas } from "react-three-fiber";
import { useSprings, animated } from "react-spring/three";
import { times } from "lodash";

const PARTICLES_NUMBER = 17;
const COLORS = ["#cdb4db", "#ffc8dd", "#ffafcc", "#bde0fe", "#a2d2ff"];

const random = (i) => {
  const r = Math.random();
  return {
    position: [100 - Math.random() * 200, 100 - Math.random() * 200, i * 1.5],
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))],
    scale: [1 + r * 14, 1 + r * 14, 1],
  };
};

const dimensions = times(PARTICLES_NUMBER, () => {
  return {
    args: [0.1 + Math.random(), 0.1 + Math.random()],
  };
});

function Content() {
  const [springs, set] = useSprings(PARTICLES_NUMBER, (i) => ({
    from: random(i),
    ...random(i),
    config: { mass: 20, tension: 150, friction: 50 },
  }));

  useEffect(
    () =>
      void setInterval(
        () => set((i) => ({ ...random(i), delay: i * 40 })),
        3000
      ),
    [set]
  );
  return dimensions.map((_dimention, index) => (
    <animated.mesh key={index} {...springs[index]} castShadow receiveShadow>
      <sphereGeometry attach="geometry" args={[1, 16, 16]} />
      <animated.meshStandardMaterial
        attach="material"
        color={springs[index].color}
        roughness={0.75}
        metalness={0.5}
      />
    </animated.mesh>
  ));
}

function Lights() {
  return (
    <group>
      <pointLight intensity={0.3} />
      <ambientLight intensity={2} />
      <spotLight
        castShadow
        intensity={0.2}
        angle={Math.PI / 6}
        position={[150, 150, 250]}
        penumbra={1}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
    </group>
  );
}

export default () => {
  return (
    <Canvas
      gl={{ antialias: false, alpha: false }}
      onCreated={({ gl }) => gl.setClearColor("white")}
      shadowMap
      camera={{ position: [0, 0, 100], fov: 100 }}
      style={{ position: "absolute", top: 0 }}
    >
      <Lights />
      <Content />
    </Canvas>
  );
};
