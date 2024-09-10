import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeachersModule } from './teachers/teachers.module';
import { StudentsModule } from './students/students.module';
import { Student } from './students/entities/student.entity';
import { Teacher } from './teachers/entities/teacher.entity';



@Module({
  imports: [TeachersModule, StudentsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'juan123',
      database: 'juan-db',
      entities: [Student, Teacher],
      synchronize: true,
    }),

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
