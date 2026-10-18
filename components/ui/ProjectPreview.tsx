import {
  Bell,
  ChartNoAxesCombined,
  CircleHelp,
  House,
  LayoutDashboard,
  LifeBuoy,
  LockKeyhole,
  Settings,
  ShieldCheck,
  Ticket,
  Users,
  Vote,
} from 'lucide-react';
import type { ProjectId } from '@/lib/site';

function Toolbar({ address }: { address: string }) {
  return (
    <div className="browser-toolbar">
      <div className="window-dots">
        <i />
        <i />
        <i />
      </div>
      <div className="browser-address">
        <LockKeyhole size={7} />
        <span>{address}</span>
      </div>
    </div>
  );
}

export default function ProjectPreview({ id }: { id: ProjectId }) {
  if (id === 'cuvote') {
    return (
      <div
        className="project-preview preview-vote"
        role="img"
        aria-label="CUVote platform preview: an election dashboard with voter statistics and active elections"
      >
        <div className="preview-browser">
          <Toolbar address="app.cuvote / dashboard" />
          <div className="mock-app">
            <div className="mock-sidebar">
              <div className="mock-logo">
                <Vote size={15} className="text-electric" />
                <span>CUVote</span>
                <span className="text-electric">.</span>
              </div>
              <div className="mock-nav-item active">
                <LayoutDashboard size={9} />
                <span>Overview</span>
              </div>
              <div className="mock-nav-item">
                <Vote size={9} />
                <span>Elections</span>
              </div>
              <div className="mock-nav-item">
                <Users size={9} />
                <span>Voters</span>
              </div>
              <div className="mock-nav-item">
                <ChartNoAxesCombined size={9} />
                <span>Results</span>
              </div>
              <div className="mock-nav-item">
                <Settings size={9} />
                <span>Settings</span>
              </div>
              <div className="mock-sidebar-footer">◉ Campus workspace</div>
            </div>

            <div className="mock-main">
              <div className="mock-breadcrumb">Workspace / Overview</div>
              <div className="mock-title-row">
                <div>
                  <h4>Every voice counts.</h4>
                  <p>A clearer view of your campus elections.</p>
                </div>
                <span className="mock-action">＋ Create election</span>
              </div>

              <div className="mock-stats">
                <div className="mock-stat">
                  <span>Registered voters</span>
                  <strong>2,480</strong>
                  <small>↗ Verified &amp; ready</small>
                </div>
                <div className="mock-stat">
                  <span>Votes cast</span>
                  <strong>1,846</strong>
                  <small>↗ 74.4% participation</small>
                </div>
                <div className="mock-stat">
                  <span>Active elections</span>
                  <strong>03</strong>
                  <small>● Systems operational</small>
                </div>
              </div>

              <div className="mock-election">
                <div className="mock-election-title">
                  <span>Student Council Election</span>
                  <span className="mock-live">● Voting is live</span>
                </div>
                <div className="mock-candidates">
                  <div className="mock-candidate">
                    <span className="mock-avatar">AO</span>
                    <div>
                      <strong>Alex Okafor</strong>
                      <small>Presidential candidate</small>
                    </div>
                  </div>
                  <div className="mock-candidate">
                    <span className="mock-avatar">JA</span>
                    <div>
                      <strong>Jordan Adeyemi</strong>
                      <small>Presidential candidate</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="project-preview preview-tickets"
      role="img"
      aria-label="Enterprise IT dashboard preview: dark helpdesk interface with ticket metrics and service requests"
    >
      <div className="preview-browser ticket-browser">
        <Toolbar address="workspace / service-desk" />
        <div className="mock-app">
          <div className="mock-sidebar">
            <div className="mock-logo">
              <LifeBuoy size={15} className="text-electric" />
              <span>ServiceDesk</span>
            </div>
            <div className="mock-nav-item active">
              <House size={9} />
              <span>Overview</span>
            </div>
            <div className="mock-nav-item">
              <Ticket size={9} />
              <span>All tickets</span>
            </div>
            <div className="mock-nav-item">
              <Users size={9} />
              <span>Team</span>
            </div>
            <div className="mock-nav-item">
              <Bell size={9} />
              <span>Notifications</span>
            </div>
            <div className="mock-nav-item">
              <ShieldCheck size={9} />
              <span>Permissions</span>
            </div>
            <div className="mock-nav-item">
              <Settings size={9} />
              <span>Settings</span>
            </div>
            <div className="mock-sidebar-footer">
              <CircleHelp size={8} style={{ display: 'inline', marginRight: 4 }} />
              Help &amp; support
            </div>
          </div>

          <div className="mock-main">
            <div className="mock-breadcrumb">Workspace / Service Desk</div>
            <div className="mock-title-row">
              <div>
                <h4>Support, simplified.</h4>
                <p>Enterprise triage &amp; live request monitoring.</p>
              </div>
              <span className="mock-action">＋ New ticket</span>
            </div>

            <div className="mock-stats">
              <div className="mock-stat">
                <span>Total tickets</span>
                <strong>248</strong>
                <small>↗ 12% this month</small>
              </div>
              <div className="mock-stat">
                <span>In progress</span>
                <strong>32</strong>
                <small>Assigned to team</small>
              </div>
              <div className="mock-stat">
                <span>Resolved</span>
                <strong>186</strong>
                <small>↗ 92% resolution rate</small>
              </div>
            </div>

            <table className="mock-ticket-table">
              <thead>
                <tr>
                  <th>Recent requests</th>
                  <th>Status</th>
                  <th>Priority</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Unable to access VPN</td>
                  <td>
                    <span className="mock-ticket-state">In progress</span>
                  </td>
                  <td>↑ High</td>
                </tr>
                <tr>
                  <td>Software installation</td>
                  <td>
                    <span className="mock-ticket-state pending">Open</span>
                  </td>
                  <td>− Medium</td>
                </tr>
                <tr>
                  <td>Email configuration</td>
                  <td>
                    <span className="mock-ticket-state resolved">Resolved</span>
                  </td>
                  <td>↓ Low</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
