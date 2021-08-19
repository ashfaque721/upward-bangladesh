import React from 'react';
import Particles from 'react-particles-js';
import particleConfig3 from './particles-config3';
import '../assets/css/particle.css';

export default function ParticleBackground3() {
    return (
        <Particles className="example" params={particleConfig3} height="30vh" width="100vw"></Particles>
    );
}