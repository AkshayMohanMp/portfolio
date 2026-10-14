import React, { useState } from 'react';
import { benchmarkExperiment } from '../data/portfolioData';
import { 
  Activity, 
  AlertTriangle, 
  CheckCircle2, 
  Cpu, 
  Database, 
  Terminal, 
  Code2, 
  BarChart3, 
  Zap,
  Sliders,
  Copy,
  Check
} from 'lucide-react';

export default function BenchmarkSimulator() {
  const [selectedTierIndex, setSelectedTierIndex] = useState(8); // Tier 225 (index 8) by default
  const [activeTab, setActiveTab] = useState('metrics'); // 'metrics', 'code', 'table'
  const [copiedCode, setCopiedCode] = useState(false);

  const currentTier = benchmarkExperiment.tiers[selectedTierIndex];
  const maxRps = 4000;
  const maxLatency = 2000;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(benchmarkExperiment.tuningSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="benchmark" className="py-20 bg-[#F6F1E7]/70 relative border-t border-[#E7DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EDE4D6] border border-[#DFCFC0] text-[#8C3A18] font-mono text-xs mb-3 font-semibold">
              <Activity className="w-3.5 h-3.5" />
              <span>BENCHMARK LAB</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#24211D] tracking-tight">
              11-Tier Concurrency & Kernel Optimization
            </h2>
            <p className="mt-2 text-[#635B52] max-w-2xl text-sm sm:text-base">
              A real production load-testing audit conducted at <span className="text-[#24211D] font-semibold">Sahas Labs</span>. Drag the concurrency slider to inspect how Go and kernel parameter tuning eliminated a critical capacity ceiling.
            </p>
          </div>

          {/* Navigation view tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#EBE3D5] border border-[#DFD6C7] self-start md:self-auto font-mono text-xs">
            <button
              onClick={() => setActiveTab('metrics')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'metrics'
                  ? 'bg-[#C25E38] text-white font-bold shadow-sm'
                  : 'text-[#686056] hover:text-[#24211D]'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Simulate</span>
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'code'
                  ? 'bg-[#C25E38] text-white font-bold shadow-sm'
                  : 'text-[#686056] hover:text-[#24211D]'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Kernel & Pgx Config</span>
            </button>
            <button
              onClick={() => setActiveTab('table')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'table'
                  ? 'bg-[#C25E38] text-white font-bold shadow-sm'
                  : 'text-[#686056] hover:text-[#24211D]'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>Audit Table</span>
            </button>
          </div>
        </div>

        {/* Interactive Controls & Metrics Display */}
        {activeTab === 'metrics' && (
          <div className="space-y-8">
            
            {/* Concurrency Selector Slider Card */}
            <div className="p-6 rounded-2xl bg-white border border-[#E7DFD3] shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div>
                  <span className="text-xs font-mono text-[#8C3A18] font-bold uppercase tracking-wider block">TEST SCENARIO</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-3xl font-extrabold text-[#24211D] font-mono">{currentTier.clients}</span>
                    <span className="text-[#686056] text-sm font-medium">Virtual Clients Concurrently Requesting Platform API</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className={`px-2.5 py-1 rounded-md text-xs font-mono border font-semibold ${
                    currentTier.clients >= 225
                      ? 'bg-[#FEE2E2] text-[#B91C1C] border-[#FCA5A5]'
                      : 'bg-[#EDF5EE] text-[#1B5E20] border-[#CDE3D2]'
                  }`}>
                    {currentTier.clients >= 225 ? '⚠️ Legacy Collapse Zone' : '✓ Normal Load'}
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#F4EDE2] text-[#5A5045] border border-[#E3D8C8]">
                    Tier {selectedTierIndex + 1} of 11
                  </span>
                </div>
              </div>

              {/* Slider */}
              <div className="space-y-2">
                <input
                  type="range"
                  min="0"
                  max={benchmarkExperiment.tiers.length - 1}
                  value={selectedTierIndex}
                  onChange={(e) => setSelectedTierIndex(Number(e.target.value))}
                  className="w-full h-2.5 bg-[#EBE4D6] rounded-lg appearance-none cursor-pointer accent-[#C25E38]"
                />
                
                {/* Tiers Ticks */}
                <div className="flex justify-between text-[11px] font-mono text-[#8C8377] pt-1 overflow-x-auto">
                  {benchmarkExperiment.tiers.map((t, idx) => (
                    <button
                      key={t.clients}
                      onClick={() => setSelectedTierIndex(idx)}
                      className={`hover:text-[#C25E38] transition-colors px-1 ${
                        selectedTierIndex === idx ? 'text-[#C25E38] font-bold' : ''
                      }`}
                    >
                      {t.clients}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Comparison Grid: Legacy vs Optimized Go */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Card 1: Legacy Express.js Architecture */}
              <div className={`p-6 rounded-2xl border transition-all ${
                currentTier.clients >= 225
                  ? 'bg-[#FFF8F8] border-[#F87171] shadow-md shadow-rose-900/05'
                  : 'bg-white border-[#E7DFD3]'
              }`}>
                <div className="flex items-center justify-between pb-4 border-b border-[#F0E8DC] mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E05252]"></span>
                    <h3 className="font-semibold text-[#24211D] text-base">Legacy Express.js Architecture</h3>
                  </div>
                  <span className="text-xs font-mono text-[#857B70]">Default Node runtime</span>
                </div>

                <div className="space-y-5">
                  {/* Throughput */}
                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1.5">
                      <span className="text-[#736A5E]">THROUGHPUT</span>
                      <span className="text-[#24211D] font-bold">{currentTier.beforeRps} req/s</span>
                    </div>
                    <div className="h-2.5 bg-[#EFE9DF] rounded-full overflow-hidden">
                      <div 
                        className={`h-full transition-all duration-300 ${
                          currentTier.clients >= 225 ? 'bg-[#DC2626]' : 'bg-[#A8A29E]'
                        }`}
                        style={{ width: `${Math.min(100, (currentTier.beforeRps / maxRps) * 100)}%` }}
                      />
                    </div>
                  </div>

                  {/* Latency (p95) */}
                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1.5">
                      <span className="text-[#736A5E]">p95 LATENCY</span>
                      <span className={`font-bold ${currentTier.beforeP95 > 200 ? 'text-[#DC2626]' : 'text-[#24211D]'}`}>
                        {currentTier.beforeP95} ms
                      </span>
                    </div>
                    <div className="h-2.5 bg-[#EFE9DF] rounded-full overflow-hidden">
                      <div 
                        className={`h-full transition-all duration-300 ${
                          currentTier.beforeP95 > 500 ? 'bg-[#DC2626]' : 'bg-[#D97706]'
                        }`}
                        style={{ width: `${Math.min(100, (currentTier.beforeP95 / maxLatency) * 100)}%` }}
                      />
                    </div>
                  </div>

                  {/* Error Rate */}
                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1.5">
                      <span className="text-[#736A5E]">ERROR / TIMEOUT RATE</span>
                      <span className={`font-bold ${currentTier.beforeErrors > 0 ? 'text-[#DC2626]' : 'text-[#4A4238]'}`}>
                        {currentTier.beforeErrors}%
                      </span>
                    </div>
                    <div className="h-2.5 bg-[#EFE9DF] rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-[#DC2626] transition-all duration-300"
                        style={{ width: `${currentTier.beforeErrors}%` }}
                      />
                    </div>
                  </div>

                  {/* Condition diagnosis */}
                  <div className={`p-3 rounded-xl border text-xs font-mono leading-relaxed ${
                    currentTier.clients >= 225
                      ? 'bg-[#FEE2E2] border-[#FCA5A5] text-[#991B1B]'
                      : 'bg-[#FAF7F2] border-[#E8E1D5] text-[#696156]'
                  }`}>
                    {currentTier.clients >= 225 ? (
                      <div className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                        <div>
                          <strong>CAPACITY CEILING REACHED:</strong> 495 socket errors. Default SOMAXCONN (128) overflowing, bcrypt CPU saturation, 99.3% timeouts.
                        </div>
                      </div>
                    ) : (
                      <div>Traffic handling within basic bounds, but high p-latency degradation starting past 150 clients.</div>
                    )}
                  </div>
                </div>
              </div>

              {/* Card 2: Optimized Go Backend + Kernel Tuning */}
              <div className="p-6 rounded-2xl bg-white border-2 border-[#D9CEBE] shadow-md relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 border-b border-[#F0E8DC] mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#2E7D32] animate-pulse"></span>
                    <h3 className="font-semibold text-[#24211D] text-base">Optimized Go Backend</h3>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#EDF5EE] text-[#1B5E20] border border-[#CDE3D2] font-semibold">
                    +96.1% SUSTAINED
                  </span>
                </div>

                <div className="space-y-5">
                  {/* Throughput */}
                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1.5">
                      <span className="text-[#736A5E]">THROUGHPUT</span>
                      <span className="text-[#C25E38] font-bold">{currentTier.afterRps} req/s</span>
                    </div>
                    <div className="h-2.5 bg-[#EFE9DF] rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-[#C25E38] transition-all duration-300"
                        style={{ width: `${Math.min(100, (currentTier.afterRps / maxRps) * 100)}%` }}
                      />
                    </div>
                  </div>

                  {/* Latency (p95) */}
                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1.5">
                      <span className="text-[#736A5E]">p95 LATENCY</span>
                      <span className="text-[#2D6A4F] font-bold">{currentTier.afterP95} ms</span>
                    </div>
                    <div className="h-2.5 bg-[#EFE9DF] rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-[#2D6A4F] transition-all duration-300"
                        style={{ width: `${Math.max(3, Math.min(100, (currentTier.afterP95 / maxLatency) * 100))}%` }}
                      />
                    </div>
                  </div>

                  {/* Error Rate */}
                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1.5">
                      <span className="text-[#736A5E]">ERROR RATE</span>
                      <span className="text-[#2D6A4F] font-bold">{currentTier.afterErrors}% (Zero Drops at 225)</span>
                    </div>
                    <div className="h-2.5 bg-[#EFE9DF] rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-[#2D6A4F] transition-all duration-300"
                        style={{ width: `${Math.max(1, currentTier.afterErrors)}%` }}
                      />
                    </div>
                  </div>

                  {/* Condition diagnosis */}
                  <div className="p-3 rounded-xl bg-[#EDF5EE] border border-[#CDE3D2] text-[#1B5E20] text-xs font-mono leading-relaxed">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0 mt-0.5" />
                      <div>
                        <strong>OPTIMAL RESILIENCE:</strong> pgx pool (min:20 max:150) absorbing concurrency spikes; kernel socket backlog (4096) queues connections cleanly; zero drops up to 225 clients.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Tuning highlights banner */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-[#E7DFD3] shadow-2xs flex items-start gap-3">
                <Database className="w-5 h-5 text-[#C25E38] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-mono text-[#8C3A18] font-bold uppercase">pgx Connection Pool</h4>
                  <p className="text-xs text-[#5E564D] mt-1">
                    Calibrated min 20 / max 150 pool. Eliminated database thread thrashing and socket exhaustion under sudden client traffic surges.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E7DFD3] shadow-2xs flex items-start gap-3">
                <Cpu className="w-5 h-5 text-[#2D6A4F] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-mono text-[#2D6A4F] font-bold uppercase">Linux somaxconn 4096</h4>
                  <p className="text-xs text-[#5E564D] mt-1">
                    Expanded socket listen queue from kernel default 128 to 4096. Eliminated TCP SYN backlog packet drops before application accept.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E7DFD3] shadow-2xs flex items-start gap-3">
                <Zap className="w-5 h-5 text-[#B45309] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-mono text-[#B45309] font-bold uppercase">Bcrypt Cost Calibration</h4>
                  <p className="text-xs text-[#5E564D] mt-1">
                    Calibrated bcrypt work factor to 10 for auth storm resilience without sacrificing entropy, unblocking CPU bound worker goroutines.
                  </p>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* View Tab 2: Go Code & Linux Kernel Snippets */}
        {activeTab === 'code' && (
          <div className="p-6 rounded-2xl bg-[#24211D] border border-[#3E3831] shadow-xl text-[#FAF7F2]">
            <div className="flex items-center justify-between pb-4 border-b border-[#3E3831] mb-4">
              <div className="flex items-center gap-2 font-mono text-xs text-[#D8CFBF]">
                <Terminal className="w-4 h-4 text-[#E59866]" />
                <span>tuning_recipe.go + sysctl.conf</span>
              </div>
              <button
                onClick={handleCopyCode}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-[#38332C] hover:bg-[#484239] text-[#FAF7F2] transition-colors"
              >
                {copiedCode ? <Check className="w-3.5 h-3.5 text-[#86EFAC]" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedCode ? 'Copied' : 'Copy Snippet'}</span>
              </button>
            </div>

            <pre className="p-4 rounded-xl bg-[#1A1815] font-mono text-xs text-[#EFE8DC] overflow-x-auto leading-relaxed border border-[#352F28]">
              <code>{benchmarkExperiment.tuningSnippet}</code>
            </pre>

            <div className="mt-4 p-4 rounded-xl bg-[#322C24] border border-[#483F34] text-xs text-[#E5D7C2]">
              <strong className="text-[#E59866]">Horizontal Scale Path:</strong> Following this single-node benchmark, Akshay specified the horizontal replica path placing stateless Go nodes behind AWS Application Load Balancers with Nginx reverse proxying, enabling linear scale beyond 10,000+ industrial device streams.
            </div>
          </div>
        )}

        {/* View Tab 3: Complete 11-Tier Audit Table */}
        {activeTab === 'table' && (
          <div className="rounded-2xl bg-white border border-[#E7DFD3] overflow-hidden shadow-sm">
            <div className="p-4 border-b border-[#EFEAE2] flex justify-between items-center bg-[#FAF7F2] font-mono text-xs">
              <span className="text-[#24211D] font-semibold">Client-Facing Concurrency Capacity Audit (11 Tiers)</span>
              <span className="text-[#736A5E]">Sahas Labs IoT Platform</span>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left font-mono text-xs">
                <thead className="bg-[#FAF7F2] text-[#696156] border-b border-[#EAE3D7]">
                  <tr>
                    <th className="p-3">Clients</th>
                    <th className="p-3">Legacy RPS</th>
                    <th className="p-3">Legacy p95</th>
                    <th className="p-3">Legacy Err</th>
                    <th className="p-3 text-[#C25E38]">Optimized Go RPS</th>
                    <th className="p-3 text-[#2D6A4F]">Optimized p95</th>
                    <th className="p-3 text-[#2D6A4F]">Go Err</th>
                    <th className="p-3 text-right">Delta</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F0E8DC] text-[#4A4238]">
                  {benchmarkExperiment.tiers.map((t) => {
                    const diffPct = Math.round(((t.afterRps - t.beforeRps) / t.beforeRps) * 100);
                    const isCollapse = t.clients >= 225;
                    return (
                      <tr key={t.clients} className={`hover:bg-[#FAF6EE] transition-colors ${isCollapse ? 'bg-[#FFF8F8]' : ''}`}>
                        <td className="p-3 font-bold text-[#24211D]">{t.clients}</td>
                        <td className="p-3 text-[#786F63]">{t.beforeRps} rps</td>
                        <td className="p-3 text-[#786F63]">{t.beforeP95} ms</td>
                        <td className={`p-3 ${t.beforeErrors > 0 ? 'text-[#DC2626] font-bold' : 'text-[#786F63]'}`}>
                          {t.beforeErrors}%
                        </td>
                        <td className="p-3 text-[#C25E38] font-bold">{t.afterRps} rps</td>
                        <td className="p-3 text-[#2D6A4F] font-bold">{t.afterP95} ms</td>
                        <td className="p-3 text-[#2D6A4F] font-semibold">{t.afterErrors}%</td>
                        <td className="p-3 text-right font-bold text-[#C25E38]">+{diffPct}%</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
