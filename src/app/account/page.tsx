"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/components/providers/AuthProvider";

export default function AccountPage() {
  const { user, login, signup, logout, isLoaded } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      if(email) login(email, password);
    } else {
      if(name && email) signup(name, email, password);
    }
  };

  if (!isLoaded) return null; // Avoid hydration mismatch visually waiting 1 tick

  return (
    <>
      <Navbar />
      <div className="h-28 sm:h-32 md:h-36 bg-white w-full"></div>
      
      <main className="flex-grow bg-white py-8 sm:py-12 md:py-[100px] min-h-[70vh]">
        <div className={user ? "max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8" : "max-w-[500px] mx-auto px-4 sm:px-6 md:px-8"}>
          
          {user ? (
            <FadeIn>
              <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
                {/* SIDEBAR NAVIGATION - LACOSTE STYLE */}
                <div className="w-full md:w-1/4">
                  <div className="bg-[#F8F8F8] p-8 border border-light-gray">
                    <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-dark-gray mb-2">Signed in as</p>
                    <p className="font-serif text-[28px] text-black mb-10 tracking-[0.05em] leading-tight">{user.name}</p>
                    
                    <nav className="flex flex-col space-y-6">
                      <button className="text-left font-sans text-[13px] font-bold tracking-[0.15em] uppercase text-forest flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-forest"></span> Dashboard
                      </button>
                      <button className="text-left font-sans text-[13px] font-medium tracking-[0.15em] uppercase text-dark-gray hover:text-black transition-colors pl-5">Orders</button>
                      <button className="text-left font-sans text-[13px] font-medium tracking-[0.15em] uppercase text-dark-gray hover:text-black transition-colors pl-5">Wishlist</button>
                      <button className="text-left font-sans text-[13px] font-medium tracking-[0.15em] uppercase text-dark-gray hover:text-black transition-colors pl-5">Addresses</button>
                      <button className="text-left font-sans text-[13px] font-medium tracking-[0.15em] uppercase text-dark-gray hover:text-black transition-colors pl-5">Saved Cards</button>
                      <button className="text-left font-sans text-[13px] font-medium tracking-[0.15em] uppercase text-dark-gray hover:text-black transition-colors pl-5">Settings</button>
                      
                      <div className="pt-6 mt-4 border-t border-light-gray">
                        <button onClick={() => logout()} className="text-left font-sans text-[13px] font-bold tracking-[0.15em] uppercase text-[#D80000] hover:text-black transition-colors pl-5">Sign Out</button>
                      </div>
                    </nav>
                  </div>
                </div>

                {/* MAIN DASHBOARD CONTENT */}
                <div className="w-full md:w-3/4">
                  <h2 className="font-serif text-[32px] tracking-[0.15em] uppercase mb-10 text-black">Account Overview</h2>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* Block 1 */}
                    <div className="border border-light-gray p-8 hover:border-black transition-colors group cursor-pointer bg-white">
                      <h3 className="font-sans text-[14px] font-bold tracking-[0.15em] uppercase mb-3 text-black">Recent Orders</h3>
                      <p className="text-[15px] font-sans text-dark-gray mb-8 leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">Track, return, or buy again from your past collections.</p>
                      <Button variant="secondary" className="w-full text-[12px] bg-transparent group-hover:bg-black group-hover:text-white transition-all">VIEW ORDERS</Button>
                    </div>
                    
                    {/* Block 2 */}
                    <div className="border border-light-gray p-8 hover:border-black transition-colors group cursor-pointer bg-white">
                      <h3 className="font-sans text-[14px] font-bold tracking-[0.15em] uppercase mb-3 text-black">My Addresses</h3>
                      <p className="text-[15px] font-sans text-dark-gray mb-8 leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">Manage delivery locations to expedite your checkout flow.</p>
                      <Button variant="secondary" className="w-full text-[12px] bg-transparent group-hover:bg-black group-hover:text-white transition-all">MANAGE ADDRESSES</Button>
                    </div>
                    
                    {/* Block 3 */}
                    <div className="border border-light-gray p-8 hover:border-black transition-colors group cursor-pointer bg-[#F8F8F8]">
                      <h3 className="font-sans text-[14px] font-bold tracking-[0.15em] uppercase mb-4 text-black text-center">Profile Details</h3>
                      <div className="mb-6 bg-white p-4 border border-light-gray text-center shadow-sm">
                        <p className="text-[15px] font-serif text-black mb-1">{user.name}</p>
                        <p className="text-[13px] font-sans text-dark-gray uppercase tracking-widest">{user.email}</p>
                      </div>
                      <Button variant="secondary" className="w-full text-[12px] !border-dark-gray">EDIT PROFILE</Button>
                    </div>
                    
                    {/* Block 4 */}
                    <div className="border border-light-gray p-8 hover:border-black transition-colors group cursor-pointer bg-white flex flex-col justify-center">
                      <h3 className="font-sans text-[14px] font-bold tracking-[0.15em] uppercase mb-3 text-black text-center">Need Concierge?</h3>
                      <p className="text-[15px] font-sans text-dark-gray mb-8 leading-relaxed opacity-80 text-center">Our styling and support team is here to assist you.</p>
                      <Button variant="primary" className="w-full text-[12px]">CONTACT US</Button>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ) : (
            <FadeIn>
              <h1 className="font-serif text-[40px] tracking-[0.15em] uppercase mb-8 text-black text-center">
                {isLogin ? "Sign In" : "Register"}
              </h1>
              
              <form className="space-y-6 text-left mb-8" onSubmit={handleSubmit}>
                {!isLogin && (
                  <div>
                    <label className="block font-sans text-sm font-bold uppercase tracking-widest mb-2 text-black">Name</label>
                    <input type="text" value={name} onChange={e => setName(e.target.value)} required className="w-full border border-light-gray p-4 focus:outline-none focus:border-black font-sans text-sm transition-colors" placeholder="Full Name" />
                  </div>
                )}
                <div>
                  <label className="block font-sans text-sm font-bold uppercase tracking-widest mb-2 text-black">Email</label>
                  <input type="email" value={email} onChange={e => setEmail(e.target.value)} required className="w-full border border-light-gray p-4 focus:outline-none focus:border-black font-sans text-sm transition-colors" placeholder="Email Address" />
                </div>
                <div>
                  <label className="block font-sans text-sm font-bold uppercase tracking-widest mb-2 text-black">Password</label>
                  <input type="password" value={password} onChange={e => setPassword(e.target.value)} required className="w-full border border-light-gray p-4 focus:outline-none focus:border-black font-sans text-sm transition-colors" placeholder="Password" />
                </div>
                
                <Button variant="primary" className="w-full py-4 text-[16px]">
                  {isLogin ? "SIGN IN" : "CREATE ACCOUNT"}
                </Button>
              </form>
              
              <div className="text-center">
                <button 
                  type="button"
                  onClick={() => setIsLogin(!isLogin)} 
                  className="font-sans text-sm text-dark-gray hover:text-black tracking-wide underline decoration-light-gray hover:decoration-black underline-offset-4 transition-all"
                >
                  {isLogin ? "Create an account" : "Already have an account? Sign in"}
                </button>
              </div>
            </FadeIn>
          )}

        </div>
      </main>

      <Footer />
    </>
  );
}
