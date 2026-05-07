import { useState, useEffect, type ChangeEvent, type FormEvent } from 'react';
import type { User } from '../types/entity/user.entity';
// @ts-ignore
import { useAuth } from '@/contexts/AuthContext';
import { UserService } from '../services/user.service';

export const useUserProfile = () => {
  const { getCurrentUser, updateUser } = useAuth();
  const currentUser = getCurrentUser() as User | null;

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const [formData, setFormData] = useState<Partial<User>>({
    fullName: '',
    email: '',
    phoneNumber: '',
    street: '',
    number: '',
    colony: '',
    cp: ''
  });

  useEffect(() => {
    if (currentUser) {
      setFormData({
        fullName: currentUser.fullName || '',
        email: currentUser.email || '',
        phoneNumber: currentUser.phoneNumber || '',
        street: currentUser.street || '',
        number: currentUser.number || '',
        colony: currentUser.colony || '',
        cp: currentUser.cp || ''
      });
    }
  }, [currentUser]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleUpdateProfile = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccessMsg(null);
    setErrorMsg(null);

    try {
      // Simulación de petición de actualización usando el UserService (o se puede llamar directo a API real)
      const updatedUser = await UserService.updateProfile(formData);
      // Actualizar contexto global
      updateUser(updatedUser);
      setSuccessMsg("¡Perfil actualizado con éxito!");
      
      // Auto-ocultar mensaje
      setTimeout(() => setSuccessMsg(null), 3000);
    } catch (err: any) {
      setErrorMsg(err.message || "Error al actualizar el perfil.");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formData,
    isLoading,
    successMsg,
    errorMsg,
    handleChange,
    handleUpdateProfile
  };
};
