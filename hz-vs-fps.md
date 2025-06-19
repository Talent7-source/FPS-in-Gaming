# Refresh Rate (Hz) vs Frames Per Second (FPS)

## Fundamental Definitions

| Term | Definition | Measured In | Controlled By |
|------|-----------|------------|--------------|
| **Refresh Rate (Hz)** | How many times your display updates per second | Hertz (Hz) | Monitor hardware |
| **Frames Per Second (FPS)** | How many frames your GPU renders per second | Frames (fps) | Graphics hardware/software |

![Hz vs FPS Diagram](https://media.discordapp.net/attachments/1338700281839489065/1385202814711758919/maxresdefault.png?ex=68553626&is=6853e4a6&hm=b585cbc406f5ec3e466c6cc1b4928bbccab6d99cdc0adbf38b85f23847634fb1&=&format=webp&quality=lossless&width=413&height=232)

## Key Relationships

### 1. Ideal Scenario: FPS = Refresh Rate
```math
\text{FPS} = \text{Hz} \quad \text{(Perfect synchronization)}
Example: 144 FPS on a 144Hz monitor

Result: Buttery smooth motion with no tearing

### 2. FPS > Refresh Rate (Wasted Frames)
\text{FPS} > \text{Hz} \quad \text{(e.g., 300 FPS on 144Hz monitor)}
Effects:

Screen tearing (multiple partial frames visible)

Increased GPU heat/power consumption

Solution: Enable V-Sync or cap FPS to refresh rate

### 3. FPS < Refresh Rate (Stuttering)
\text{FPS} < \text{Hz} \quad \text{(e.g., 45 FPS on 60Hz monitor)}
Effects:

Uneven frame pacing

Perceived stuttering

Solutions:

Enable VRR (GSync/FreeSync)

Use frame doubling (30→60Hz)
Frame Timing Comparison
Scenario	Frame Duration (60Hz)	Frame Duration (144Hz)
1 Frame	16.67ms	6.94ms
Ideal Input Lag	8.33ms	3.47ms
Adaptive Sync Technologies
NVIDIA G-Sync

Requires proprietary module

Works in 30Hz-144Hz range (varies by model)

AMD FreeSync

Open standard (DP 1.2a+)

Certified tiers: FreeSync, FreeSync Premium, FreeSync Premium Pro

VRR (HDMI 2.1)

Console-focused standard

Typically 48-120Hz range
