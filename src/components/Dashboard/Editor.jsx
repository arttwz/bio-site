import React, { useState } from 'react';

export const Editor = ({ user, onSave }) => {
  const [formData, setFormData] = useState({ bio: user?.bio || '', primaryColor: '#ffffff' });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-glass p-6 rounded-xl border border-white/10 w-full max-w-lg text-white">
      <h2 className="text-xl font-bold mb-4">Editar Perfil</h2>
      <input 
        type="text" 
        value={formData.bio}
        onChange={(e) => setFormData({...formData, bio: e.target.value})}
        className="w-full bg-black/50 p-2 rounded border border-white/10 mb-4"
        placeholder="Sua bio..."
      />
      <input 
        type="color" 
        value={formData.primaryColor}
        onChange={(e) => setFormData({...formData, primaryColor: e.target.value})}
        className="w-full h-10 cursor-pointer"
      />
      <button type="submit" className="w-full mt-4 bg-white text-black font-bold py-2 rounded">
        Salvar Alterações
      </button>
    </form>
  );
};
