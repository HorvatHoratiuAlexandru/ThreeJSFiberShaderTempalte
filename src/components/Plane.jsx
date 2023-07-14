import { Clock, Vector2 } from "three";
import { basicFragShader, faroundFragShader } from "../shaders";
import { useFrame } from "@react-three/fiber";

export const Plane = () =>{
    const clock = new Clock();

    const uniforms = {
        u_time: {type:'f', value:0},
        u_resolution: {type:'v2', value: new Vector2(window.screen.width, window.screen.height)}        
    }

    useFrame(()=>{
        uniforms.u_time.value = clock.getElapsedTime();
    });
    return(
        <mesh>
            <planeGeometry args={[7,7]}/>
            <shaderMaterial
                uniforms={uniforms}
                fragmentShader={faroundFragShader}
                />
        </mesh>
    );
}