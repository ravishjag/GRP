"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { GoldButton } from "@/components/ui/GoldButton";
import { Star, Filter, Check, X, Eye, Download } from "lucide-react";
import { cn } from "@/lib/utils";

const statusColors = {
  pending: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  approved: "bg-green-500/20 text-green-400 border-green-500/30",
  rejected: "bg-red-500/20 text-red-400 border-red-500/30",
  shortlisted: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  winner: "bg-gold/20 text-gold border-gold/50",
};

const categories = ["All", "Actor", "Singer", "Dancer", "Musician", "Comedian", "Artist", "Short Film Maker", "Other"];
const states = ["All", "Andhra Pradesh", "Telangana", "Tamil Nadu", "Karnataka", "Kerala", "Maharashtra", "Delhi"];

export default function AdminSubmissions() {
  const router = useRouter();
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [filterCategory, setFilterCategory] = useState("All");
  const [filterState, setFilterState] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");
  const [selectedSubmission, setSelectedSubmission] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (!token) {
      router.push("/admin");
      return;
    }

    // Fetch submissions
    fetch("/api/admin/submissions", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setSubmissions(data.submissions || []);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, [router]);

  const handleStatusUpdate = async (id: string, status: string) => {
    const token = localStorage.getItem("admin_token");
    try {
      const response = await fetch(`/api/admin/submissions/${id}/status`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status }),
      });

      if (response.ok) {
        setSubmissions(submissions.map((s) => (s.id === id ? { ...s, status } : s)));
      }
    } catch {
      console.error("Failed to update status");
    }
  };

  const filteredSubmissions = submissions.filter((s) => {
    const categoryMatch = filterCategory === "All" || s.category === filterCategory;
    const stateMatch = filterState === "All" || s.state === filterState;
    const statusMatch = filterStatus === "All" || s.status === filterStatus;
    return categoryMatch && stateMatch && statusMatch;
  });

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
              <h1 className="font-display text-gold text-lg">Manage Submissions</h1>
              <p className="font-ui text-gold/60 text-xs uppercase tracking-wider">Just Born Awards</p>
            </div>
          </div>
          <GoldButton variant="outline" size="sm" onClick={() => router.push("/admin/dashboard")}>
            Back to Dashboard
          </GoldButton>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-6 py-12">
        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="flex items-center gap-2 text-gold">
            <Filter size={20} />
            <span className="font-ui text-sm uppercase tracking-wider">Filters:</span>
          </div>
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="bg-black/50 border border-gold/20 rounded-sm py-2 px-4 text-gold font-ui text-sm focus:border-gold"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <select
            value={filterState}
            onChange={(e) => setFilterState(e.target.value)}
            className="bg-black/50 border border-gold/20 rounded-sm py-2 px-4 text-gold font-ui text-sm focus:border-gold"
          >
            {states.map((state) => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="bg-black/50 border border-gold/20 rounded-sm py-2 px-4 text-gold font-ui text-sm focus:border-gold"
          >
            <option value="All">All Status</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
            <option value="shortlisted">Shortlisted</option>
            <option value="winner">Winner</option>
          </select>
          <button className="ml-auto flex items-center gap-2 px-4 py-2 border border-gold/30 text-gold hover:bg-gold/10 rounded-sm transition-colors">
            <Download size={16} />
            <span className="font-ui text-sm uppercase">Export CSV</span>
          </button>
        </div>

        {/* Submissions Table */}
        <div className="glass-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-black/50 border-b border-gold/20">
                <tr>
                  <th className="text-left font-ui text-gold uppercase tracking-wider text-sm py-4 px-6">Name</th>
                  <th className="text-left font-ui text-gold uppercase tracking-wider text-sm py-4 px-6">Category</th>
                  <th className="text-left font-ui text-gold uppercase tracking-wider text-sm py-4 px-6">State</th>
                  <th className="text-left font-ui text-gold uppercase tracking-wider text-sm py-4 px-6">Status</th>
                  <th className="text-left font-ui text-gold uppercase tracking-wider text-sm py-4 px-6">Actions</th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <tr>
                    <td colSpan={5} className="py-12 text-center text-gold/40">Loading submissions...</td>
                  </tr>
                ) : filteredSubmissions.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="py-12 text-center text-gold/40">No submissions found</td>
                  </tr>
                ) : (
                  filteredSubmissions.map((submission) => (
                    <tr key={submission.id} className="border-b border-gold/10 hover:bg-gold/5">
                      <td className="py-4 px-6">
                        <div>
                          <p className="font-body text-cream">{submission.full_name}</p>
                          <p className="font-ui text-gold/60 text-sm">{submission.email}</p>
                        </div>
                      </td>
                      <td className="py-4 px-6 font-ui text-cream/80 text-sm">{submission.category}</td>
                      <td className="py-4 px-6 font-ui text-cream/80 text-sm">{submission.state}</td>
                      <td className="py-4 px-6">
                        <span className={cn("px-3 py-1 rounded-full text-xs font-ui uppercase border", statusColors[submission.status as keyof typeof statusColors] || statusColors.pending)}>
                          {submission.status}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setSelectedSubmission(submission)}
                            className="p-2 text-gold/70 hover:text-gold transition-colors"
                            title="View Details"
                          >
                            <Eye size={18} />
                          </button>
                          {submission.status === "pending" && (
                            <>
                              <button
                                onClick={() => handleStatusUpdate(submission.id, "approved")}
                                className="p-2 text-green-400 hover:text-green-300 transition-colors"
                                title="Approve"
                              >
                                <Check size={18} />
                              </button>
                              <button
                                onClick={() => handleStatusUpdate(submission.id, "rejected")}
                                className="p-2 text-red-400 hover:text-red-300 transition-colors"
                                title="Reject"
                              >
                                <X size={18} />
                              </button>
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedSubmission && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="glass-card p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display text-2xl text-gold">Submission Details</h3>
              <button onClick={() => setSelectedSubmission(null)} className="text-gold/60 hover:text-gold">
                <X size={24} />
              </button>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-ui text-gold/60 text-xs uppercase mb-1">Full Name</p>
                  <p className="font-body text-cream">{selectedSubmission.full_name}</p>
                </div>
                <div>
                  <p className="font-ui text-gold/60 text-xs uppercase mb-1">Age</p>
                  <p className="font-body text-cream">{selectedSubmission.age}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-ui text-gold/60 text-xs uppercase mb-1">Category</p>
                  <p className="font-body text-cream">{selectedSubmission.category}</p>
                </div>
                <div>
                  <p className="font-ui text-gold/60 text-xs uppercase mb-1">State</p>
                  <p className="font-body text-cream">{selectedSubmission.state}</p>
                </div>
              </div>
              <div>
                <p className="font-ui text-gold/60 text-xs uppercase mb-1">Village / District</p>
                <p className="font-body text-cream">{selectedSubmission.village_district}</p>
              </div>
              <div>
                <p className="font-ui text-gold/60 text-xs uppercase mb-1">Email</p>
                <p className="font-body text-cream">{selectedSubmission.email}</p>
              </div>
              <div>
                <p className="font-ui text-gold/60 text-xs uppercase mb-1">Phone</p>
                <p className="font-body text-cream">{selectedSubmission.phone}</p>
              </div>
              <div>
                <p className="font-ui text-gold/60 text-xs uppercase mb-1">Talent Description</p>
                <p className="font-body text-cream/80 whitespace-pre-wrap">{selectedSubmission.talent_description}</p>
              </div>
              <div className="flex gap-4 pt-4 border-t border-gold/20">
                <GoldButton onClick={() => handleStatusUpdate(selectedSubmission.id, "shortlisted")}>
                  Shortlist
                </GoldButton>
                <GoldButton variant="outline" onClick={() => setSelectedSubmission(null)}>
                  Close
                </GoldButton>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
