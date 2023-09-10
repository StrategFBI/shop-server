import { Controller, Param, UseGuards } from '@nestjs/common';
import { BoilerPartsService } from './boiler-parts.service';
import {Query,Get, Body, Post} from '@nestjs/common';
import { AuthenticateGuard } from 'src/auth/authenticated.guard';
import {ApiOkResponse, ApiBody} from '@nestjs/swagger'
import { FindOneResponse, GetBestsellersResponse, GetByNameRequest, GetByNameResponse, GetNewResponse, PaginateAndFilterResponse, SearchRequest, SearchResponse } from './types';

@Controller('boiler-parts')
export class BoilerPartsController {
    constructor(private readonly boilerPartsService: BoilerPartsService) {}
    @ApiOkResponse({type: PaginateAndFilterResponse})
    @UseGuards(AuthenticateGuard)
    @Get()
    paginateAndFilter(@Query() query) {
        return this.boilerPartsService.paginateAndFilter(query)
    }
    @ApiOkResponse({type: FindOneResponse})
    @UseGuards(AuthenticateGuard)
    @Get('find/:id')
    getOne(@Param('id') id: string) {
        return this.boilerPartsService.findOne(id)
    }
    @ApiOkResponse({type: GetBestsellersResponse})
    @UseGuards(AuthenticateGuard)
    @Get('bestsellers')
    getBestsellers() {
        return this.boilerPartsService.bestsellers()
    }
    @ApiOkResponse({type: GetNewResponse})
    @UseGuards(AuthenticateGuard)
    @Get('new')
    getNew() {
        return this.boilerPartsService.new()
    }
    @ApiOkResponse({type: SearchResponse})
    @ApiBody({type: SearchRequest})
    @UseGuards(AuthenticateGuard)
    @Post('search')
    search(@Body(){search}:{search:string}) {
        return this.boilerPartsService.searchByString(search)
    }
    @ApiOkResponse({type: GetByNameResponse})
    @ApiBody({type: GetByNameRequest})
    @UseGuards(AuthenticateGuard)
    @Post('name')
    getByName(@Body(){name}:{name: string}) {
        return this.boilerPartsService.findOneByName(name)
    }
}
