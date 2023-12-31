export const basicFragShader = `

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main(){
    vec3 color = vec3(0.0);

    gl_FragColor= vec4(color, 1.0);
}
`;

export const faroundFragShader = `

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main(){
    vec2 st = gl_FragCoord.xy / u_resolution;

    float y = st.x;

    vec3 color = vec3(y, abs(sin(u_time*y)), 0.0);

    gl_FragColor= vec4(color, 1.0);
}
`;