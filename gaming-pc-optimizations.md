## 1. Windows OS Tweaks

| Script/Tool | Purpose | Usage |
|------------|---------|-------|
| `Disable-GameBar.ps1` | Disables Xbox Game Bar and DVR | Run as Administrator |
| `Optimize-WindowsServices.ps1` | Disables 15+ background services | `Set-ExecutionPolicy Bypass` required |
| `Ultimate-Performance.cmd` | Activates hidden power plan | Double-click to execute |
| `Fullscreen-Optimizations.reg` | Disables Windows fullscreen optimizations | Merge into registry |
| `Timer-Resolution.exe` | Sets system timer to 0.5ms | Run before gaming sessions |

## 2. Network Optimization

### DNS Optimization
🔧 **Why Change Your DNS?**  
The default DNS from your Internet Service Provider (ISP) often:
- Has slow response times
- Lacks proper caching
- May log your browsing data

🚀 **Recommended DNS Providers**:
| Provider | Primary DNS | Secondary DNS | Best For |
|----------|------------|--------------|----------|
| Cloudflare | 1.1.1.1 | 1.0.0.1 | Fastest global response |
| Google | 8.8.8.8 | 8.8.4.4 | Reliability |
| OpenDNS | 208.67.222.222 | 208.67.220.220 | Security filtering |

### How to Change DNS
#### **Router-Level (Recommended)**
1. Access your router admin page (usually `192.168.1.1`)
2. Navigate to WAN/DNS settings
3. Replace ISP DNS with preferred addresses
4. Reboot router

*✅ Benefits:*
- Applies to all connected devices
- No per-device configuration needed
- Improves all network traffic

#### **Windows PC**
``https://pureinfotech.com/change-dns-windows-10/``
```powershell
# Command to set Cloudflare DNS
Set-DnsClientServerAddress -InterfaceIndex (Get-NetAdapter).ifIndex -ServerAddresses ("1.1.1.1","1.0.0.1")
