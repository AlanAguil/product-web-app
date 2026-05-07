import React from 'react';
import '../styles/user.profile.css';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { useUserProfile } from '../hooks/useUserProfile';

const UserProfileForm: React.FC = () => {
    const {
        formData,
        isLoading,
        successMsg,
        errorMsg,
        handleChange,
        handleUpdateProfile
    } = useUserProfile();

    return (
        <div className="profile-container">
            <div className="profile-card">
                <div className="card-header">
                    <h5 className="card-title">Mi Perfil</h5>
                </div>
                <div className="card-body">
                    {successMsg && <div className="feedback-msg feedback-success">{successMsg}</div>}
                    {errorMsg && <div className="feedback-msg feedback-error">{errorMsg}</div>}

                    <form onSubmit={handleUpdateProfile}>
                        <div className="form-body">
                            <div className="form-group">
                                <label>Nombre:</label>
                                <Input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName || ''}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Correo Electrónico:</label>
                                <Input
                                    type="email"
                                    name="email"
                                    value={formData.email || ''}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Número de Teléfono:</label>
                                <Input
                                    type="tel"
                                    name="phoneNumber"
                                    value={formData.phoneNumber || ''}
                                    onChange={handleChange}
                                    maxLength={10}
                                />
                            </div>
                            <div className="form-group">
                                <label>Calle:</label>
                                <Input
                                    type="text"
                                    name="street"
                                    value={formData.street || ''}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Número:</label>
                                <Input
                                    type="text"
                                    name="number"
                                    value={formData.number || ''}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Colonia:</label>
                                <Input
                                    type="text"
                                    name="colony"
                                    value={formData.colony || ''}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Código Postal:</label>
                                <Input
                                    type="text"
                                    name="cp"
                                    value={formData.cp || ''}
                                    onChange={handleChange}
                                    maxLength={6}
                                />
                            </div>
                        </div>
                        <div className="profile-actions">
                            <Button type="submit" variant="primary" disabled={isLoading} className="mt-3">
                                {isLoading ? 'Guardando...' : 'Guardar Cambios'}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="profile-card pedidos-summary">
                <div className="card-header">
                    <h5 className="card-title">Mis Pedidos</h5>
                </div>
                <div className="card-body">
                    <p>Aquí puedes ver el historial de tus pedidos.</p>
                    <div className="profile-actions">
                        <Button variant="secondary" onClick={() => window.location.href = '/mis-pedidos'}>
                            Ver Pedidos
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfileForm;
