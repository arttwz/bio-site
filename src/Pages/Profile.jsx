import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GlitchText } from '../components/Effects/GlitchText';
import { AudioPlayer } from '../components/Player/AudioPlayer';

const Profile = () => {
  const { username } = useParams();
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    // Aqui seria chamada a API para buscar dados no banco D1
  }, [username]);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      <div className="text-center">
        <GlitchText>{username}</GlitchText>
        <p className="text-gray-400 mt-2">Longe de tudo</p>
      </div>
      
      <div className="mt-8">
        <AudioPlayer title="Backstage" artist="Desconhecido" src="/music/sample.mp3" />
      </div>
    </div>
  );
};

export default Profile;
