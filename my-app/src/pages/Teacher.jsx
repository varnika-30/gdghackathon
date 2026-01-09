import { useState } from "react";
import {
  Home,
  Users,
  ClipboardList,
  BarChart3,
  Settings,
  Calendar,
  TrendingUp,
  BookOpen,
} from "lucide-react";

import { Sidebar } from "../components/Sidebar";
import { Navbar } from "../components/Navbar";
import { Card } from "../components/Card";

export default function Teacher() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const sidebarItems = [
    { icon: Home, label: "Dashboard", active: activeTab === "dashboard", onClick: () => setActiveTab("dashboard") },
    { icon: BookOpen, label: "Classes", active: activeTab === "classes", onClick: () => setActiveTab("classes") },
    { icon: Users, label: "Students", active: activeTab === "students", onClick: () => setActiveTab("students") },
    { icon: ClipboardList, label: "Assignments", active: activeTab === "assignments", onClick: () => setActiveTab("assignments") },
    { icon: BarChart3, label: "Analytics", active: activeTab === "analytics", onClick: () => setActiveTab("analytics") },
    { icon: Settings, label: "Settings", active: activeTab === "settings", onClick: () => setActiveTab("settings") },
  ];

  const classes = [
    { name: "Calculus 101", students: 32, section: "A", time: "Mon, Wed 9:00 AM" },
    { name: "Physics 201", students: 28, section: "B", time: "Tue, Thu 11:00 AM" },
    { name: "Advanced Math", students: 24, section: "A", time: "Fri 2:00 PM" },
  ];

  const recentAssignments = [
    { title: "Midterm Exam", class: "Calculus 101", submitted: 28, total: 32, dueDate: "Jan 10" },
    { title: "Lab Report 3", class: "Physics 201", submitted: 24, total: 28, dueDate: "Jan 12" },
    { title: "Problem Set 5", class: "Advanced Math", submitted: 20, total: 24, dueDate: "Jan 15" },
  ];

  const studentPerformance = [
    { range: "90–100%", count: 12, color: "bg-green-500" },
    { range: "80–89%", count: 25, color: "bg-blue-500" },
    { range: "70–79%", count: 18, color: "bg-yellow-500" },
    { range: "Below 70%", count: 5, color: "bg-red-500" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar items={sidebarItems} />

      <div className="flex-1">
        <Navbar userName="Dr. Sarah Chen" userRole="Teacher" />

        <main className="p-6 space-y-6">
          {/* Welcome */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Good morning, Dr. Chen! 📚
            </h1>
            <p className="text-gray-600">
              Here's an overview of your classes and student progress.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card hover>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Total Classes</p>
                  <p className="text-3xl font-bold text-gray-900">3</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <BookOpen className="text-blue-500" size={24} />
                </div>
              </div>
            </Card>

            <Card hover>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Total Students</p>
                  <p className="text-3xl font-bold text-gray-900">84</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Users className="text-purple-500" size={24} />
                </div>
              </div>
            </Card>

            <Card hover>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Active Assignments</p>
                  <p className="text-3xl font-bold text-gray-900">8</p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <ClipboardList className="text-orange-500" size={24} />
                </div>
              </div>
            </Card>

            <Card hover>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Avg Performance</p>
                  <p className="text-3xl font-bold text-gray-900">82%</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="text-green-500" size={24} />
                </div>
              </div>
            </Card>
          </div>

          {/* Classes + Performance */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Your Classes</h2>
                <Calendar size={20} className="text-gray-400" />
              </div>

              <div className="space-y-4">
                {classes.map((c, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{c.name}</h3>
                      <span className="px-3 py-1 bg-blue-500 text-white text-xs rounded-full">
                        Section {c.section}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Users size={16} />
                        <span>{c.students} students</span>
                      </div>
                      <span>{c.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Performance Distribution
              </h2>

              <div className="space-y-4">
                {studentPerformance.map((item, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">
                        {item.range}
                      </span>
                      <span className="text-sm font-medium text-gray-900">
                        {item.count} students
                      </span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${item.color}`}
                        style={{ width: `${(item.count / 60) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Recent Assignments */}
          <Card>
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Recent Assignments
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Assignment</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Class</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Submissions</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Due Date</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentAssignments.map((a, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-100 hover:bg-gray-50"
                    >
                      <td className="py-4 px-4 text-gray-900">{a.title}</td>
                      <td className="py-4 px-4 text-gray-600">{a.class}</td>
                      <td className="py-4 px-4 font-medium text-gray-900">
                        {a.submitted}/{a.total}
                      </td>
                      <td className="py-4 px-4 text-gray-600">{a.dueDate}</td>
                      <td className="py-4 px-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            a.submitted === a.total
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {a.submitted === a.total ? "Complete" : "Pending"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </main>
      </div>
    </div>
  );
}