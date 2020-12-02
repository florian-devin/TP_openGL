#version 330 core

// Variable de sortie (sera utilisé comme couleur)
out vec4 color;

//Un Fragment Shader minimaliste
void main (void)
{
float x = gl_FragCoord.x/600;
float y = gl_FragCoord.y/600;
float r = 0.0;
float g = 0.0;
float b = 0.0;
float OmegaA = 0.5;
float OmegaB = 0.5;
if( ( (x-OmegaA)*(x-OmegaA) + (y-OmegaB)*(y-OmegaB) ) < 0.05)
r = 1.0;
else 
g = 0.5;

color = vec4(r,g,b,0.0);
}
