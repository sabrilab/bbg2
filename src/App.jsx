import React from 'react'
    import { LayoutDashboard, Settings, Users } from "lucide-react"
    import { Button } from "./components/ui/button"
    import { Sidebar } from "./components/sidebar"

    export default function App() {
      return (
        <div className="flex min-h-screen">
          <Sidebar>
            <div className="flex flex-col space-y-1">
              <Button variant="ghost" className="w-full justify-start">
                <LayoutDashboard className="mr-2 h-4 w-4" />
                Dashboard
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Users className="mr-2 h-4 w-4" />
                Users
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
            </div>
          </Sidebar>
          <main className="flex-1 p-8">
            <h1 className="text-2xl font-bold">Main Content</h1>
          </main>
        </div>
      )
    }
