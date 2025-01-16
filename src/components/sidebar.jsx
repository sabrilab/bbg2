import React from 'react'

    export function Sidebar({ children }) {
      return (
        <div className="hidden border-r bg-muted/40 md:block">
          <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-14 items-center border-b px-4 lg:h-[60px]">
              <a href="/" className="flex items-center gap-2 font-semibold">
                <span className="">Acme Inc</span>
              </a>
            </div>
            <div className="flex-1 px-3 py-2">
              {children}
            </div>
          </div>
        </div>
      )
    }
