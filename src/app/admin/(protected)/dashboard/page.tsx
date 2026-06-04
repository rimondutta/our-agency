"use client";

import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';
import {
  FolderKanban, Users, Megaphone, Activity, FileText,
  ArrowUpRight, ArrowDownRight, MonitorSmartphone,
  Search, Share2, Briefcase, Calendar
} from 'lucide-react';
import Preloader from "@/components/utilities/Preloader";

// Mock Data for Charts
const revenueData = [
  { name: 'Jan', revenue: 65000, projects: 12 },
  { name: 'Feb', revenue: 78000, projects: 14 },
  { name: 'Mar', revenue: 92000, projects: 18 },
  { name: 'Apr', revenue: 88000, projects: 15 },
  { name: 'May', revenue: 105000, projects: 22 },
  { name: 'Jun', revenue: 128400, projects: 24 },
];

const serviceData = [
  { name: 'Web Dev', value: 42, color: '#00D4FF' },
  { name: 'SEO/SEM', value: 28, color: '#8B5CF6' },
  { name: 'Social Media', value: 18, color: '#F59E0B' },
  { name: 'Branding', value: 12, color: '#EF4444' },
];

const activeProjects = [
  { id: 1, name: 'Nexora Corp Redesign', client: 'Nexora Corp', channel: 'Web Dev', progress: 85, due: '2026-06-10', status: 'On Track' },
  { id: 2, name: 'BlueWave SEO Boost', client: 'BlueWave', channel: 'SEO', progress: 45, due: '2026-06-15', status: 'At Risk' },
  { id: 3, name: 'Stratify Branding', client: 'Stratify Inc', channel: 'Branding', progress: 95, due: '2026-06-05', status: 'Overdue' },
  { id: 4, name: 'Alpha SaaS Platform', client: 'Alpha Co', channel: 'Web Dev', progress: 20, due: '2026-07-20', status: 'On Track' },
];

const activities = [
  { id: 1, action: 'Deployed v2.3 for Nexora Corp', time: '2 hours ago', icon: <MonitorSmartphone size={16} /> },
  { id: 2, action: 'SEO campaign went live for BlueWave', time: '4 hours ago', icon: <Search size={16} /> },
  { id: 3, action: 'Invoice #1042 paid by Stratify', time: '1 day ago', icon: <FileText size={16} /> },
  { id: 4, action: 'Client kickoff with Alpha Co', time: '2 days ago', icon: <Briefcase size={16} /> },
];

const teamWorkload = [
  { id: 1, name: 'Sarah J.', role: 'Lead Dev', load: 85 },
  { id: 2, name: 'Mike T.', role: 'SEO Spec', load: 60 },
  { id: 3, name: 'Elena R.', role: 'Designer', load: 92 },
];

export default function DashboardPage() {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('30D');
  const [stats, setStats] = useState({ services: 0, portfolio: 0, blogs: 0, team: 0 });

  useEffect(() => {
    setMounted(true);
    const fetchStats = async () => {
      try {
        const res = await fetch("/api/admin/stats");
        const data = await res.json();
        if (data.success) {
          setStats({
            services: data.data.services || 0,
            portfolio: data.data.portfolio || 0,
            blogs: data.data.blogs || 0,
            team: data.data.team || 0,
          });
        }
      } catch {
        // silently fail
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  if (!mounted || loading) return <Preloader />;

  return (
    <div className="dashboardGrid">
      {/* Row 1: KPIs */}
      <div className={`card col3 animateSlideUp delay0 kpiCard cyan`}>
        <div className="cardHeader">
          <h3 className="cardTitle">Total Services</h3>
          <div className={`kpiIcon cyan`}><Activity size={20} /></div>
        </div>
        <div className="kpiValue">
          <CountUp end={stats.services} duration={1.2} />
        </div>
        <div className="kpiMeta">
          <span className={`delta up`}><ArrowUpRight size={14}/> Active</span>
          <span className="kpiSubtitle">Service offerings</span>
        </div>
      </div>

      <div className={`card col3 animateSlideUp delay1 kpiCard violet`}>
        <div className="cardHeader">
          <h3 className="cardTitle">Portfolio Items</h3>
          <div className={`kpiIcon violet`}><FolderKanban size={20} /></div>
        </div>
        <div className="kpiValue">
          <CountUp end={stats.portfolio} duration={1.2} />
        </div>
        <div className="kpiMeta">
          <span className={`delta neutral`}>Live</span>
          <span className="kpiSubtitle">Completed projects</span>
        </div>
      </div>

      <div className={`card col3 animateSlideUp delay2 kpiCard amber`}>
        <div className="cardHeader">
          <h3 className="cardTitle">Blog Posts</h3>
          <div className={`kpiIcon amber`}><FileText size={20} /></div>
        </div>
        <div className="kpiValue">
          <CountUp end={stats.blogs} duration={1.2} />
        </div>
        <div className="kpiMeta">
          <span className={`delta up`}><ArrowUpRight size={14}/> Fresh</span>
          <span className="kpiSubtitle">Articles published</span>
        </div>
      </div>

      <div className={`card col3 animateSlideUp delay3 kpiCard cyan`}>
        <div className="cardHeader">
          <h3 className="cardTitle">Team Members</h3>
          <div className={`kpiIcon cyan`}><Users size={20} /></div>
        </div>
        <div className="kpiValue">
          <CountUp end={stats.team} duration={1.2} />
        </div>
        <div className="kpiMeta">
          <span className={`delta neutral`}>Staff</span>
          <span className="kpiSubtitle">Total headcount</span>
        </div>
      </div>

      {/* Row 2: Charts */}
      <div className={`card col8 animateSlideUp delay4`}>
        <div className="cardHeader">
          <h3 className="cardTitle">Revenue & Project Delivery</h3>
          <div className="chartTabs">
            <button className={`chartTab`} onClick={() => setActiveTab('7D')}>7D</button>
            <button className={`chartTab ${activeTab === '30D' ? 'active' : ''}`} onClick={() => setActiveTab('30D')}>30D</button>
            <button className={`chartTab`} onClick={() => setActiveTab('90D')}>90D</button>
            <button className={`chartTab`} onClick={() => setActiveTab('1Y')}>1Y</button>
          </div>
        </div>
        <div className="chartContainer">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--accent-cyan)" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="var(--accent-cyan)" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorProjects" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--accent-violet)" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="var(--accent-violet)" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
              <XAxis dataKey="name" stroke="var(--text-muted)" tick={{ fill: 'var(--text-muted)', fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis yAxisId="left" stroke="var(--text-muted)" tick={{ fill: 'var(--text-muted)', fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis yAxisId="right" orientation="right" stroke="var(--text-muted)" tick={{ fill: 'var(--text-muted)', fontSize: 12 }} axisLine={false} tickLine={false} />
              <RechartsTooltip 
                contentStyle={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-light)', borderRadius: '8px' }}
                itemStyle={{ color: 'var(--text-main)', fontFamily: 'var(--font-mono)' }}
              />
              <Area yAxisId="left" type="monotone" dataKey="revenue" stroke="var(--accent-cyan)" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" animationDuration={1500} />
              <Area yAxisId="right" type="monotone" dataKey="projects" stroke="var(--accent-violet)" strokeWidth={3} fillOpacity={1} fill="url(#colorProjects)" animationDuration={1500} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className={`card col4 animateSlideUp delay5`}>
        <div className="cardHeader">
          <h3 className="cardTitle">Service Breakdown</h3>
        </div>
        <div className="chartContainer" style={{ height: '240px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={serviceData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={5}
                dataKey="value"
                animationDuration={1500}
              >
                {serviceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} style={{ filter: `drop-shadow(0px 0px 8px ${entry.color}66)` }} />
                ))}
              </Pie>
              <RechartsTooltip 
                contentStyle={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-light)', borderRadius: '8px' }}
                itemStyle={{ color: 'var(--text-main)', fontFamily: 'var(--font-mono)' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '16px' }}>
          {serviceData.map((s, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: s.color, boxShadow: `0 0 8px ${s.color}88` }}></div>
              <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{s.name} ({s.value}%)</span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 3: Tables & Activity */}
      <div className={`card col7 animateSlideUp delay5`}>
        <div className="cardHeader">
          <h3 className="cardTitle">Active Projects</h3>
          <button style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', fontSize: '12px', cursor: 'pointer' }}>View All</button>
        </div>
        <div className="tableContainer">
          <table className="table">
            <thead>
              <tr>
                <th>Project</th>
                <th>Progress</th>
                <th>Due Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {activeProjects.map((proj) => (
                <tr key={proj.id}>
                  <td>
                    <div className="projectName">
                      {proj.name}
                    </div>
                    <div className="projectClient">{proj.channel} • {proj.client}</div>
                  </td>
                  <td style={{ width: '150px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px' }}>
                      <div className="progressBg">
                        <div className="progressFill" style={{ width: `${proj.progress}%`, background: proj.status === 'On Track' ? 'var(--accent-cyan)' : proj.status === 'At Risk' ? 'var(--accent-amber)' : 'var(--accent-red)', boxShadow: `0 0 10px ${proj.status === 'On Track' ? 'var(--accent-cyan)' : proj.status === 'At Risk' ? 'var(--accent-amber)' : 'var(--accent-red)'}` }}></div>
                      </div>
                      <span>{proj.progress}%</span>
                    </div>
                  </td>
                  <td>
                    <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{proj.due}</span>
                  </td>
                  <td>
                    <span className={`badge ${proj.status === 'On Track' ? 'cyan' : proj.status === 'At Risk' ? 'amber' : 'red'}`}>
                      {proj.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className={`card col5 animateSlideUp delay5`}>
        <div className="cardHeader">
          <h3 className="cardTitle">Recent Activity Feed</h3>
        </div>
        <div className="activityList">
          {activities.map((act) => (
            <div key={act.id} className="activityItem">
              <div className="activityAvatar">
                {act.icon}
              </div>
              <div className="activityContent">
                <div className="activityText">{act.action}</div>
                <div className="activityTime">{act.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 4: Bottom Row */}
      <div className={`card col4 animateSlideUp delay5`}>
        <div className="cardHeader">
          <h3 className="cardTitle">Team Workload</h3>
        </div>
        <div className="miniList">
          {teamWorkload.map(member => (
            <div key={member.id} className="miniListItem">
              <div className="miniListLeft">
                <div className="avatar" style={{ width: '32px', height: '32px' }}>
                   <img src={`https://i.pravatar.cc/150?u=${member.name}`} alt={member.name} />
                </div>
                <div>
                  <div className="miniTitle">{member.name}</div>
                  <div className="miniSub">{member.role}</div>
                </div>
              </div>
              <div className="miniRight">
                <div className="miniValue">{member.load}%</div>
                <div className="progressBg" style={{ width: '60px', marginTop: '4px', height: '4px' }}>
                  <div className="progressFill" style={{ width: `${member.load}%`, background: member.load > 90 ? 'var(--accent-red)' : 'var(--accent-cyan)' }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={`card col4 animateSlideUp delay5`}>
        <div className="cardHeader">
          <h3 className="cardTitle">Top Campaigns</h3>
        </div>
        <div className="miniList">
          <div className="miniListItem">
            <div className="miniListLeft">
              <div className="iconBox" style={{ color: '#4285F4' }}><Search size={18} /></div>
              <div>
                <div className="miniTitle">Q2 Search Ads</div>
                <div className="miniSub">Google Ads</div>
              </div>
            </div>
            <div className="miniRight">
              <div className="miniValue">3.2x</div>
              <div className={`delta up`} style={{ padding: '0', background: 'none', fontSize: '12px' }}><ArrowUpRight size={12}/> ROAS</div>
            </div>
          </div>
          <div className="miniListItem">
            <div className="miniListLeft">
              <div className="iconBox" style={{ color: '#0A66C2' }}><Share2 size={18} /></div>
              <div>
                <div className="miniTitle">B2B Lead Gen</div>
                <div className="miniSub">LinkedIn</div>
              </div>
            </div>
            <div className="miniRight">
              <div className="miniValue">2.8x</div>
              <div className={`delta up`} style={{ padding: '0', background: 'none', fontSize: '12px' }}><ArrowUpRight size={12}/> ROAS</div>
            </div>
          </div>
          <div className="miniListItem">
            <div className="miniListLeft">
              <div className="iconBox" style={{ color: '#E1306C' }}><Share2 size={18} /></div>
              <div>
                <div className="miniTitle">Summer Promo</div>
                <div className="miniSub">Instagram</div>
              </div>
            </div>
            <div className="miniRight">
              <div className="miniValue">1.5x</div>
              <div className={`delta down`} style={{ padding: '0', background: 'none', fontSize: '12px' }}><ArrowDownRight size={12}/> ROAS</div>
            </div>
          </div>
        </div>
      </div>

      <div className={`card col4 animateSlideUp delay5`}>
        <div className="cardHeader">
          <h3 className="cardTitle">Upcoming Deadlines</h3>
        </div>
        <div className="miniList">
          <div className="miniListItem">
            <div className="miniListLeft">
              <div className="iconBox" style={{ background: 'var(--accent-red-bg)', color: 'var(--accent-red)' }}><Calendar size={18} /></div>
              <div>
                <div className="miniTitle">Stratify Branding</div>
                <div className="miniSub">Due Tomorrow</div>
              </div>
            </div>
          </div>
          <div className="miniListItem">
            <div className="miniListLeft">
              <div className="iconBox" style={{ background: 'rgba(255,255,255,0.05)' }}><Calendar size={18} /></div>
              <div>
                <div className="miniTitle">Nexora Corp Redesign</div>
                <div className="miniSub">Due in 4 Days</div>
              </div>
            </div>
          </div>
          <div className="miniListItem">
            <div className="miniListLeft">
              <div className="iconBox" style={{ background: 'rgba(255,255,255,0.05)' }}><Calendar size={18} /></div>
              <div>
                <div className="miniTitle">BlueWave SEO Boost</div>
                <div className="miniSub">Due in 9 Days</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}