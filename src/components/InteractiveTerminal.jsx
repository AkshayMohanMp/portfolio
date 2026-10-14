import React, { useState, useRef, useEffect } from 'react';
import { terminalCommands } from '../data/portfolioData';
import { 
  Terminal as TerminalIcon, 
  Maximize2, 
  Minimize2, 
  X, 
  CornerDownLeft,
  Trash2
} from 'lucide-react';

export default function InteractiveTerminal({ isOpen, onClose, onOpenResume }) {
  const [history, setHistory] = useState([
    { type: 'system', text: 'Antigravity OS v4.19-go-systems (x86_64-linux)' },
    { type: 'system', text: 'Connected to sahas-gateway.internal [Zitadel mTLS Verified]' },
    { type: 'system', text: "Type 'help' for available commands, or click the quick action chips below." },
    { type: 'prompt', cmd: 'whoami' },
    ...terminalCommands.whoami.map(line => ({ type: 'output', text: line }))
  ]);
  const [inputVal, setInputVal] = useState('');
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [commandHistory, setCommandHistory] = useState(['whoami']);
  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleRunCommand = (cmdStr) => {
    const rawCmd = cmdStr.trim();
    const cmd = rawCmd.toLowerCase();

    if (!cmd) return;

    setCommandHistory(prev => [...prev, rawCmd]);
    setHistoryIndex(-1);

    if (cmd === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    if (cmd === 'cv' || cmd === 'resume') {
      setHistory(prev => [
        ...prev,
        { type: 'prompt', cmd: rawCmd },
        { type: 'output', text: 'Opening official printable resume viewer...' }
      ]);
      setInputVal('');
      setTimeout(() => onOpenResume(), 400);
      return;
    }

    if (cmd === 'neofetch') {
      const neofetchOutput = [
        "       __               OS: Linux (custom kernel 6.6-tuned)",
        "  .-. /  )              Host: AWS EC2 (t4g.xlarge) + Raspberry Pi 4",
        "  | |/  /               Kernel: 6.6.0-somaxconn4096",
        "  | |  /                Uptime: 2+ years production",
        "  | | /                 Packages: Go 1.23, Docker 26, ClickHouse 24",
        "  '-'/                  Shell: aky-cli 2.4",
        "                        RAM: 2048MiB / 16384MiB (pgx pool: 150)",
        "                        Auth: Zitadel OIDC + Cognito"
      ];
      setHistory(prev => [
        ...prev,
        { type: 'prompt', cmd: rawCmd },
        ...neofetchOutput.map(t => ({ type: 'output', text: t }))
      ]);
      setInputVal('');
      return;
    }

    if (cmd === 'curl /healthz' || cmd === 'curl health') {
      setHistory(prev => [
        ...prev,
        { type: 'prompt', cmd: rawCmd },
        { type: 'output', text: 'HTTP/1.1 200 OK' },
        { type: 'output', text: 'Content-Type: application/json' },
        { type: 'output', text: '{"status":"healthy","pgx_pool":{"min":20,"max":150,"in_use":14},"somaxconn":4096}' }
      ]);
      setInputVal('');
      return;
    }

    if (terminalCommands[cmd]) {
      setHistory(prev => [
        ...prev,
        { type: 'prompt', cmd: rawCmd },
        ...terminalCommands[cmd].map(t => ({ type: 'output', text: t }))
      ]);
    } else {
      setHistory(prev => [
        ...prev,
        { type: 'prompt', cmd: rawCmd },
        { type: 'error', text: `command not found: ${rawCmd}. Type 'help' to inspect commands.` }
      ]);
    }

    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleRunCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIdx = historyIndex + 1;
        if (nextIdx < commandHistory.length) {
          setHistoryIndex(nextIdx);
          setInputVal(commandHistory[commandHistory.length - 1 - nextIdx]);
        }
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInputVal(commandHistory[commandHistory.length - 1 - nextIdx]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal('');
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl h-[85vh] flex flex-col rounded-2xl bg-[#1D1B18] border border-[#3E3831] shadow-2xl overflow-hidden font-mono text-xs">
        
        {/* Terminal Header */}
        <div className="px-4 py-3 bg-[#26221D] border-b border-[#3E3831] flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#E06C75] cursor-pointer" onClick={onClose}></span>
            <span className="w-3 h-3 rounded-full bg-[#E5C07B]"></span>
            <span className="w-3 h-3 rounded-full bg-[#98C379]"></span>
            <span className="ml-2 text-[#E2DACB] font-semibold flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-[#E59866]" />
              <span>akshay@sahas-infra: ~ (aky-cli)</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setHistory([])}
              className="p-1 rounded text-[#9E9283] hover:text-[#FAF7F2] hover:bg-[#38332C]"
              title="Clear Terminal"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded text-[#9E9283] hover:text-[#FAF7F2] hover:bg-[#38332C]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <div 
          onClick={() => inputRef.current?.focus()}
          className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-2 text-[#EAE2D5] font-mono bg-[#181614]"
        >
          {history.map((item, idx) => (
            <div key={idx} className="leading-relaxed">
              {item.type === 'system' && (
                <div className="text-[#8A7F70] font-semibold">{item.text}</div>
              )}
              {item.type === 'prompt' && (
                <div className="flex items-center gap-2 text-[#E59866] mt-2">
                  <span className="text-[#86EFAC]">akshay@sahas-infra:~$</span>
                  <span className="text-white font-bold">{item.cmd}</span>
                </div>
              )}
              {item.type === 'output' && (
                <div className="text-[#D8CFBF] pl-2 whitespace-pre-wrap">{item.text}</div>
              )}
              {item.type === 'error' && (
                <div className="text-[#FCA5A5] pl-2 font-medium">{item.text}</div>
              )}
            </div>
          ))}

          {/* Active Command Line Input */}
          <div className="flex items-center gap-2 pt-1 text-[#E59866]">
            <span className="text-[#86EFAC] shrink-0">akshay@sahas-infra:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent border-none outline-none text-[#FAF7F2] font-mono caret-[#E59866]"
              autoFocus
              spellCheck={false}
            />
          </div>
          <div ref={terminalEndRef} />
        </div>

        {/* Terminal Quick-Chips Footer */}
        <div className="p-3 bg-[#26221D] border-t border-[#3E3831] flex flex-wrap items-center gap-2 text-[11px]">
          <span className="text-[#968A7A] mr-1 hidden sm:inline">QUICK COMMANDS:</span>
          {['help', 'whoami', 'benchmark', 'skills', 'projects', 'experience', 'contact', 'cv', 'neofetch', 'curl /healthz'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleRunCommand(cmd)}
              className="px-2.5 py-1 rounded bg-[#352F28] hover:bg-[#C25E38] hover:text-white text-[#DDD3C3] font-mono transition-colors border border-[#484035]"
            >
              {cmd}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}
