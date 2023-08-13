'use client'
import "./globals.css";
import { Inter } from "next/font/google";
import Sidebar from "@/components/sidebar/sidebar";
import React  from "react";
import { usePathname } from "next/navigation";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
   const path = usePathname()
   const location = sessionStorage.getItem('location');
   const image = sessionStorage.getItem('image');
   const name = sessionStorage.getItem('name'); 




   const condition = () =>{
                  if(path === '/'){
                    return 
                  }
                  else if(!location && !image && !name){
                    return
                  }
                  else return <Sidebar />
   }

  return (
    <html lang="en">
      <script
        src="https://kit.fontawesome.com/d05e64aa0f.js"
        crossOrigin="anonymous">
      </script>
      <body className={inter.className}>
        <div className="dashboard-container">
          {condition()}
          {children}
        </div>
      </body>
    </html>
  );
}
