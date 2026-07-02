import React, { useState } from 'react';
import { Save, Upload, Link as LinkIcon } from 'lucide-react';

const Dashboard = () => {
  const [profile, setProfile] = useState({ bio: '', username: '' });

  const handleSave = async () => {
    // Integração com PUT /api/profile
    console.log("Salvando alterações...", profile);
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-2xl font-bold mb-8">Painel de Controle</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-glass p-6 rounded-2xl border border-white/10">
          <label className="block mb-2">Biografia</label>
          <textarea 
            className="w-full bg-black/50 p-2 rounded border border-white/10"
            onChange={(e) => setProfile({...profile, bio: e.target.value})}
          />
          <button 
            onClick={handleSave}
            className="mt-4 flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg font-bold"
          >
            <Save size={18} /> Salvar Alterações
          </button>
        </div>

        <div className="bg-glass p-6 rounded-2xl border border-white/10">
          <h2 className="mb-4 font-bold">Upload de Mídia</h2>
          <button className="flex items-center gap-2 border border-white/20 p-3 rounded w-full justify-center hover:bg-white/10">
            <Upload size={18} /> Upload de Avatar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
