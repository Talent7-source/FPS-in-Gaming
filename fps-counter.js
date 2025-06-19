
### 2. fps-counter/fps-counter.js

```javascript
/**
 * Frames Per Second (FPS) Counter
 * 
 * A high-performance FPS counter using requestAnimationFrame
 * Provides both console output and visual display options
 */

(function() {
    'use strict';
    
    // Configuration
    const config = {
        updateInterval: 1000,    // ms between FPS updates
        showConsoleLog: true,    // Display FPS in console
        showVisualDisplay: true, // Display FPS on screen
        decimalPrecision: 1      // Decimal places for FPS
    };
    
    // State variables
    let lastFrame = performance.now();
    let frameCount = 0;
    let lastFpsUpdate = performance.now();
    let currentFPS = 0;
    
    // Create visual display element if enabled
    if (config.showVisualDisplay) {
        const fpsDisplay = document.createElement('div');
        fpsDisplay.id = 'fps-counter';
        fpsDisplay.style.position = 'fixed';
        fpsDisplay.style.bottom = '10px';
        fpsDisplay.style.right = '10px';
        fpsDisplay.style.color = 'white';
        fpsDisplay.style.backgroundColor = 'rgba(0,0,0,0.7)';
        fpsDisplay.style.padding = '5px 10px';
        fpsDisplay.style.borderRadius = '3px';
        fpsDisplay.style.fontFamily = 'Arial, sans-serif';
        fpsDisplay.style.zIndex = '9999';
        document.body.appendChild(fpsDisplay);
    }
    
    /**
     * Main FPS calculation function
     */
    const calculateFPS = () => {
        const currentTime = performance.now();
        frameCount++;
        
        // Update FPS display every configured interval
        if (currentTime - lastFpsUpdate >= config.updateInterval) {
            currentFPS = (frameCount * 1000) / (currentTime - lastFpsUpdate);
            
            if (config.showConsoleLog) {
                console.log(`FPS: ${currentFPS.toFixed(config.decimalPrecision)}`);
            }
            
            if (config.showVisualDisplay) {
                const fpsDisplay = document.getElementById('fps-counter');
                if (fpsDisplay) {
                    fpsDisplay.textContent = `FPS: ${currentFPS.toFixed(config.decimalPrecision)}`;
                    
                    // Color coding
                    if (currentFPS < 30) {
                        fpsDisplay.style.color = 'red';
                    } else if (currentFPS < 60) {
                        fpsDisplay.style.color = 'yellow';
                    } else {
                        fpsDisplay.style.color = 'lime';
                    }
                }
            }
            
            frameCount = 0;
            lastFpsUpdate = currentTime;
        }
        
        lastFrame = currentTime;
        window.requestAnimationFrame(calculateFPS);
    };
    
    // Start the counter
    calculateFPS();
})();




