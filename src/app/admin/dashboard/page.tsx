"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { GoldButton } from "@/components/ui/GoldButton";
import { Film, Star, Users, MessageSquare, LogOut, Award, Database } from "lucide-react";

const stats = [
  { icon: Star, label: "Total Submissions", value: 0, key: "submissions" },
  { icon: Award, label: "Pending Review", value: 0, key: "pending" },
  { icon: Users, label: "Shortlisted", value: 0, key: "shortlisted" },
  { icon: MessageSquare, label: "Contact Messages", value: 0, key: "messages" },
];

export default function AdminDashboard() {
  const router = useRouter();
  const [statsData, setStatsData] = useState(stats);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (!token) {
      router.push("/admin");
      return;
    }

    // Fetch dashboard stats
    fetch("/api/admin/dashboard", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        if (!res.ok) {
          localStorage.removeItem("admin_token");
          router.push("/admin");
        }
        return res.json();
      })
      .then((data) => {
        setStatsData([
          { ...stats[0], value: data.totalSubmissions || 0 },
          { ...stats[1], value: data.pendingReview || 0 },
          { ...stats[2], value: data.shortlisted || 0 },
          { ...stats[3], value: data.contactMessages || 0 },
        ]);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    router.push("/admin");
  };

  return (
    <main className="min-h-screen bg-black-light">
      {/* Header */}
      <header className="bg-black border-b border-gold/20 py-6">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 border-2 border-gold flex items-center justify-center">
              <span className="text-gold font-display font-bold text-xl">G</span>
            </div>
            <div>
              <h1 className="font-display text-gold text-lg">Admin Dashboard</h1>
              <p className="font-ui text-gold/60 text-xs uppercase tracking-wider">Golden Rain Productions</p>
            </div>
          </div>
          <GoldButton variant="outline" size="sm" onClick={handleLogout}>
            <LogOut size={16} className="mr-2 inline" /> Logout
          </GoldButton>
        </div>
      </header>

      {/* Dashboard Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="mb-12">
          <h2 className="font-display text-3xl text-gold mb-2">Overview</h2>
          <p className="font-body text-cream/70">Dashboard statistics and quick access</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {statsData.map((stat, index) => (
            <div key={stat.key} className="glass-card p-6">
              <div className="flex items-center justify-between mb-4">
                <stat.icon className="text-gold" size={32} />
                <span className="font-display text-4xl text-gold">
                  {isLoading ? "-" : stat.value}
                </span>
              </div>
              <p className="font-ui text-gold uppercase tracking-wider text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mb-12">
          <h3 className="font-display text-2xl text-gold mb-6">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="/admin/submissions" className="glass-card p-6 card-hover group">
              <Star className="text-gold mb-4" size={32} />
              <h4 className="font-ui text-gold uppercase tracking-wider mb-2">Manage Submissions</h4>
              <p className="font-body text-cream/70 text-sm">Review and approve Just Born Awards entries</p>
            </a>
            <a href="/admin/awards" className="glass-card p-6 card-hover group">
              <Award className="text-gold mb-4" size={32} />
              <h4 className="font-ui text-gold uppercase tracking-wider mb-2">Awards Results</h4>
              <p className="font-body text-cream/70 text-sm">Publish results and manage winners</p>
            </a>
            <a href="/admin/cinzee" className="glass-card p-6 card-hover group">
              <Database className="text-gold mb-4" size={32} />
              <h4 className="font-ui text-gold uppercase tracking-wider mb-2">CinZee Enquiries</h4>
              <p className="font-body text-cream/70 text-sm">Manage platform registrations</p>
            </a>
          </div>
        </div>

        {/* Recent Activity Placeholder */}
        <div className="glass-card p-8">
          <h3 className="font-display text-2xl text-gold mb-6">Recent Activity</h3>
          <div className="text-center py-12 text-gold/40">
            <Film size={48} className="mx-auto mb-4" />
            <p className="font-body">Activity feed will appear here</p>
          </div>
        </div>
      </div>
    </main>
  );
}
