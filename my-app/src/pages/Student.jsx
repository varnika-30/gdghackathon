import { useState } from "react";
import {
  Home,
  BookOpen,
  ClipboardList,
  TrendingUp,
  Settings,
  Calendar,
  Clock,
  CheckCircle2,
} from "lucide-react";

import { Sidebar } from "../components/Sidebar";
import { Navbar } from "../components/Navbar";
import { Card } from "../components/Card";

export default function Student() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const sidebarItems = [
    { icon: Home, label: "Dashboard", active: activeTab === "dashboard", onClick: () => setActiveTab("dashboard") },
    { icon: BookOpen, label: "Courses", active: activeTab === "courses", onClick: () => setActiveTab("courses") },
    { icon: ClipboardList, label: "Assignments", active: activeTab === "assignments", onClick: () => setActiveTab("assignments") },
    { icon: TrendingUp, label: "Progress", active: activeTab === "progress", onClick: () => setActiveTab("progress") },
    { icon: Settings, label: "Settings", active: activeTab === "settings", onClick: () => setActiveTab("settings") },
  ];

  const upcomingTasks = [
    { id: 1, title: "Math Assignment", course: "Calculus 101", dueDate: "Tomorrow", priority: "high" },
    { id: 2, title: "Essay Submission", course: "English Literature", dueDate: "Jan 12", priority: "medium" },
    { id: 3, title: "Lab Report", course: "Physics", dueDate: "Jan 15", priority: "low" },
  ];

  const courses = [
    { name: "Calculus 101", progress: 75, color: "bg-blue-500" },
    { name: "English Literature", progress: 60, color: "bg-green-500" },
    { name: "Physics", progress: 85, color: "bg-purple-500" },
    { name: "Computer Science", progress: 90, color: "bg-orange-500" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar items={sidebarItems} />

      <div className="flex-1">
        <Navbar userName="Alex Johnson" userRole="Student" />

        <main className="p-6 space-y-6">
          {/* Welcome */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome back, Alex! 👋
            </h1>
            <p className="text-gray-600">
              Here's what's happening with your courses today.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card hover>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Active Courses</p>
                  <p className="text-3xl font-bold text-gray-900">4</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <BookOpen className="text-blue-500" size={24} />
                </div>
              </div>
            </Card>

            <Card hover>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Pending Tasks</p>
                  <p className="text-3xl font-bold text-gray-900">12</p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <ClipboardList className="text-orange-500" size={24} />
                </div>
              </div>
            </Card>

            <Card hover>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Completed</p>
                  <p className="text-3xl font-bold text-gray-900">28</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="text-green-500" size={24} />
                </div>
              </div>
            </Card>

            <Card hover>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Avg Progress</p>
                  <p className="text-3xl font-bold text-gray-900">77%</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="text-purple-500" size={24} />
                </div>
              </div>
            </Card>
          </div>

          {/* Bottom section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Upcoming Tasks</h2>
                <Calendar size={20} className="text-gray-400" />
              </div>

              <div className="space-y-4">
                {upcomingTasks.map((task) => (
                  <div
                    key={task.id}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-1 h-12 rounded-full ${
                          task.priority === "high"
                            ? "bg-red-500"
                            : task.priority === "medium"
                            ? "bg-yellow-500"
                            : "bg-green-500"
                        }`}
                      />
                      <div>
                        <h3 className="font-medium text-gray-900">{task.title}</h3>
                        <p className="text-sm text-gray-600">{task.course}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock size={16} />
                      <span className="text-sm">{task.dueDate}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Course Progress
              </h2>

              <div className="space-y-6">
                {courses.map((course, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">
                        {course.name}
                      </span>
                      <span className="text-sm font-medium text-gray-900">
                        {course.progress}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${course.color}`}
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}