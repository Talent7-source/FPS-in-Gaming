
### 2. fps-counter/fps-counter.js

(function() {
    'use strict';
    let lastFrame = performance.now();
    let frameCount = 0;
    let lastFpsUpdate = performance.now();
    const calculateFPS = () => {
        const currentTime = performance.now();
        const deltaTime = currentTime - lastFrame;
        frameCount++;
        if (currentTime - lastFpsUpdate >= 1000) {
            const fps = Math.round((frameCount * 1000) / (currentTime - lastFpsUpdate));
            console.log(`FPS: ${fps}`);
            frameCount = 0;
            lastFpsUpdate = currentTime;}
        lastFrame = currentTime;
        window.requestAnimationFrame(calculateFPS);};
    calculateFPS();
})();



