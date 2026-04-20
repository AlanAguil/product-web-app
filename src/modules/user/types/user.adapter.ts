import type { User, UserResponseDto } from './entity/user.entity';
import type { CreateUserDto } from './models/create.user.dto';
import type { UpdateUserDto } from './models/update.user.dto';

// Mapeador de API (DTO) -> Dominio (Entity)
// "Lo que recibo del backend lo convierto en algo útil para mi app"
export const toDomain = (dto: UserResponseDto): User => {
    return {
        id: dto.id,
        // Aquí concatenamos como querías
        fullName: `${dto.firstName} ${dto.lastName}`,
        email: dto.email,
        // Lógica de negocio segura
        role: dto.roleType === 'admin' ? 'admin' : 'customer',
        // Manejo de nulos explícito y claro
        avatar: dto.avatar ?? 'https://via.placeholder.com/150',
        createdAt: new Date(dto.createdAt).toLocaleDateString()
    };
};

// Mapeador de Dominio (Entity) -> API (DTO para Crear)
// "Preparo los datos para enviarlos al backend"
export const toCreateDto = (user: User): CreateUserDto => {
    return {
        name: user.fullName, // O la lógica para separar nombres si fuera necesario
        email: user.email,
        secret: '123456' // Aquí podrías generar o pedir la contraseña real
    };
};

// Mapeador de Dominio (Entity) -> API (DTO para Actualizar)
export const toUpdateDto = (changes: Partial<User>): UpdateUserDto => {
    const dto: UpdateUserDto = {};

    // Solo mapeamos lo que existe (Partial)
    if (changes.fullName) dto.name = changes.fullName;
    if (changes.avatar) dto.profilePicture = changes.avatar;

    return dto;
};