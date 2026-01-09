import { useState } from "react";
import {
  Home,
  Users,
  Shield,
  FileText,
  Settings,
  TrendingUp,
  UserCheck,
  AlertCircle,
  Activity,
} from "lucide-react";

import { Sidebar } from "../components/Sidebar";
import { Navbar } from "../components/Navbar";
import { Card } from "../components/Card";

export default function Admin() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const sidebarItems = [
    { icon: Home, label: "Dashboard", active: activeTab === "dashboard", onClick: () => setActiveTab("dashboard") },
    { icon: Users, label: "Users", active: activeTab === "users", onClick: () => setActiveTab("users") },
    { icon: Shield, label: "Roles", active: activeTab === "roles", onClick: () => setActiveTab("roles") },
    { icon: FileText, label: "Reports", active: activeTab === "reports", onClick: () => setActiveTab("reports") },
    { icon: Settings, label: "System Settings", active: activeTab === "settings", onClick: () => setActiveTab("settings") },
  ];

  const userStats = [
    { role: "Students", count: 342, change: "+12", color: "bg-blue-500" },
    { role: "Teachers", count: 28, change: "+2", color: "bg-purple-500" },
    { role: "Admins", count: 5, change: "0", color: "bg-orange-500" },
  ];

  const recentActivity = [
    { user: "John Doe", action: "Registered as Student", time: "2 mins ago", type: "user" },
    { user: "Dr. Smith", action: "Created new assignment", time: "15 mins ago", type: "assignment" },
    { user: "Admin Mike", action: "Updated system settings", time: "1 hour ago", type: "system" },
    { user: "Sarah Johnson", action: "Submitted report", time: "2 hours ago", type: "report" },
  ];

  const systemHealth = [
    { metric: "Server Uptime", value: "99.9%", status: "excellent" },
    { metric: "Active Sessions", value: "156", status: "good" },
    { metric: "Database Load", value: "42%", status: "good" },
    { metric: "Storage Used", value: "68%", status: "warning" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar items={sidebarItems} />

      <div className="flex-1">
        <Navbar userName="Admin Mike" userRole="Administrator" />

        <main className="p-6 space-y-6">
          {/* Welcome */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              System Overview 🛡️
            </h1>
            <p className="text-gray-600">
              Monitor platform activity and manage system resources.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card hover>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Total Users</p>
                  <p className="text-3xl font-bold text-gray-900">375</p>
                  <p className="text-xs text-green-600 mt-1">+14 this week</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="text-blue-500" size={24} />
                </div>
              </div>
            </Card>

            <Card hover>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Active Sessions</p>
                  <p className="text-3xl font-bold text-gray-900">156</p>
                  <p className="text-xs text-blue-600 mt-1">Real-time</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Activity className="text-green-500" size={24} />
                </div>
              </div>
            </Card>

            <Card hover>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">System Health</p>
                  <p className="text-3xl font-bold text-gray-900">98%</p>
                  <p className="text-xs text-green-600 mt-1">Excellent</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="text-purple-500" size={24} />
                </div>
              </div>
            </Card>

            <Card hover>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Pending Issues</p>
                  <p className="text-3xl font-bold text-gray-900">3</p>
                  <p className="text-xs text-yellow-600 mt-1">Needs attention</p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <AlertCircle className="text-orange-500" size={24} />
                </div>
              </div>
            </Card>
          </div>

          {/* User Distribution + Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card>
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                User Distribution
              </h2>

              <div className="space-y-6">
                {userStats.map((stat, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">
                        {stat.role}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-gray-900">
                          {stat.count}
                        </span>
                        <span className="text-xs text-green-600">
                          {stat.change}
                        </span>
                      </div>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${stat.color}`}
                        style={{ width: `${(stat.count / 375) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="lg:col-span-2">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Recent Activity
              </h2>

              <div className="space-y-4">
                {recentActivity.map((a, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-3 bg-gray-50 rounded-lg hover:bg-gray-100"
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        a.type === "user"
                          ? "bg-blue-100"
                          : a.type === "assignment"
                          ? "bg-green-100"
                          : a.type === "system"
                          ? "bg-purple-100"
                          : "bg-orange-100"
                      }`}
                    >
                      {a.type === "user" ? (
                        <UserCheck size={18} className="text-blue-600" />
                      ) : (
                        <FileText size={18} className="text-gray-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        {a.user}
                      </p>
                      <p className="text-sm text-gray-600">{a.action}</p>
                    </div>
                    <span className="text-xs text-gray-500">{a.time}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* System Health */}
          <Card>
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              System Health Metrics
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {systemHealth.map((item, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-gray-700">
                      {item.metric}
                    </h3>
                    <div
                      className={`w-2 h-2 rounded-full ${
                        item.status === "excellent"
                          ? "bg-green-500"
                          : item.status === "good"
                          ? "bg-blue-500"
                          : "bg-yellow-500"
                      }`}
                    />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">
                    {item.value}
                  </p>
                  <p className="text-xs mt-1 text-gray-600">
                    {item.status.charAt(0).toUpperCase() +
                      item.status.slice(1)}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </main>
      </div>
    </div>
  );
}