import { Plane } from "./Plane";
import { Canvas } from "@react-three/fiber";

export const World = ()=>{
    return(
        <Canvas>
            <color args={[1,0,0]} attach="background" />
            <ambientLight position={[1,0,1]} />
            <Plane />
        </Canvas>
    );
}