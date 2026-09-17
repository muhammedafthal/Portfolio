import React from "react";
import { GlassCard } from "../common/GlassCard";
import {
  Monitor,
  Server,
  Database,
  ShieldCheck,
  Cpu,
  ArrowRight,
  Layers,
} from "lucide-react";
import "./ArchitectureDiagram.css";

export const ArchitectureDiagram = ({
  title = "System Architecture Overview",
}) => {
  return (
    <GlassCard padding="relaxed" className="architecture-card">
      <div className="architecture-header">
        <Layers className="text-accent" size={22} />
        <h3>{title}</h3>
      </div>

      <div className="architecture-diagram-container">
        {/* Layer 1: Client Tier */}
        <div className="arch-node arch-node-client">
          <div className="arch-node-header">
            <Monitor size={20} className="text-accent" />
            <span>Frontend Client Layer</span>
          </div>
          <div className="arch-node-body">
            <strong>React.js SPA</strong>
            <ul>
              <li>Context State & Hooks</li>
              <li>Role-Guard Router</li>
              <li>Custom CSS Tokens</li>
            </ul>
          </div>
        </div>

        <div className="arch-arrow">
          <ArrowRight size={20} className="text-muted" />
          <span className="arch-arrow-label">HTTPS / JSON</span>
        </div>

        {/* Layer 2: API Gateway & Auth */}
        <div className="arch-node arch-node-gateway">
          <div className="arch-node-header">
            <ShieldCheck size={20} className="text-accent" />
            <span>Security & Auth Middleware</span>
          </div>
          <div className="arch-node-body">
            <strong>Express Middleware</strong>
            <ul>
              <li>JWT Bearer Verification</li>
              <li>RBAC Role Enforcer</li>
              <li>Rate Limit & Sanitization</li>
            </ul>
          </div>
        </div>

        <div className="arch-arrow">
          <ArrowRight size={20} className="text-muted" />
          <span className="arch-arrow-label">Controllers</span>
        </div>

        {/* Layer 3: Services & Database */}
        <div className="arch-node arch-node-backend">
          <div className="arch-node-header">
            <Database size={20} className="text-accent" />
            <span>Persistence & Data Layer</span>
          </div>
          <div className="arch-node-body">
            <strong>Node.js / MongoDB ODM</strong>
            <ul>
              <li>Controller Services</li>
              <li>Compound Slot Indexes</li>
              <li>Atomic Transaction Operations</li>
            </ul>
          </div>
        </div>
      </div>
    </GlassCard>
  );
};
