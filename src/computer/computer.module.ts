import { Module } from '@nestjs/common';
import { ComputerController } from './computer.controller';
import { ComputerService } from './computer.service';
import { CpuModule } from '../cpu/cpu.module';
import { DiskModule } from '../disk/disk.module';

@Module({
  controllers: [ComputerController],
  providers: [ComputerService],
  imports: [CpuModule,
  DiskModule]
})
export class ComputerModule {}
