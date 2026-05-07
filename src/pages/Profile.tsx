import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import UserProfileForm from '@/modules/user/components/UserProfileForm';

const Profile: React.FC = () => {
    const [, setSearchTerm] = useState<string>('');

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'var(--bg-secondary)' }}>
            <Navbar onSearch={setSearchTerm} />
            <main style={{ flex: 1, padding: '2rem 1rem' }}>
                <UserProfileForm />
            </main>
            <Footer />
        </div>
    );
};

export default Profile;
