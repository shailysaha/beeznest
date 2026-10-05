import {
  ArrowUpRight,
  BarChart3,
  ShoppingBag,
  Users,
} from "lucide-react";

export default function MockDashboard() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 rounded-[3rem] bg-[#DCF3E3] blur-2xl" />

      <div className="relative rounded-[2rem] border border-green-100 bg-white p-4 shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div>
            <p className="text-xs font-medium text-slate-400">BeezNest</p>
            <h3 className="text-lg font-bold text-[#14532D]">
              Business Overview
            </h3>
          </div>
          <div className="h-9 w-9 rounded-full bg-[#BDE8CB]" />
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3">
          <div className="rounded-2xl bg-[#F0FAF3] p-4">
            <ShoppingBag size={18} className="text-[#2F855A]" />
            <p className="mt-3 text-xs text-slate-500">Orders</p>
            <p className="mt-1 text-xl font-bold text-[#14532D]">342</p>
          </div>

          <div className="rounded-2xl bg-[#F0FAF3] p-4">
            <Users size={18} className="text-[#2F855A]" />
            <p className="mt-3 text-xs text-slate-500">Customers</p>
            <p className="mt-1 text-xl font-bold text-[#14532D]">128</p>
          </div>

          <div className="rounded-2xl bg-[#F0FAF3] p-4">
            <BarChart3 size={18} className="text-[#2F855A]" />
            <p className="mt-3 text-xs text-slate-500">Revenue</p>
            <p className="mt-1 text-xl font-bold text-[#14532D]">৳84K</p>
          </div>
        </div>

        <div className="mt-5 rounded-2xl border border-slate-100 p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-[#14532D]">
                Sales overview
              </p>
              <p className="text-xs text-slate-400">Last 7 days</p>
            </div>
            <div className="flex items-center gap-1 text-xs font-semibold text-[#2F855A]">
              <ArrowUpRight size={14} />
              12.4%
            </div>
          </div>

          <div className="mt-6 flex h-36 items-end gap-3">
            {[35, 52, 44, 68, 58, 82, 74].map((height, index) => (
              <div
                key={index}
                className="flex-1 rounded-t-lg bg-[#94D8AB]"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>

        <div className="mt-5 rounded-2xl bg-[#F8FAFC] p-5">
          <p className="text-sm font-bold text-[#14532D]">
            Recent customers
          </p>
          <div className="mt-4 space-y-3">
            {["Rahim Ahmed", "Nusrat Jahan", "Tanvir Hasan"].map((name) => (
              <div key={name} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-[#BDE8CB]" />
                  <span className="text-sm font-medium text-slate-700">
                    {name}
                  </span>
                </div>
                <span className="text-xs text-[#2F855A]">Active</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 rounded-2xl bg-[#14532D] p-4 text-white">
          <p className="text-xs text-green-200">AI Business Manager</p>
          <p className="mt-1 font-bold">3 opportunities found</p>
        </div>
      </div>
    </div>
  );
}