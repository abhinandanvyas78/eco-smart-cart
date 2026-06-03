import { LogOut, User as UserIcon, Settings } from 'lucide-react'
import { useState } from 'react'

interface UserMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function UserMenu({ isOpen, onClose }: UserMenuProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      ></div>

      {/* Menu */}
      <div className="fixed right-4 top-16 bg-white rounded-lg shadow-lg z-50 w-64">
        {isLoggedIn ? (
          <>
            <div className="border-b border-gray-200 p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white">
                  <UserIcon className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">John Doe</p>
                  <p className="text-sm text-gray-500">john@example.com</p>
                </div>
              </div>
            </div>

            <div className="p-2 space-y-1">
              <button className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg transition flex items-center gap-2 text-gray-700">
                <UserIcon className="w-4 h-4" />
                My Profile
              </button>
              <button className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg transition flex items-center gap-2 text-gray-700">
                <Settings className="w-4 h-4" />
                Settings
              </button>
              <button
                onClick={() => setIsLoggedIn(false)}
                className="w-full text-left px-4 py-2 hover:bg-red-50 rounded-lg transition flex items-center gap-2 text-red-600"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </>
        ) : (
          <div className="p-4 space-y-3">
            <button
              onClick={() => setIsLoggedIn(true)}
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition font-semibold"
            >
              Login
            </button>
            <button className="w-full border border-green-600 text-green-600 py-2 rounded-lg hover:bg-green-50 transition font-semibold">
              Sign Up
            </button>
            <p className="text-xs text-gray-500 text-center">
              Create an account to save your favorites and orders
            </p>
          </div>
        )}
      </div>
    </>
  )
}
