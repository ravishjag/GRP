"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { GoldButton } from "@/components/ui/GoldButton";
import { Database, Mail, Phone, X } from "lucide-react";

export default function AdminCinzee() {
  const router = useRouter();
  const [enquiries, setEnquiries] = useState<any[]>([]);
  const [selectedEnquiry, setSelectedEnquiry] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (!token) {
      router.push("/admin");
      return;
    }

    // Fetch CinZee enquiries
    fetch("/api/admin/cinzee", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setEnquiries(data.enquiries || []);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, [router]);

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
              <h1 className="font-display text-gold text-lg">CinZee Enquiries</h1>
              <p className="font-ui text-gold/60 text-xs uppercase tracking-wider">Manage Platform Registrations</p>
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
          <h2 className="font-display text-3xl text-gold mb-2">CinZee Enquiries</h2>
          <p className="font-body text-cream/70">Review and respond to platform registration requests</p>
        </div>

        {/* Enquiries Table */}
        <div className="glass-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-black/50 border-b border-gold/20">
                <tr>
                  <th className="text-left font-ui text-gold uppercase tracking-wider text-sm py-4 px-6">Name</th>
                  <th className="text-left font-ui text-gold uppercase tracking-wider text-sm py-4 px-6">Category</th>
                  <th className="text-left font-ui text-gold uppercase tracking-wider text-sm py-4 px-6">Contact</th>
                  <th className="text-left font-ui text-gold uppercase tracking-wider text-sm py-4 px-6">Status</th>
                  <th className="text-left font-ui text-gold uppercase tracking-wider text-sm py-4 px-6">Actions</th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <tr>
                    <td colSpan={5} className="py-12 text-center text-gold/40">Loading enquiries...</td>
                  </tr>
                ) : enquiries.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="py-12 text-center text-gold/40">No enquiries found</td>
                  </tr>
                ) : (
                  enquiries.map((enquiry) => (
                    <tr key={enquiry.id} className="border-b border-gold/10 hover:bg-gold/5">
                      <td className="py-4 px-6">
                        <p className="font-body text-cream">{enquiry.name}</p>
                        <p className="font-ui text-gold/60 text-sm">{enquiry.email}</p>
                      </td>
                      <td className="py-4 px-6 font-ui text-cream/80 text-sm">{enquiry.category}</td>
                      <td className="py-4 px-6">
                        {enquiry.phone && (
                          <div className="flex items-center gap-2 text-cream/80">
                            <Phone size={14} className="text-gold" />
                            <span className="text-sm">{enquiry.phone}</span>
                          </div>
                        )}
                      </td>
                      <td className="py-4 px-6">
                        <span className={`px-3 py-1 rounded-full text-xs font-ui uppercase ${
                          enquiry.status === 'verified' ? 'bg-green-500/20 text-green-400' :
                          enquiry.status === 'contacted' ? 'bg-blue-500/20 text-blue-400' :
                          'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {enquiry.status}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <button
                          onClick={() => setSelectedEnquiry(enquiry)}
                          className="text-gold/70 hover:text-gold transition-colors"
                        >
                          View Details
                        </button>
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
      {selectedEnquiry && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="glass-card p-8 max-w-lg w-full">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display text-2xl text-gold">Enquiry Details</h3>
              <button onClick={() => setSelectedEnquiry(null)} className="text-gold/60 hover:text-gold">
                <X size={24} />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <p className="font-ui text-gold/60 text-xs uppercase mb-1">Name</p>
                <p className="font-body text-cream">{selectedEnquiry.name}</p>
              </div>
              <div>
                <p className="font-ui text-gold/60 text-xs uppercase mb-1">Email</p>
                <p className="font-body text-cream">{selectedEnquiry.email}</p>
              </div>
              {selectedEnquiry.phone && (
                <div>
                  <p className="font-ui text-gold/60 text-xs uppercase mb-1">Phone</p>
                  <p className="font-body text-cream">{selectedEnquiry.phone}</p>
                </div>
              )}
              <div>
                <p className="font-ui text-gold/60 text-xs uppercase mb-1">Category</p>
                <p className="font-body text-cream">{selectedEnquiry.category}</p>
              </div>
              {selectedEnquiry.message && (
                <div>
                  <p className="font-ui text-gold/60 text-xs uppercase mb-1">Message</p>
                  <p className="font-body text-cream/80 whitespace-pre-wrap">{selectedEnquiry.message}</p>
                </div>
              )}
              <div className="pt-4 border-t border-gold/20">
                <GoldButton variant="outline" onClick={() => setSelectedEnquiry(null)}>
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
