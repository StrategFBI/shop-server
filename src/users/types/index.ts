import {ApiProperty} from '@nestjs/swagger'
export class LoginUserRequest {
    @ApiProperty({example: 'Ivan'} )
    username: string;
    @ApiProperty({example: 'Ivan123'} )
    password: string;
}
export class LoginUserResponse {
    @ApiProperty({example: {
        userId: 1,
        username: 'Ivan',
        password: 'Ivan123'
    }} )
    user: {
        userId: number,
        username: string,
        password: string
    }
    @ApiProperty({example: 'Logged in'} )
    msg: string;
}
export class LogoutUserResponse {
    @ApiProperty({example: 'session has ended'} )
    msg: string;
}
export class LoginCheckUserResponse {
    @ApiProperty({example: 1} )
    userId: number;
    @ApiProperty({example: 'Ivan'} )
    username: string;
    @ApiProperty({example: 'Ivan@gmail.ru'} )
    email: string;
}
export class SignupResponse {
    @ApiProperty({example: 1} )
    id: number;
    @ApiProperty({example: 'Ivan'} )
    username: string;
    @ApiProperty({example: '$2b$10$ceBPgoMEVzwhnU27m1nQku8hdFpM0DXNAif.6IJeiMjSun/NbQvf.'} )
    password: string;
    @ApiProperty({example: 'Ivan@gmail.ru'} )
    email: string;
    @ApiProperty({example: '2023-05-21T12:33:39.198Z'} )
    updatedAt: string;
    @ApiProperty({example: '2023-05-21T12:33:39.198Z'} )
    createdAt: string;
}


