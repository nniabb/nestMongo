import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExpenseService } from './expense.service';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { Expense } from './entities/expense.entity';
import { ExpenseIdParams } from './dto/expense-id.dto';

@Controller('expense')
export class ExpenseController {
  constructor(private readonly expenseService: ExpenseService) {}

  @Post()
  create(@Body() createExpenseDto: CreateExpenseDto): Promise<Expense> {
    return this.expenseService.create(createExpenseDto);
  }

  @Get()
  findAll() {
    return this.expenseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') params: ExpenseIdParams) {
    const {id} = params;
    return this.expenseService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExpenseDto: UpdateExpenseDto) {
    return this.expenseService.update(id, updateExpenseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.expenseService.remove(id);
  }
}
