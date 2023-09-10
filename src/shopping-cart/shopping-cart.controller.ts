import { Controller, Get, Param, UseGuards, Post, Body, Patch, Delete } from '@nestjs/common';
import { ShoppingCartService } from './shopping-cart.service';
import { AuthenticateGuard } from 'src/auth/authenticated.guard';
import { AddToCartDto } from './dto/add-to-cart.dto';
import { ApiBody, ApiOkResponse } from '@nestjs/swagger';
import { GetAllResponse, AddToCardResponse, UpdateCountResponse, UpdateCountRequest, TotalPriceResponse, TotalPriceRequest } from './types';

@Controller('shopping-cart')
export class ShoppingCartController {
    constructor(private readonly shoppingCartService: ShoppingCartService) {}
    @ApiOkResponse({type: [GetAllResponse]})
    @UseGuards(AuthenticateGuard)
    @Get(':id')
    getAll(@Param('id') userId: string) {
        return this.shoppingCartService.findAll(userId)
    }
    @ApiOkResponse({type: AddToCardResponse})
    @UseGuards(AuthenticateGuard)
    @Post('/add')
    addToCart(@Body() addToCartDto: AddToCartDto) {
        return this.shoppingCartService.add(addToCartDto)
    }
    @ApiOkResponse({type: UpdateCountResponse})
    @ApiBody({type: UpdateCountRequest})
    @UseGuards(AuthenticateGuard)
    @Patch('/count/:id')
    updateCount(
        @Body() {count}:{count: number}, 
        @Param('id') partId: string) {
        return this.shoppingCartService.updateCount(count, partId)
    }
    @ApiOkResponse({type: TotalPriceResponse})
    @ApiBody({type: TotalPriceRequest})
    @UseGuards(AuthenticateGuard)
    @Patch('/total-price/:id')
    updateTotalPrice(
        @Body() {total_price}:{total_price: number}, 
        @Param('id') partId: string) {
        return this.shoppingCartService.updateTotalPrice(total_price,partId)
    }
    @UseGuards(AuthenticateGuard)
    @Delete('/one/:id')
    removeOne(
        @Param('id') partId: string) {
        return this.shoppingCartService.remove(partId)
    }
    @UseGuards(AuthenticateGuard)
    @Delete('/all/:id')
    removeAll(
        @Param('id') userId: string) {
        return this.shoppingCartService.removeAll(userId)
    }
}
