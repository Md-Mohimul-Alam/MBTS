import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Link } from 'react-router-dom';
import TopBar from '../shared/Topbar';
import SidebarWrapper from '../shared/Sidebar';

// Initial client data
const initialClients = [
  { id: 1, name: 'Chattogram Client', manager: 'Mr. Karim', contact: '01712345678', address: 'Agrabad', establishedAt: '2022-01-15' },
  { id: 2, name: 'Dhaka Client', manager: 'Ms. Jahanara', contact: '01898765432', address: 'Uttara', establishedAt: '2023-03-10' },
];

const ClientList = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);
  const [clients, setClients] = useState(initialClients);

  const handleToggleSidebar = () => setSidebarCollapsed(prev => !prev);

  const handleDateChange = (id, newDate) => {
    setClients(prev =>
      prev.map(client =>
        client.id === id ? { ...client, establishedAt: newDate } : client
      )
    );
  };

  return (
    <div className={`min-h-screen flex ${isDark ? 'bg-mbts-blue text-white' : 'bg-gray-50 text-gray-900'}`}>
      <SidebarWrapper collapsed={sidebarCollapsed} />
      <div className="flex-1 flex flex-col">
        <TopBar onToggleSidebar={handleToggleSidebar} sidebarCollapsed={sidebarCollapsed} />

        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-semibold">Client List</h1>
            <Link
              to="/app/clients/add"
              className={`px-4 py-2 rounded font-medium ${
                isDark ? 'bg-mbts-orange hover:bg-mbts-orangeHover text-white' : 'bg-mbts-orange hover:bg-mbts-orangeHover text-white'
              }`}
            >
              + Add Client
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className={`${isDark ? 'bg-mbts-dark text-white' : 'bg-gray-100 text-gray-700'}`}>
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Manager</th>
                  <th className="p-3 text-left">Contact</th>
                  <th className="p-3 text-left">Address</th>
                  <th className={`p-3 text-left ${isDark ? 'bg-mbts-dark text-white' : 'bg-gray-100 text-gray-700'}`}>Established At</th>
                  <th className="p-3 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {clients.map(client => (
                  <tr key={client.id} className={`border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                    <td className="p-3">{client.name}</td>
                    <td className="p-3">{client.manager}</td>
                    <td className="p-3">{client.contact}</td>
                    <td className="p-3">{client.address}</td>
                    <td className="p-3">
                      <input
                        type="date"
                        value={client.establishedAt}
                        onChange={(e) => handleDateChange(client.id, e.target.value)}
                        className={`p-3 text-left rounded border px-2 py-1 text-sm w-full ${isDark ? 'bg-mbts-dark text-white' : 'bg-gray-100 text-gray-700'}`}
                      />
                    </td>

                    <td className="p-3 text-center">
                      <Link
                        to={`/app/clients/edit/${client.id}`}
                        className={`text-sm underline ${
                          isDark ? 'text-mbts-orange' : 'text-blue-600'
                        }`}
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ClientList;
