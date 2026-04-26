"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { GoldButton } from "@/components/ui/GoldButton";
import { Award, Eye, X } from "lucide-react";
import { cn } from "@/lib/utils";

const statusColors = {
  pending: "bg-yellow-500/20 text-yellow-400",
  approved: "bg-green-500/20 text-green-400",
  rejected: "bg-red-500/20 text-red-400",
  shortlisted: "bg-blue-500/20 text-blue-400",
  winner: "bg-gold/20 text-gold",
};

export default function AdminAwards() {
  const router = useRouter();
  const [participants, setParticipants] = useState<any[]>([]);
  const [selectedParticipant, setSelectedParticipant] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (!token) {
      router.push("/admin");
      return;
    }

    // Fetch published participants
    fetch("/api/admin/awards", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setParticipants(data.participants || []);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, [router]);

  const togglePublished = async (id: string, published: boolean) => {
    const token = localStorage.getItem("admin_token");
    try {
      const response = await fetch(`/api/admin/awards/${id}/publish`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ published: !published }),
      });

      if (response.ok) {
        setParticipants(participants.map((p) => (p.id === id ? { ...p, published: !published } : p)));
      }
    } catch {
      console.error("Failed to update published status");
    }
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
              <h1 className="font-display text-gold text-lg">Awards Results</h1>
              <p className="font-ui text-gold/60 text-xs uppercase tracking-wider">Manage Published Results</p>
            </div>
          </div>
          <GoldButton variant="outline" size="sm" onClick={() => router.push("/admin/dashboard")}>
            Back to Dashboard
          </GoldButton>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="mb-8">
          <h2 className="font-display text-3xl text-gold mb-2">Published Results</h2>
          <p className="font-body text-cream/70">Manage which participants appear on the public results page</p>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            <div className="col-span-full text-center py-12 text-gold/40">Loading...</div>
          ) : participants.length === 0 ? (
            <div className="col-span-full text-center py-12 text-gold/40">
              <Award size={48} className="mx-auto mb-4" />
              <p>No participants found</p>
            </div>
          ) : (
            participants.map((participant) => (
              <div key={participant.id} className="glass-card overflow-hidden">
                <div className="aspect-[3/4] relative bg-gradient-to-br from-gold/10 to-gold/5 flex items-center justify-center">
                  {participant.photo_url ? (
                    <img
                      src={participant.photo_url}
                      alt={participant.full_name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Award className="text-gold/30" size={64} />
                  )}
                  <div className="absolute top-4 right-4">
                    <span className={cn("px-3 py-1 rounded-full text-xs font-ui uppercase", statusColors[participant.status as keyof typeof statusColors] || statusColors.pending)}>
                      {participant.status}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-display text-lg text-gold mb-2">{participant.full_name}</h3>
                  <p className="font-ui text-cream/60 text-sm mb-1">{participant.category} · {participant.state}</p>
                  <div className="flex items-center justify-between mt-4">
                    <button
                      onClick={() => setSelectedParticipant(participant)}
                      className="flex items-center gap-2 text-gold/70 hover:text-gold transition-colors text-sm font-ui"
                    >
                      <Eye size={16} /> View Details
                    </button>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <span className="font-ui text-xs uppercase text-gold/60">Public</span>
                      <input
                        type="checkbox"
                        checked={participant.published || false}
                        onChange={() => togglePublished(participant.id, participant.published)}
                        className="w-4 h-4 accent-gold"
                      />
                    </label>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedParticipant && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="glass-card p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display text-2xl text-gold">Participant Details</h3>
              <button onClick={() => setSelectedParticipant(null)} className="text-gold/60 hover:text-gold">
                <X size={24} />
              </button>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-ui text-gold/60 text-xs uppercase mb-1">Full Name</p>
                  <p className="font-body text-cream">{selectedParticipant.full_name}</p>
                </div>
                <div>
                  <p className="font-ui text-gold/60 text-xs uppercase mb-1">Age</p>
                  <p className="font-body text-cream">{selectedParticipant.age}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-ui text-gold/60 text-xs uppercase mb-1">Category</p>
                  <p className="font-body text-cream">{selectedParticipant.category}</p>
                </div>
                <div>
                  <p className="font-ui text-gold/60 text-xs uppercase mb-1">State</p>
                  <p className="font-body text-cream">{selectedParticipant.state}</p>
                </div>
              </div>
              <div>
                <p className="font-ui text-gold/60 text-xs uppercase mb-1">Email</p>
                <p className="font-body text-cream">{selectedParticipant.email}</p>
              </div>
              <div>
                <p className="font-ui text-gold/60 text-xs uppercase mb-1">Phone</p>
                <p className="font-body text-cream">{selectedParticipant.phone}</p>
              </div>
              <div className="pt-4 border-t border-gold/20">
                <GoldButton variant="outline" onClick={() => setSelectedParticipant(null)}>
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
